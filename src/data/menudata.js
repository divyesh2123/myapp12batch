import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Badge } from '@mui/material';
export const Webmenu = [
    "Profile",
    "My account"


]

export const navitems = [
    {
        title : "Messages",
        icone :   <MailIcon />,
        helptext: "show 4 new mails"
    },
    {
        title : "Notifications",
        icone :  <NotificationsIcon />,
        helptext: "show 17 new notifications"
    },

    {
        title : "Notifications",
        icone :   <AccountCircle />,
        helptext: "account of current user"
    }



]

export const headerItem = [{
    helpText : "show 4 new mails",
    child : <Badge badgeContent={4} color="error">
    <MailIcon />
  </Badge>



},
{
    helpText : "show 17 new notifications",
    child : <Badge badgeContent={17} color="error">
    <NotificationsIcon />
  </Badge>

},
{

    helpText : "account of current user",
    child :    <AccountCircle />


}


]



