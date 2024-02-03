import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar className='Navigation' expand="md">
        <Nav navbar>
          <NavbarBrand href="/servicetickets">Honey Rae's
          <img
          src="https://images.vexels.com/media/users/3/258748/isolated/lists/d5710688f34b82d7826b59cb57188150-honey-pot-cut-out.png"
          alt="Honey Rae's Logo"
          style={{ height: '40px', marginRight: '10px' }} // Set the desired height and additional styling
        />
          </NavbarBrand>
          <NavItem>
            <NavLink href="/servicetickets">Service Tickets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/customers">Customers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/employees">Employees</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
