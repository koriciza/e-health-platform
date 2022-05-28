import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';

import UploadIcon from '@mui/icons-material/Upload';
import Avatar from '@mui/material/Avatar';

import { TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections

import Profile from '../sections/auth/register/Profile';

import Grid from '@mui/material/Grid';
import { Stack, Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
// component
import Iconify from '../components/Iconify';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

  /* const [profileImg, setProfile] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

	const  imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () =>{
		  if(reader.readyState === 2){
			setProfile(reader.result)
		
		  }
		}
		reader.readAsDataURL(e.target.files[0])
	  };
  */

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string() .min(6, 'Password Must be four characters long!')
    .max(20, 'Too Long!')
    .required('Password is required'),
    confirmationPassword:Yup.string().required('Password confirmation is required'),
    
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmationPassword:'',
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;


  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
<>

    <Page title="Register">
      <RootStyle>
        <HeaderStyle>
          <Logo />
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Already have an account? {''}
              <Link variant="subtitle2" component={RouterLink} to="/login">
                Login
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        <Container>
     
          <ContentStyle>

          <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
          <Typography variant="h4" gutterBottom>
             SIGN UP AS A DOCTOR
          </Typography>
             {/* SOCIAL MEDIA */}

          <Stack direction="row" spacing={2}>
          <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
          </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
          </Typography>
          </Divider>

       {/*  SIGN UP FORM */}

       <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
           {/* Profile */}
           {/* <Box
            display='flex'
            textAlign='center'
            justifyContent='center'
            flexDirection='column'>
           
            <Avatar size='md' src={profileImg}  sx={{ width: 100, height: 100}} />

            <Button
              variant='contained'
              component='label'
              startIcon={<UploadIcon/>}>
              Choose your profile
              <input
                name='avatar'
                accept='image/*'
                id='contained-button-file'
                type='file'
                hidden
                onChange={
                  imageHandler  
              }
              />
            </Button>
          </Box>

 */}
           {/* End profile */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

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
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showConfirmationPassword ? 'text' : 'password'}
            label="Password confirmation"
            {...getFieldProps('confirmationPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowConfirmationPassword((prev) => !prev)}>
                    <Iconify icon={showConfirmationPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.confirmationPassword && errors.confirmationPassword)}
            helperText={touched.confirmationPassword && errors.confirmationPassword}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>



       <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" color="text.primary" href="#">
              Terms of Service
            </Link>
            {''}and{''}
            <Link underline="always" color="text.primary" href="#">
              Privacy Policy
            </Link>
            .
          </Typography>

          {!smUp && (
            <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?{' '}
              <Link variant="subtitle2" to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          )}
        </Grid>
        
        
      </Grid>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>

</>
  
  );
}
