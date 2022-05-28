// component
import Iconify from '../../components/Iconify';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventNoteIcon from '@mui/icons-material/EventNote';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Profile',
    path: '/dashboard/app',
    icon: <PersonIcon/>,
  },
  {
    title: 'Doctor',
    path: '/dashboard/user',
    icon: <GroupIcon/>,
  },
  {
    title: 'Patient',
    path: '/dashboard/products',
    icon:<PeopleAltIcon/>,
  },
  {
    title: 'Doctor schedule',
    path: '/dashboard/blog',
    icon: <EventNoteIcon/>,
  },
  {
    title: 'Appointment',
    path: '/dashboard/blog',
    icon:<BookOnlineIcon/>,
  },
  
 
];

export default navConfig;
