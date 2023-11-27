'use client';

import ReactCalendar from 'react-calendar';

export default function DateSelector({ onDateSelect }) {
  const minDate = new Date();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Select a date:</h1>
      <ReactCalendar
        minDate={minDate}
        className="REACT-CALENDAR p-2 text-black"
        view="month"
        onClickDay={onDateSelect}
      />
    </div>
  );
}
