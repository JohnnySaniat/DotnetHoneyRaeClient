import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";

export default function Employees() {
  return (
    <>
      <h2 className='employee-header'>Employees</h2>
      <Link to="/employees/create"></Link>
      <Outlet />
    </>
  );
}
