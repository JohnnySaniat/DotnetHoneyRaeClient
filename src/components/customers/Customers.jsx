import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";

export default function Customers() {
  return (
    <>
      <h2 className='customer-header'>Customers</h2>
      <Link to="/customers/create"></Link>
      <Outlet />
    </>
  );
}
