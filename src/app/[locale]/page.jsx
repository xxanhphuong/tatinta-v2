import Image from "next/image";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import { getWeather } from "@/api/actions";
import QueryExample from "@/components/QueryExample";
import { getTranslations } from "next-intl/server";
import LanguageChanger from "@/components/LanguageChanger";

export default async function Home() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["weathers"],
		queryFn: getWeather,
	});

	const t = await getTranslations();

	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-[40px] p-24'>
			<HydrationBoundary state={dehydrate(queryClient)}>
				{t("common.example_locale_server_side")}
				<LanguageChanger />
				<QueryExample />
			</HydrationBoundary>
		</main>
	);
}
