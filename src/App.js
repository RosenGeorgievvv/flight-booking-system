import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import BookingForm from './components/BookingForm'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [departureAir, setDepartureAir] = useState(0);
  const [arrivingAir, setArrivingAir] = useState(0);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flightData, setFlightData] = useState([]);

  console.log(firstName)
  console.log(lastName)
  console.log(departureAir)
  console.log(arrivingAir)
  console.log(departureDate)
  console.log(returnDate)

  const token = 'JU19y1QSmyW18urRqSfBoMYt3HH413'

  const onUpdate = (data) => {
    fetch(`https://vm-fe-interview-task.herokuapp.com/api/bookings?authToken=${token}&pageIndex=0`)
      .then(response => response.json())
      .then(data => setFlightData(data.list));
  }


  const onCreate = (data) => {

    fetch(`https://vm-fe-interview-task.herokuapp.com/api/bookings/create?authToken=${token}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(response => {
      console.log(response)
    })
      .catch(error => {
        console.log(error)
      })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

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

    } else {
      alert('Please fill up all the fields!')
    }
  }

  useEffect(() => {
    onUpdate();
  }, [])


  return (
    <div>
      <div className="justify-content-center d-flex" >
        <BookingForm
          setFirstName={setFirstName}
          setLastName={setLastName}
          setDepartureAir={setDepartureAir}
          setArrivingAir={setArrivingAir}
          setDepartureDate={setDepartureDate}
          setReturnDate={setReturnDate}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
      <div className="justify-content-center d-flex mt-5">
        <ul>
          {flightData.map((flight, i) => (
            <li key={i}>{flight.id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
