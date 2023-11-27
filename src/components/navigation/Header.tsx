'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BaseIcon from '../icons/BaseIcon';
import ButtonListbox from '../listbox/ButtonListbox';

export default function Header() {
  const { data: session } = useSession();

  const router = useRouter();

  const items = [
    {
      action: () => {
        router.push('/profile');
      },
      label: 'Profile',
      icon: 'profile',
      active: 'bg-rose-400',
    },
    {
      action: () => {
        router.push('/auth/signout');
      },
      label: 'Sign Out',
      icon: 'signout',
      active: 'bg-rose-400',
    },
  ];

  return (
    <header className="z-50 relative m-0 p-0 mx-2">
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 lg:max-w-4xl w-full py-2 px-2.5 bg-white/80 backdrop-blur-md rounded-full ">
        <div className="flex w-full justify-between items-center text-black">
          <div className="flex items-center font-light text-sm gap-4 pl-2">
            <div>
              <BaseIcon
                icon="logo"
                style="absolute translate-x-1 translate-y-1 w-6 h-6 text-rose-600"
              />
              <BaseIcon icon="logo" style="w-6 h-6 text-rose-400" />
            </div>
            <h1 className="font-bold hidden lg:block text-lg">
              Appointment Booking System
            </h1>
          </div>
          <div className="flex flex-row gap-2 items-center font-medium">
            <Link
              href="/"
              className="hover:text-zinc-700 duration-150 hidden lg:block"
            >
              Home
            </Link>
            <Link
              href="/opening-hours"
              className="hover:text-zinc-700 duration-150 hidden lg:block"
            >
              Opening hours
            </Link>
            {session && (
              <ButtonListbox title="Account" align="right-0" items={items} />
            )}
            <Link
              href="/booking"
              className="flex flex-row gap-1 items-center bg-white text-rose-400 px-4 py-1 rounded-full hover:bg-black duration-150 "
            >
              <BaseIcon icon="calendar" style="text-rose-400" />
              <p className="font-bold hidden lg:block">Book appointment</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
