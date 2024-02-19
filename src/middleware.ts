import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
  localePrefix,
  defaultLocale: 'en',
  locales,
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['denisjet.netlify.app/', 'denisjet.netlify.app/(ru|en)/:path*'],
};
