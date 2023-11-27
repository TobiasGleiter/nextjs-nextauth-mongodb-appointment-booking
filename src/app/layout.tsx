import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/navigation/Header';
import AuthProvider from '../context/AuthProvider';
import '../styles/calendar.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Appointment booking system',
  description: 'Using Next.js, NextAuth, MongoDB and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} px-2 lg:max-w-4xl flex flex-col mx-auto min-h-screen h-full w-full bg-gradient-to-t from-zinc-900 to-neutral-900 mt-24`}
      >
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
