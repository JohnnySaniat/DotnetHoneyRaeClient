import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getServiceTicket } from "../../data/serviceTicketsData";

function TicketDetails() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const ticketDetails = await getServiceTicket(id);
        setTicket(ticketDetails);
      } catch (error) {
        console.error("Error fetching ticket details:", error);
      }
    };

    fetchTicketDetails();
  }, [id]);

  if (!ticket) {
    return null;
  }

  console.log(ticket);
  
  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Id:</th>
          <td>{ticket.id}</td>
        </tr>
        <tr>
          <th scope="row">CustomerId:</th>
          <td>{ticket.customerId}</td>
        </tr>
        <tr>
          <th scope="row">EmployeeId:</th>
          <td>{ticket.employeeId || "Unassigned"}</td>
        </tr>
        <tr>
          <th scope="row">Description:</th>
          <td>{ticket.description}</td>
        </tr>
        <tr>
          <th scope="row">Emergency:</th>
          <td>{ticket.emergency ? "yes" : "no"}</td>
        </tr>
        <tr>
          <th scope="row">Date Completed:</th>
          <td>{ticket.dateCompleted?.split("T")[0] || "Incomplete"}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TicketDetails;
