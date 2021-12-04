import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import BookingForm from '../BookingForm';
import { API_URL, token } from '../../config';
import { Link } from 'react-router-dom';
import './LandingPage.css';


function LandingPage() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [departureAir, setDepartureAir] = useState(null);
  const [arrivingAir, setArrivingAir] = useState(null);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flightData, setFlightData] = useState([]);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onUpdate = (data) => {
    fetch(`${API_URL}/bookings?authToken=${token}&pageIndex=0`)
      .then(response => response.json())
      .then(data => setFlightData(data.list));
  }

  const onCreate = (data) => {
    fetch(`${API_URL}/bookings/create?authToken=${token}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(response => {
      console.log(response);
    })
      .catch(error => {
        console.log(error)
      })
  }

  const onInputClear = () => {
    setFirstName('')
    setLastName('')
    setDepartureAir(null)
    setArrivingAir(null)
    setDepartureDate('')
    setReturnDate('')
  }

  const onSubmitHandler = () => {


    if (firstName && lastName && departureAir && arrivingAir && departureDate && returnDate) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        departureAirportId: departureAir,
        arrivalAirportId: arrivingAir,
        departureDate: departureDate,
        returnDate: returnDate
      }
      onCreate(data);
      onInputClear();
    } else {
      alert('Please fill up all the fields!')
    }
  }

  useEffect(() => {
    onUpdate();
  }, [scrollTop])

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);


  return (
    <div>
      <div className='text-center mt-5'>
        <h1>Booking App</h1>
      </div>
      <div className="justify-content-center d-flex mt-5" >
        <BookingForm
          firstName={firstName}
          lastName={lastName}
          departureAir={departureAir}
          arrivingAir={arrivingAir}
          departureDate={departureDate}
          returnDate={returnDate}

          setFirstName={setFirstName}
          setLastName={setLastName}
          setDepartureAir={setDepartureAir}
          setArrivingAir={setArrivingAir}
          setDepartureDate={setDepartureDate}
          setReturnDate={setReturnDate}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
      <hr />
      <div className="text-center">
        <h1>Flights List</h1>
      </div>
      <div className="justify-content-center d-flex mt-5">
        <ul>
          {flightData.map((flight, i) => (
            <Link key={i} to={`/details/${flight.id}`}>
              <li className='flightList'>Flight Id: {flight.id}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default LandingPage;
