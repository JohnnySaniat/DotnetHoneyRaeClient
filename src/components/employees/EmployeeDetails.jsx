import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployee } from "../../data/employeeData";

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const employeeDetails = await getEmployee(id);
        setEmployee(employeeDetails);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  if (!employee) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Id</th>
          <td>{employee.id}</td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th scope="row">Specialty</th>
          <td>{employee.specialty}</td>
        </tr>
        {/* Add other employee attributes as needed */}
      </tbody>
    </Table>
  );
}

export default EmployeeDetails;
