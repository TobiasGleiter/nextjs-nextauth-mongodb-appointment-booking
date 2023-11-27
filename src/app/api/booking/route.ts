import {
  INTERVAL,
  STORE_CLOSING_TIME,
  STORE_OPENING_TIME,
} from '@/src/constants/config';
import { add, set } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

const calculateAvailableTimeSlots = (date) => {
  const selectedDate = new Date(date); // Parsen des Datums

  // Setzen Sie das Datum für Beginn und Ende
  const beginning = set(selectedDate, {
    hours: STORE_OPENING_TIME,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const end = set(selectedDate, {
    hours: STORE_CLOSING_TIME,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const interval = INTERVAL; // Minuten
  const times = [];

  for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
    times.push(i);
  }

  return times;
};

export async function GET(req: NextRequest, res: NextResponse) {
  const date = req.nextUrl.searchParams.get('date');
  // TODO: validate the date

  if (!date) {
    return NextResponse.json({ message: 'Invalid' }, { status: 401 });
  }

  const availableSlots = calculateAvailableTimeSlots(date);

  const response = { availableSlots };

  return NextResponse.json(response);
}
