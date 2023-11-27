import { NextRequest, NextResponse } from 'next/server';
import { calculateAvailableTimeSlots } from '.';

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
