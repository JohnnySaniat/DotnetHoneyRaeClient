import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from './components/customers/Customers';
import CreateCustomer from './components/customers/CreateCustomer';
import Employees from './components/employees/Employees';
import EmployeeList from './components/employees/EmployeeList';
import CreateEmployee from './components/employees/CreateEmployee';
import CustomerDetails from './components/customers/CustomerDetails';
import EmployeeDetails from './components/employees/EmployeeDetails';
import CustomersList from './components/customers/CustomersList';
import ServiceTickets from './components/servicetickets/ServiceTickets';
import CreateTicket from './components/servicetickets/CreateTicket';
import TicketDetails from './components/servicetickets/TicketDetails';
import TicketsList from './components/servicetickets/TicketsList';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="servicetickets" element={<ServiceTickets />}>
          <Route index element={<TicketsList />} />
          <Route path=":id" element={<TicketDetails />} />
          <Route path="create" element={<CreateTicket />} />
        </Route>
      </Route>

      <Route path="/" element={<App />}>
        <Route path="customers" element={<Customers />}>
          <Route index element={<CustomersList />} />
          <Route path="create" element={<CreateCustomer />} />
          <Route path=":id" element={<CustomerDetails />} />
        </Route>
      </Route>

      <Route path="/" element={<App />}>
        <Route path="employees" element={<Employees />}>
          <Route index element={<EmployeeList />} />
          <Route path="create" element={<CreateEmployee />} />
          <Route path=":id" element={<EmployeeDetails />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();
