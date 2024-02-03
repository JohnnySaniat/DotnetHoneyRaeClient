import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function ServiceTickets() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/servicetickets/create');
  };

  return (
    <>
    <div className='service-form'>
      <h2 className='ticket-header'> Service Tickets</h2>
      <Button id="create" color="btn btn-warning" onClick={handleAddClick}>
        Add a Service Ticket
      </Button> 
      <Outlet />
    </div>
    </>
  );
}
