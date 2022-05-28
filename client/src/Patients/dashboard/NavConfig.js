// component
import Iconify from '../../components/Iconify';

import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/patientDashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Profile',
    path: '/patientDashboard/user',
    icon: <PersonIcon/>,
  },
  {
    title: 'Doctor',
    path: '/patientDashboard/doctors',
    icon: <GroupIcon/>,
  },
  {
    title: 'Appointment',
    path: '/patientDashboard/blog',
    icon: <BookOnlineIcon/>,
  },
  
  {
    title: 'Meeting room',
    path: '/patientDashboard/blog',
    icon: <MeetingRoomIcon/>,
  },
  {
    title: 'Last appointment',
    path: '/dashboard/blog',
    icon:<ContentPasteGoIcon/>,
  }
  ,
  {
    title: 'Last update',
    path: '/patientDashboard/blog',
    icon:<SystemUpdateIcon/>,
  }
 
];

export default navConfig;
