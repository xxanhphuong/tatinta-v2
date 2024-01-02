import React from "react";
import Head from "next/head";
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Provider from "@/utils/Provider";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/config/localeConfig';
import { NextIntlClientProvider } from 'next-intl'
const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params: { locale }
}) {
    const t = await getTranslations({ locale, namespace: 'LocaleLayout' });
    return {
        title: t('title')
    };
}

async function RootLayout({ children, params: { locale }
}) {
    let messages
    try {
        messages = (await import(`../../../locales/${locale}.json`)).default
    } catch (error) {
        console.error('Failed to load messages:', error);
    }

    unstable_setRequestLocale(locale);
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Provider>
                        {children}
                    </Provider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default RootLayout;