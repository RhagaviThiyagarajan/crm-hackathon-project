// import AvatarDisplay from AvatarDisplay;
// import StatusDisplay from "./StatusDisplay";
// import PriorityDisplay from "./PriorityDisplay";
// import ProgressDisplay from "./Progressdisplay";
// import DeleteBlock from "./DeleteBlock";
import { AvatarDisplay } from "../components/AvatarDisplay";
import { StatusDisplay } from "../components/StatusDisplay";
import { PriorityDisplay } from "../components/PriorityDisplay";
import { ProgressDisplay } from "../components/Progressdisplay";
import { DeleteBlock } from "../components/DeleteBlock";

import { Link } from "react-router-dom";

export function TicketCard({color,ticket}) {
  return (
    <div className="ticket-card">
          <div className="ticket-color"></div>
      <Link to={`/ticket/${ticket.documentId}`}id="link">
    
        <h3>{ticket.title}</h3>
        <AvatarDisplay />
        <StatusDisplay />
        <PriorityDisplay />
        <ProgressDisplay />
      </Link>
      <DeleteBlock />
    </div>
  );
}
