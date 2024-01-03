// components/BotsonicWidget.js

"use client";
import { useEffect } from "react";

const BotsonicWidget = () => {
	useEffect(() => {
		(function (w, d, s, o, f, js, fjs) {
			w["botsonic_widget"] = o;
			w[o] =
				w[o] ||
				function () {
					(w[o].q = w[o].q || []).push(arguments);
				};
			(js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
			js.id = o;
			js.src = f;
			js.async = 1;
			fjs.parentNode.insertBefore(js, fjs);
		})(
			window,
			document,
			"script",
			"Botsonic",
			"https://widget.writesonic.com/CDN/botsonic.min.js"
		);

		Botsonic("init", {
			serviceBaseUrl: "https://api.botsonic.ai",
			token: "3a4d8d22-4f62-49af-8cbc-ec858e0742be",
		});
	}, []); // Empty dependency array ensures useEffect runs once when the component mounts

	return null; // The component doesn't render anything
};

export default BotsonicWidget;
