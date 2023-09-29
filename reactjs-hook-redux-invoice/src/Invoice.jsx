import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import { fetchInvoices, deleteInvoice } from './features/invoice/invoiceSlice';
// import { useNavigate } from 'react-router-dom';

const Invoice = () => {
    const dispatch = useDispatch();
    const invoices = useSelector((state) => state.invoices.invoices);
    // const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchInvoices());
    }, [dispatch]);

    // const handleEdit = (id) => {
    //     navigate(`/invoices/edit/${id}`);
    // };

    // const handleDelete = (id) => {
    //     const invoiceToDelete = invoices.find((invoice) => invoice.id === id);
    //     const confirmDelete = window.confirm(`Are you sure you want to delete "${invoiceToDelete.name}"?`);
    //     if (confirmDelete) {
    //         dispatch(deleteInvoice(id));
    //     }
    // };

    // const handleAdd = () => {
    //     navigate('/invoices/create');
    // };

    return (
        <div className="container">
            <header className="text-center"><h1>Invoices</h1></header><br />
            <table className="table table-bordered border-primary table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Invoice</th>
                        <th>Name</th>
                        <th>Due Date</th>
                        <th>Total Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((item) => (
                        <tr key={item.invoice_id}>
                            <td>{item.invoice_number}</td>
                            <td>{item.bill_to_name}</td>
                            <td>{item.due_date}</td>
                            <td>{item.total_amount}</td>
                            <td>
                                <Button size="sm" variant="primary">
                                    View Invoice
                                </Button> &ensp;
                                {/* <Button size="sm" variant="primary" onClick={() => handleEdit(item.id)}>
                                    Edit
                                </Button> &ensp;
                                <Button size="sm" variant="danger" onClick={() => handleDelete(item.id)}>
                                    Delete
                                </Button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            {/* <Row className="justify-content-center">
                <Col xs="auto">
                    <Button variant="success" onClick={handleAdd}>Add</Button>
                </Col>
            </Row> */}
        </div>
    );
};

export default Invoice;