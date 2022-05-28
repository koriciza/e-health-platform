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
    path: '/doctorDashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Profile',
    path: '/doctorDashboard/user',
    icon:<PersonIcon/>,
  },
  {
    title: 'Schedule',
    path: '/doctorDashboard/products',
    icon:<EventNoteIcon />,
  },
  {
    title: 'Appointment',
    path: '/doctorDashboard/blog',
    icon: <BookOnlineIcon/>,
  },
 
  {
    title: 'Meeting',
    path: '/doctorDashboard/blog',
    icon:<MeetingRoomIcon/>,
  },
  {
    title: 'Last appointment',
    path: '/doctorDashboard/blog',
    icon: <ContentPasteGoIcon/>,
  },
  {
    title: 'Last update',
    path: '/doctorDashboard/blog',
    icon: <SystemUpdateIcon/>,
  },

 
];

export default navConfig;
