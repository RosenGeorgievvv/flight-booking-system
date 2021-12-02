import React from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';

const BookingForm = () => {
  return (
    <div className="w-50">
      <Form>
        <FormGroup>
          <Label htmlFor="first-name">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="last-name">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="departure-airport">
            Departure Airport
          </Label>
          <Input
            id="departureAirport"
            name="departureAirport"
            placeholder="Departure Airport"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="arriving-airport">
            Arriving Airport
          </Label>
          <Input
            id="arrivingAirport"
            name="arrivingAirport"
            placeholder="Arriving airport"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="departure-date">
            Departure Date
          </Label>
          <Input
            id="departureDate"
            name="departureDate"
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="arriving-date">
            Date of return
          </Label>
          <Input
            id="arrivingDate"
            name="arrivingDate"
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>
        <div className="text-center">
          <Button >Submit</Button>
        </div>
      </Form>
    </div>
  )
}

export default BookingForm;
