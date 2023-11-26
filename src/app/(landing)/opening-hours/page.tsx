import BaseIcon from '@/src/components/icons/BaseIcon';
import Link from 'next/link';

export default function OpeningHoursPage() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 text-xl">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
          Our opening hours
        </h1>
        <p>Mo to Fr from 10-19 h</p>
        <p>Sa from 10-17 h</p>
        <p>Sunday closed</p>
      </div>
      <div className="flex">
        <Link
          href="/booking"
          className="flex flex-row py-1 px-6 bg-white hover:bg-black duration-150 font-bold items-center gap-2 rounded-full text-lg"
        >
          <BaseIcon icon="calendar" style="text-rose-400" />
          <p className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
            Book an Appointment now
          </p>
        </Link>
      </div>
    </main>
  );
}
