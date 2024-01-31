import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomer } from '../../data/customerData';

function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const customerDetails = await getCustomer(id);
        setCustomer(customerDetails);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, [id]);

  if (!customer) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Id:</th>
          <td>{customer.id}</td>
        </tr>
        <tr>
          <th scope="row">Name:</th>
          <td>{customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Address:</th>
          <td>{customer.address}</td>
        </tr>
        {/* Add other customer details as needed */}
      </tbody>
    </Table>
  );
}

export default CustomerDetails;
