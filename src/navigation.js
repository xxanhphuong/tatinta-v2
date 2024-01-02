import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'vi'];


// By setting it to 'as-needed', our default language (vi) will not appear in our pathnames, 
// but our other languages will
export const localePrefix = 'as-needed';

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales, localePrefix });