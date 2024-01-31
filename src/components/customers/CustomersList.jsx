import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCustomers } from '../../data/customerData';
import { Link } from "react-router-dom";

export default function CustomersList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Details</th>
          {/* Add other customer attributes as needed */}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={`customer-${customer.id}`}>
            <th scope="row">{customer.id}</th>
            <td>{customer.name}</td>
            <td>{customer.address}</td>
            <td>
              <Link to={`/customers/${customer.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
