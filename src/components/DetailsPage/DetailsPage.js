/* eslint-disable no-new-wrappers */
import React, { useEffect, useState } from 'react';
import { API_URL, token } from '../../config';
import { useParams, Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap';
import './DetailsPage.css';

const DetailsPage = (props) => {
    const [currentFlight, setCurrentFlight] = useState('')

    const params = useParams()
    const flightId = params.flightId

    const departureDate = new String(currentFlight.departureDate).split("T")
    const returnDate = new String(currentFlight.returnDate).split("T")
    console.log(departureDate[0]);
    console.log(returnDate[0]);

    const getById = (id) => {
        fetch(`${API_URL}/bookings/${id}?authToken=${token}`)
            .then(response => response.json())
            .then(data => setCurrentFlight(data));
    }

    const onDelete = (id) => {

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            }
        };

        fetch(`${API_URL}/bookings/delete/${id}?authToken=${token}`, requestOptions)
            .then(() => alert('Delete successfully'))
            .then(window.location.href = "/")
    }

    useEffect(() => {
        getById(params.flightId);
    }, [])

    console.log(currentFlight);

    return (
        <div className='detailsContainer'>
            <div className='text-center'>
                <h1 className='font-weight-bold'>Details page</h1>
            </div>
            <div className='detailsTable'>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td colSpan="3">{currentFlight?.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td colSpan="3">{currentFlight?.lastName}</td>
                        </tr>
                        <tr>
                            <td>Departure Airport</td>
                            <td colSpan="3">{currentFlight?.departureAirportId}</td>
                        </tr>
                        <tr>
                            <td>Arrival Airport</td>
                            <td colSpan="3">{currentFlight?.arrivalAirportId}</td>
                        </tr>
                        <tr>
                            <td>Departure Date</td>
                            <td colSpan="3">{departureDate[0]}</td>
                        </tr>
                        <tr>
                            <td>Date of return</td>
                            <td colSpan="3">{returnDate[0]}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='buttonsContainer justify-content-center d-flex mt-5'>
                    <Link to='/'>
                        <Button size="lg" variant="dark" >⬅️Back</Button>
                    </Link>

                    <Button size="lg" variant="dark" onClick={() => onDelete(flightId)}>💔Delete</Button>

                </div>
            </div>
        </div>

    );
}

export default DetailsPage;