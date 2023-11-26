import DeleteUserButton from '@/src/components/auth/DeleteUserButton';
import SpinnerLoading from '@/src/components/loading/SpinnerLoading';
import { Suspense } from 'react';

export default async function SignOutPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="relative w-full max-w-xs rounded-xl bg-white/10 p-2 border border-red-600">
        <div className="flex flex-col items-center text-white">
          <h1 className="w-full text-3xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent mb-4 text-center ">
            Delete Account
          </h1>
          <p className="mb-2 text-center font-semibold">
            Are you sure you want to delete your account forever? All your
            appointments will be deleted too.
          </p>
          <div className="mb-2">
            {/** React Suspense along with a fallback aids in promptly displaying the Signout page. */}
            <Suspense fallback={<SpinnerLoading />}>
              {/**  */}
              <DeleteUserButton label="Delete Account" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
