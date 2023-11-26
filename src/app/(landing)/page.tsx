import BaseIcon from '@/src/components/icons/BaseIcon';
import Link from 'next/link';

const Badge = ({ href, label }) => {
  return (
    <Link href={href} className="font-bold hover:text-zinc-300 duration-150">
      {label}
    </Link>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
          Appointment Booking System
        </h1>
        <p className="text-xl">
          This Project uses <Badge href="https://nextjs.org/" label="Next.js" />
          , <Badge href="https://next-auth.js.org/" label="NextAuth" />,{' '}
          <Badge href="https://www.mongodb.com" label="MongoDB" /> and more...
        </p>
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
