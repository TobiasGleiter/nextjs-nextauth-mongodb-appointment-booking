import BookingComponent from '@/src/components/booking/Booking';
import BaseIcon from '@/src/components/icons/BaseIcon';
import { Suspense } from 'react';

export default async function Booking() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
        Booking
      </h1>
      <Suspense fallback={<Loading />}>
        <BookingComponent />
      </Suspense>
    </div>
  );
}

function Loading() {
  return (
    <div className="w-full">
      <BaseIcon icon="spinner" />
    </div>
  );
}
