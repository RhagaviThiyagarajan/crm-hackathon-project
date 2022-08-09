// import AvatarDisplay from AvatarDisplay;
// import StatusDisplay from "./StatusDisplay";
// import PriorityDisplay from "./PriorityDisplay";
// import ProgressDisplay from "./Progressdisplay";
// import DeleteBlock from "./DeleteBlock";
import {AvatarDisplay} from '../components/AvatarDisplay';
import {StatusDisplay} from '../components/StatusDisplay';
import {PriorityDisplay} from '../components/PriorityDisplay';
import {ProgressDisplay} from '../components/Progressdisplay';
import {DeleteBlock} from '../components/DeleteBlock';


import { Link } from "react-router-dom";

export function TicketCard()
{
return(
    <div className="ticket-card">
      <div className="ticket-color"></div>
      <Link>
      <h3>
        title
      </h3>
<AvatarDisplay/>
       <StatusDisplay/>
      <PriorityDisplay/>
      <ProgressDisplay/> 
      

      </Link>
      <DeleteBlock/>
    </div>
)
}