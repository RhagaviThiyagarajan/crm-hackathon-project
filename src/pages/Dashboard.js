import { TicketCard } from "../components/TicketCard";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CategoriesContext from "../context";

export function Dashboard() {
  const [tickets, setTickets] = useState(null);
  const { categories, setCategories } = useContext(CategoriesContext);

  useEffect(async () => {
    const response = await axios.get("http://localhost:8000/tickets");

    //wasn't sure how to get the Documet Id with the object.. open to better suggestions
    const dataObject = response.data.data;

    const arrayOfKeys = Object.keys(dataObject);
    const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);
    const formattedArray = [];

    arrayOfKeys.forEach((key, index) => {
      const formmatedData = { ...arrayOfData[index] };
      formmatedData["documentId"] = key;
      formattedArray.push(formmatedData);
    });

    setTickets(formattedArray);
  }, []);

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))]);
  }, [tickets]);
  // const tickets = [
  //   {
  //     category: " Q1 2022",
  //     color: "red",
  //     title: "CRM FORM",
  //     owner: "Admin",
  //     Avatar: "https://clipground.com/images/admin-logo-3.png",
  //     status: "available",
  //     priority: 1,
  //     progress: 40,
  //     description: "CRM FORM",
  //     timestamp: "09-08-2022",
  //   },
  //   {
  //     category: " Q1 2022",
  //     color: "pink",
  //     title: "CRM FORM",
  //     owner: "Manager",
  //     Avatar: "https://clipground.com/images/admin-logo-3.png",
  //     status: "In Meeting",
  //     priority: 2,
  //     progress: 80,
  //     description: "CRM FORM",
  //     timestamp: "09-08-2022",
  //   },
  //   {
  //     category: " Q1 2022",
  //     color: "black",
  //     title: "CRM FORM",
  //     owner: "Employee",
  //     Avatar: "https://clipground.com/images/admin-logo-3.png",
  //     status: "busy",
  //     priority: 3,
  //     progress: 100,
  //     description: "CRM FORM",
  //     timestamp: "09-08-2022",
  //   },
  // ];

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(255,255,201)",
    "rgb(186,255,255)",
  ];
  //   const uniqueCategories = [
  //     ...new Set(
  //       tickets.map((category) => {
  //         category ={category}
  //       })
  //     ),
  //   ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories
          ? tickets.map((uniqueCategory, CategoryIndex) => (
              <div key={CategoryIndex}>
                <h3>{uniqueCategory}</h3>
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, index) => (
                    <TicketCard
                      id={index}
                      color={colors[CategoryIndex] || colors[0]}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            ))
          : "none"}
      </div>
    </div>
  );
}
