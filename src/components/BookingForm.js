import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


const BookingForm = ({
  firstName,
  lastName,
  departureAir,
  arrivingAir,
  departureDate,
  returnDate,
  setFirstName,
  setLastName,
  setDepartureAir,
  setArrivingAir,
  setDepartureDate,
  setReturnDate,
  onSubmitHandler }) => {

  return (
    <div className="w-50">
      <Form>
        <FormGroup>
          <Label htmlFor="first-name">
            First Name
          </Label>
          <Input onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="last-name">
            Last Name
          </Label>
          <Input onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="departure-airport">
            Departure Airport
          </Label>
          <Input onChange={(e) => setDepartureAir(e.target.value)}
            id="departureAirport"
            name="departureAirport"
            value={departureAir ? departureAir : ""}
            placeholder="Departure Airport"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="arriving-airport">
            Arriving Airport
          </Label>
          <Input onChange={(e) => setArrivingAir(e.target.value)}
            id="arrivingAirport"
            name="arrivingAirport"
            value={arrivingAir ? arrivingAir : ""}
            placeholder="Arriving Airport"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="departure-date">
            Departure Date
          </Label>
          <Input onChange={(e) => setDepartureDate(e.target.value)}
            id="departureDate"
            name="departureDate"
            value={departureDate}
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="arriving-date">
            Date of return
          </Label>
          <Input onChange={(e) => setReturnDate(e.target.value)}
            id="arrivingDate"
            name="arrivingDate"
            value={returnDate}
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>
        <div className="text-center">
          <Button onClick={onSubmitHandler}>Submit</Button>
        </div>
      </Form>
    </div>
  )
}

export default BookingForm;
