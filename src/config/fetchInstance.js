import CONFIG from "./constant";

const fetchInstance = async (url, options = {}) => {
	// Set your custom headers
	const headers = {
		// 'X-TK': CONFIG.API.KEY,
		// Add any other headers as needed
	};

	const fetchOptions = {
		...options,
		headers: {
			...options.headers,
			...headers,
		},
	};

	try {
		const response = await fetch(url, fetchOptions);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error("Error in fetchInstance:", error.message);
		throw error;
	}
};

export { fetchInstance };
