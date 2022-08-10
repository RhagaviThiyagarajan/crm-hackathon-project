import { TicketCard } from "../components/TicketCard";
export function Dashboard() {
  const tickets = [
    {
      category: " Q1 2022",
      color: "red",
      title: "CRM FORM",
      owner: "Admin",
      Avatar: "https://clipground.com/images/admin-logo-3.png",
      status: "available",
      priority: 1,
      progress: 40,
      description: "CRM FORM",
      timestamp: "09-08-2022",
    },
    {
      category: " Q1 2022",
      color: "pink",
      title: "CRM FORM",
      owner: "Manager",
      Avatar: "https://clipground.com/images/admin-logo-3.png",
      status: "In Meeting",
      priority: 2,
      progress: 80,
      description: "CRM FORM",
      timestamp: "09-08-2022",
    },
    {
      category: " Q1 2022",
      color: "black",
      title: "CRM FORM",
      owner: "Employee",
      Avatar: "https://clipground.com/images/admin-logo-3.png",
      status: "busy",
      priority: 3,
      progress: 100,
      description: "CRM FORM",
      timestamp: "09-08-2022",
    },
  ];
  const uniqueCategories = [
    ...new Set(
      tickets.map((category) => {
        category ={category}
      })
    ),
  ];
  console.log(uniqueCategories);
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {
          tickets && uniqueCategories? 
          tickets.map((uniqueCategory,CategoryIndex)=>
            (
                <div key={CategoryIndex}>
                    <h3>{uniqueCategory}</h3>
                    {tickets.filter(ticket=>
                        ticket.category===uniqueCategory).map((filteredTicket,index)=>
                        (
                            <TicketCard
                            id={index}
                            color={filteredTicket.color}
                            ticket={filteredTicket}/>
                        ))
                        }
                    </div>
            ))
            :"none"
        }
      </div>
    </div>
  );
}
