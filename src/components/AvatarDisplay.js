import { Avatar } from "@mui/material";

import blankAvatar from '../images/blank-profile.png';

export function AvatarDisplay({ticket})
{
return(
    <div className="avatar-container">
        <div className="image-container">
        <img src= {ticket.avatar ? ticket.avatar : blankAvatar} alt={'photo of ' + ticket.owner}/>
        </div>
    </div>
)
}