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
      <h2>Service Tickets</h2>
      <Button color="primary" onClick={handleAddClick}>
        Add
      </Button>
      <Outlet />
    </>
  );
}
