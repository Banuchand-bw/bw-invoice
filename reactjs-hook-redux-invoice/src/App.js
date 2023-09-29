import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Invoice from './Invoice';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">BW Invoice</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="invoices/list">Invoices</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Navigate to="/invoices/list" replace />} />
          <Route path="/invoices/list" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
