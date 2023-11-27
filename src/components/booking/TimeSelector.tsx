import { formatISO } from 'date-fns';

import { useEffect, useState } from 'react';

export default function TimeSelector({ onTimeSelect, appointment }) {
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    if (appointment.justDate) {
      const fetchSlots = async () => {
        try {
          const isoFormattedTime = formatISO(appointment.justDate);
          const temp = isoFormattedTime.split('T')[0];
          const response = await fetch(
            `http://localhost:3000/api/booking?date=${temp}`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const { availableSlots } = await response.json();
          console.log(availableSlots);
          setAvailableTimeSlots(availableSlots);
        } catch (error) {
          console.error('Error fetching time slots:', error);
          setAvailableTimeSlots([]); // Setzen Sie im Fehlerfall auf ein leeres Array
        }
      };

      fetchSlots();
    }
  }, [appointment.justDate]); // Abhängigkeit zu appointment.justDate hinzufügen

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-xl">Select a time:</h1>
      <div className="bg-white rounded-2xl p-2 text-black">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 ">
          {availableTimeSlots?.map((slot, index) => {
            return (
              <button
                key={index}
                onClick={() => onTimeSelect(slot.time)}
                className={`text-black rounded-xl p-2 hover:bg-rose-400`}
              >
                {slot.time}
              </button>
            );
          })}
        </div>
        {availableTimeSlots.length == 0 && (
          <span className="">Please choose a date first</span>
        )}
      </div>
    </div>
  );
}
