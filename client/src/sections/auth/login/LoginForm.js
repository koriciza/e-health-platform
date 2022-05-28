import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel,Typography, Radio,RadioGroup,FormControl,FormLabel  } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [v_doctor,setV_doctor]=useState(false);
  const [v_patient,setV_patient]=useState(false);
  const [v_admin,setV_admin]=useState(false);

  const[whoIs,set_WhoIs]=useState("Patient");

  const getUser = event => {
    set_WhoIs(event.target.value );
    
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
      doctor:v_doctor,
      patient:v_patient,
      doctor:v_doctor,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {

      if(whoIs=="Patient"){

        navigate('/patientDashboard/app', { replace: true });
      }

      if(whoIs=="Admin"){

        navigate('/dashboard/app', { replace: true });

      }

      if(whoIs=="Doctor"){

        navigate('/doctorDashboard/app', { replace: true });
      }
     

    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>
       
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
    

  <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">  Who Would you like to connect as ?</FormLabel>
  <RadioGroup
    row
    aria-labelledby="demo-radio-buttons-group-label"
    //defaultValue="Patient"
    value={whoIs} 
    onChange={getUser}
    name="radio-buttons-group"
  >
    <FormControlLabel value="Patient" control={<Radio />} label="Patient" />
    <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
    <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
   </RadioGroup>
    </FormControl>


          </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
