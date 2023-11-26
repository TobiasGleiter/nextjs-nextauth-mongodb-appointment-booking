import {
  INTERVAL,
  STORE_CLOSING_TIME,
  STORE_OPENING_TIME,
} from '@/src/constants/config';
import { add, format } from 'date-fns';

export default function TimeSelector({
  onTimeSelect,
  appointment,
  selectedTime,
}) {
  const beginning = add(appointment.justDate, { hours: STORE_OPENING_TIME });
  const end = add(appointment.justDate, { hours: STORE_CLOSING_TIME });
  const interval = INTERVAL; // minutes

  const times = [];

  for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
    times.push(i);
  }

  // Convert selectedTime to a comparable format (e.g., timestamp or formatted string)
  const formattedSelectedTime = selectedTime
    ? format(selectedTime, 'kk:mm')
    : null;

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-xl">Select a time:</h1>
      <div className="bg-white rounded-2xl p-2 text-black">
        <div className="grid grid-cols-8 gap-2 ">
          {times.map((time, index) => {
            const formattedTime = format(time, 'kk:mm');
            return (
              <button
                key={index}
                onClick={() => onTimeSelect(time)}
                className={`text-black rounded-xl p-2 hover:bg-rose-400 ${
                  formattedTime === formattedSelectedTime ? 'bg-rose-300' : ''
                }`}
              >
                {formattedTime}
              </button>
            );
          })}
        </div>
        {times.length == 0 && (
          <span className="">Please choose a date first</span>
        )}
      </div>
    </div>
  );
}
