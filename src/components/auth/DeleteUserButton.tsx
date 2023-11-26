'use client';
import { signOut } from 'next-auth/react';

export interface IDeleteUserButton {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'text-sm' | 'text-base' | 'text-xl';
  /**
  /**
   * Button contents
   */
  label: string;
  /**
   * How large should the button be?
   */
  style?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const handleDeleteUser = async () => {
  console.log('Stuff to delete the user');
  console.log('Call the API to delete the user');

  await signOut({
    redirect: true,
    callbackUrl: '/',
  });
};

const DeleteUserButton: React.FC<IDeleteUserButton> = ({
  primary = false,
  size,
  style,
  label,
  ...props
}) => {
  return (
    <button
      className={`inline-flex rounded-full pl-6 pr-7 py-1 shadow-lg border border-red-600 lg:hover:bg-red-500 lg:hover:text-black duration-300 ${
        primary ? 'bg-white text-black ' : 'bg-black text-white'
      } ${style} ${size} justify-center items-center `}
      onClick={() => handleDeleteUser()}
      {...props}
    >
      {label}
    </button>
  );
};

export default DeleteUserButton;
