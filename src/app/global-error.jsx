'use client';

import Error from 'next/error';

export default function GlobalError({
    error,
    params: { locale },
}) {
    return (
        <html lang={locale}>
            <body>
                {/* This is the default Next.js error component but it doesn't allow omitting the statusCode property yet. */}
                <Error statusCode={undefined} />
            </body>
        </html>
    );
}