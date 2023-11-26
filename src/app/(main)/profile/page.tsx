import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../../api/auth/[...nextauth]/options';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
        Settings
      </h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
        <p>Personal ID: {session.user.id as string}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Account</h2>
        <Link
          href="/auth/delete-user"
          className="px-4 py-1 border border-red-600 rounded-full bg-black hover:bg-red-500 duration-150"
        >
          Delete this Account
        </Link>
      </div>
    </div>
  );
}
