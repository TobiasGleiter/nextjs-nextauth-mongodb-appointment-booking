import SignOutButton from '@/src/components/auth/SignOutButton';
import SpinnerLoading from '@/src/components/loading/SpinnerLoading';
import { Suspense } from 'react';

export default async function SignOutPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="relative w-full max-w-xs rounded-xl bg-white/70 p-2">
        <div className="flex flex-col items-center text-black">
          <h1 className="w-full text-3xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent mb-4 text-center ">
            Sign Out
          </h1>
          <p className="mb-2">Are you sure you want to sign out?</p>
          <div className="mb-2">
            {/** React Suspense along with a fallback aids in promptly displaying the Signout page. */}
            <Suspense fallback={<SpinnerLoading />}>
              {/**  */}
              <SignOutButton label="Sign out" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
