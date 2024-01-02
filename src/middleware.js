// import type { NextRequest } from 'next/server';
// import createMiddleware from 'next-intl/middleware';

// import { AppConfig } from './utils/AppConfig';

// const intlMiddleware = createMiddleware({
//     locales,
//     localePrefix,
//     defaultLocale,
// });

// export const config = {
//     matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };


import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'vi'],

    // Used when no locale matches
    defaultLocale: 'vi'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(vi|en)/:path*']
};