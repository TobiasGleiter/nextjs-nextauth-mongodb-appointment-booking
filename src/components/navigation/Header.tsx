'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import BaseIcon from '../icons/BaseIcon';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="z-50 relative m-0 p-0">
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 max-w-xs lg:max-w-4xl w-full py-2 px-2.5 bg-white/10 backdrop-blur-md rounded-full ">
        <div className="flex w-full justify-between items-center text-white">
          <div className="flex items-center font-light text-sm gap-4 pl-2">
            <div>
              <BaseIcon
                icon="logo"
                style="absolute translate-x-1 translate-y-1 w-6 h-6 text-rose-600"
              />
              <BaseIcon icon="logo" style="w-6 h-6 text-rose-400" />
            </div>
            <h1 className="font-bold text-lg">Appointment Booking System</h1>
          </div>
          <div className="flex flex-row gap-2 items-center font-medium">
            <Link href="/" className="hover:text-zinc-300 duration-150">
              Home
            </Link>
            <Link
              href="/opening-hours"
              className="hover:text-zinc-300 duration-150"
            >
              Opening hours
            </Link>
            <Link
              href="/booking"
              className="flex flex-row gap-1 items-center bg-white text-rose-400 px-4 py-1 rounded-full hover:bg-black duration-150 "
            >
              <BaseIcon icon="calendar" style="text-rose-400" />
              <p className="font-bold">Book appointment</p>
            </Link>
            {session && (
              <Link
                href="/profile"
                className="flex flex-row gap-1 h-[32px] items-center bg-white text-rose-400 px-4 py-1 rounded-full hover:bg-black duration-150 "
              >
                <BaseIcon icon="profile" style="text-rose-400" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
