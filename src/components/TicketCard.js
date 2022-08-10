
import { AvatarDisplay } from "../components/AvatarDisplay";
import { StatusDisplay } from "../components/StatusDisplay";
import { PriorityDisplay } from "../components/PriorityDisplay";
import { ProgressDisplay } from "../components/Progressdisplay";
import { DeleteBlock } from "../components/DeleteBlock";

import { Link } from "react-router-dom";

export function TicketCard({color,ticket}) {
  return (
    <div className="ticket-card">
          <div className="ticket-color" style={{backgroundColor:color}}></div>
      <Link to={`/ticket/${ticket.documentId}`}id="link">
    
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket}/>
        <StatusDisplay status={ticket.status}/>
        <PriorityDisplay priority={ticket.priority}/>
        <ProgressDisplay progress={ticket.progress}/>
      </Link>
      <DeleteBlock deleteTicket={ticket.delete} documentId={ticket.documentId} />
    </div>
  );
}
