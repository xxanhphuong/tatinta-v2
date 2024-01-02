import { fetchInstance } from "@/config/fetchInstance";

export const getWeather = async () => {
	console.log("Action: getWeather");
	const resp = await fetchInstance(
		"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m",
		{
			method: "GET",
		}
	);

	return resp;
};
