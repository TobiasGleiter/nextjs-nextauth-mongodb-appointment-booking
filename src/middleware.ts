export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/booking/:path*', '/api/booking', '/profile/:path*'],
};
