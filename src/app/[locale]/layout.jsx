import React from "react";
import Script from "next/script";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Provider from "@/utils/Provider";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/config/localeConfig";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import BotsonicWidget from "@/components/BotsonicWidget";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({ locale, namespace: "LocaleLayout" });

	return {
		title: t("title"),
		generator: "Next.js",
		applicationName: "Next.js",
		referrer: "origin-when-cross-origin",
		keywords: ["Next.js", "React", "JavaScript"],
		authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
		creator: "Jiachi Liu",
		publisher: "Sebastian Markbåge",
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
	};
}

async function RootLayout({ children, params: { locale } }) {
	let messages;
	try {
		messages = (await import(`../../../locales/${locale}.json`)).default;
	} catch (error) {
		console.error("Failed to load messages:", error);
	}

	unstable_setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Provider>
						{children}
						{/* <Analytics /> */}
					</Provider>
				</NextIntlClientProvider>
				<BotsonicWidget />
			</body>
		</html>
	);
}

export default RootLayout;
