import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { authOptions } from '../../api/auth/[...nextauth]/options';

export default async function NewUserPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <p>Welcome, </p>
      <p>{session.user.name}</p>
      <Link href="/booking">Book Appointment</Link>
    </div>
  );
}
