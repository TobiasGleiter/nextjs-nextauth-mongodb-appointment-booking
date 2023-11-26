'use client';

import { useState } from 'react';
import DateSelector from './DateSelector';
import PersonSelector from './PersonSelector';
import TimeSelector from './TimeSelector';

export default function BookingComponent() {
  const [appointment, setAppointment] = useState({
    justDate: null,
    dateTime: null,
    person: null,
  });

  const handleDateSelect = (date) => {
    setAppointment({ ...appointment, justDate: date });
  };

  const handleTimeSelect = (time) => {
    setAppointment({ ...appointment, dateTime: time });
  };

  const handleBarberSelect = (personId) => {
    setAppointment({ ...appointment, person: personId });
  };

  const handleBooking = () => {
    // Logic to confirm the booking
    console.log('Appointment booked:', appointment);
  };

  return (
    <div className="flex flex-col gap-4 w-full mb-20">
      <DateSelector onDateSelect={handleDateSelect} />
      <TimeSelector
        onTimeSelect={handleTimeSelect}
        appointment={appointment}
        selectedTime={appointment.dateTime}
      />
      <PersonSelector
        onBarberSelect={handleBarberSelect}
        selectedPerson={appointment.person}
      />
      <button
        onClick={handleBooking}
        className="flex flex-row text-center justify-center py-1 px-6 bg-black hover:bg-white duration-150 font-bold items-center gap-2 rounded-full text-lg"
      >
        <p className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent ">
          Book Appointment
        </p>
      </button>
    </div>
  );
}
