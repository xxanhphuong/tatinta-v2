'use client'
// import { useEffect } from "react";
import { getWeather } from "@/api/actions";
import { useQuery } from "@tanstack/react-query";

export default function QueryExample() {
    const { data, error, isFetching } = useQuery({
        queryKey: ["weathers"],
        queryFn: getWeather,
    });

    if (error) <h2>{error.message}</h2>;
    if (data) {
        return isFetching ? (
            <h2>Loading...</h2>
        ) : (
            <div>
                <h1 className="mb-2">Example get data Reat query component</h1>
                <p className="w-[80vw] h-[100px] overflow-auto">{JSON.stringify(data)}</p>
            </div>
        );
    }
}
