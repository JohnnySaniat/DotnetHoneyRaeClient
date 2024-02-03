import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import {
  getServiceTicket,
  getAvailableEmployees,
  assignEmployeeToTicket,
} from "../../data/serviceTicketsData";

function TicketDetails() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [assignEmployeeModal, setAssignEmployeeModal] = useState(false);
  const [availableEmployees, setAvailableEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  const toggleAssignEmployeeModal = async () => {
    setAssignEmployeeModal(!assignEmployeeModal);

    if (!assignEmployeeModal) {
      try {
        const employees = await getAvailableEmployees();
        setAvailableEmployees(employees);
      } catch (error) {
        console.error("Error fetching available employees:", error);
      }
    }
  };

  const handleEmployeeSelection = (employeeId) => {
    setSelectedEmployee(employeeId);
  };

  const assignEmployee = async () => {
    try {
      if (!selectedEmployee) {
        console.error("No employee selected");
        return;
      }

      await assignEmployeeToTicket(id, selectedEmployee);
      const updatedTicket = await getServiceTicket(id);
      setTicket(updatedTicket);
      toggleAssignEmployeeModal();
      setSelectedEmployee(null);
    } catch (error) {
      console.error("Error assigning employee to ticket:", error);
    }
  };

  if (!ticket) {
    return null;
  }

  return (
    <div>
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
            <td>
              {ticket.employeeId ? (
                ticket.employeeId
              ) : (
                <div>
                  <Button color="primary" onClick={toggleAssignEmployeeModal}>
                    Assign Employee
                  </Button>
                  <Modal id="assign-modal"
                    isOpen={assignEmployeeModal}
                    toggle={toggleAssignEmployeeModal}
                  >
                    <ModalHeader toggle={toggleAssignEmployeeModal}>
                      Select an Employee
                    </ModalHeader>
                    <ModalBody>
                      <ul>
                        {availableEmployees.map((employee) => (
                          <div
                            key={employee.id}
                            onClick={() => handleEmployeeSelection(employee.id)}
                            style={{
                              cursor: "pointer",
                              color:
                                selectedEmployee === employee.id
                                  ? "green"
                                  : "black",
                            }}
                          >
                            {employee.name}
                          </div>
                        ))}
                      </ul>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={assignEmployee}>
                        Assign
                      </Button>{" "}
                      <Button
                        color="secondary"
                        onClick={toggleAssignEmployeeModal}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              )}
            </td>
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
    </div>
  );
}

export default TicketDetails;
