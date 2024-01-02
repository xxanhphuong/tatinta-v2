'use client'
// import { useEffect } from "react";
import { getWeather } from "@/api/actions";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export default function QueryExample() {
    // const t = useTranslations('common');
    const { data, error, isFetching } = useQuery({
        queryKey: ["weathers"],
        queryFn: getWeather,
    });

    const t = useTranslations();

    if (error) <h2>{error.message}</h2>;
    if (data) {
        return isFetching ? (
            <h2>Loading...</h2>
        ) : (
            <div>

                <h1>{t('common.site_name')}</h1>
                <h1 className="mb-2">Example get data Reat query component</h1>
                <p className="w-[80vw] h-[100px] overflow-auto">{JSON.stringify(data)}</p>
            </div>
        );
    }
}
