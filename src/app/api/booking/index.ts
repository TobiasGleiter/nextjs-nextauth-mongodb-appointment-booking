import { INTERVAL } from '@/src/constants/config';
import { getDay, isSameDay, parseISO } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

const timeZone = 'Europe/Berlin';
const MAX_PERSONS_PER_SLOT = 3;

const appointments = [
  { date: '2023-11-27', time: '10:00', personId: 1 },
  { date: '2023-11-27', time: '10:00', personId: 2 },
  // Weitere Termine...
];

// Beispiel für Feiertage
const holidays = [
  new Date(2023, 11, 25), // Weihnachten
  // Weitere Feiertage...
];

const openingTimes = {
  1: { openingHour: 10, closingHour: 19 }, // Montag
  2: { openingHour: 10, closingHour: 19 }, // Dienstag
  3: { openingHour: 10, closingHour: 19 }, // Mittwoch
  4: { openingHour: 10, closingHour: 19 }, // Donnerstag
  5: { openingHour: 10, closingHour: 19 }, // Freitag
  6: { openingHour: 11, closingHour: 17 }, // Samstag
  0: { openingHour: 0, closingHour: 0 }, // Sonntag
};

export const calculateAvailableTimeSlots = (dateString) => {
  const date = parseISO(dateString);
  const zonedDate = utcToZonedTime(date, timeZone);
  const dayOfWeek = getDay(zonedDate);

  // Überprüfen Sie, ob das Datum ein Feiertag ist oder Sonntag
  const isHoliday = holidays.some((holiday) => isSameDay(holiday, zonedDate));
  if (dayOfWeek === 0 || isHoliday) {
    return []; // Geschlossen an Sonntagen und Feiertagen
  }

  const { openingHour, closingHour } = openingTimes[dayOfWeek] || {};

  if (openingHour === undefined || closingHour === undefined) {
    return []; // Geschlossen, wenn keine Öffnungszeiten definiert sind
  }

  const openingTime = new Date(zonedDate.setHours(openingHour, 0, 0, 0));
  const closingTime = new Date(zonedDate.setHours(closingHour, 0, 0, 0));

  const slots = [];

  for (
    let i = openingTime;
    i <= closingTime;
    i.setMinutes(i.getMinutes() + INTERVAL)
  ) {
    slots.push({
      time: format(i, 'HH:mm', { timeZone }),
      available: 3,
      bookedPersons: [],
    });
  }

  // Durchlaufen Sie alle Termine und fügen Sie die Person zum entsprechenden Slot hinzu
  appointments.forEach((appointment) => {
    if (appointment.date === dateString) {
      let slot = slots.find((s) => s.time === appointment.time);
      if (slot && slot.bookedPersons.length < MAX_PERSONS_PER_SLOT) {
        slot.available -= 1;
        slot.bookedPersons.push(appointment.personId);
      }
    }
  });

  return slots.filter(
    (slot) => slot.bookedPersons.length < MAX_PERSONS_PER_SLOT
  );
};
