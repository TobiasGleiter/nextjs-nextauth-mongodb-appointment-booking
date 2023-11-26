import SignInButton from '@/src/components/auth/SignInButton';
import SpinnerLoading from '@/src/components/loading/SpinnerLoading';
import { Suspense } from 'react';

// The providers can also be fetched from nextauth
const providers = [{ label: 'GitHub', provider: 'github', icon: 'github' }];

export default async function SignInPage() {
  return (
    <div className="relative w-full max-w-xs rounded-xl bg-white/10 p-2">
      <div className="flex flex-col items-center ">
        <h1 className="w-full text-3xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent mb-4 text-center ">
          Sign In
        </h1>
        <div className="mb-2">
          {/** React Suspense along with a fallback aids in promptly displaying the Login page. */}
          <Suspense fallback={<SpinnerLoading />}>
            {/** Incorporate additional providers, ensuring that the Icon is included within BaseIcon(). */}
            {providers.map((provider: any) => {
              return (
                <SignInButton
                  key={provider.label}
                  label={provider.label}
                  provider={provider.provider}
                  icon={provider.icon}
                />
              );
            })}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
