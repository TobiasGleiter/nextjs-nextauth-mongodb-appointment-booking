import Link from 'next/link';

export default function Booking() {
  return (
    <div>
      <h1>Booking</h1>
      <Link href="/auth/signout">Sign Out</Link>
    </div>
  );
}
