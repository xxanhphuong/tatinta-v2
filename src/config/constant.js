let BASE_URL = "https://tatinta.com";
let BASE_API = "https://api.tatinta.com/v1/";
let STATIC_URL = "https://api.tatinta.com/v1/static/";
let CDN_URL = "https://cdn.tatinta.com/";
let TRIPYAH_API = "https://content.tripyah.com/v1/";
let BASE_URL_SUPPLIER = "https://supplier.tatinta.com";
let BASE_URL_AFFILICATE = "https://affiliate.tatinta.com";

let CLOUDFRONT = "https://asset.tatinta.com"; // static file via cloudfront
let STATIC_CF = "https://tacdn.tatinta.com/"; // origin file one server ec2-13-36-33-88.eu-west-3.compute.amazonaws.com /// via cloudfront
let TA_IMG_CF = "https://ta-img.tatinta.com/"; // image-lambda-function process resize image /// via cloudfront
let ISMAP_CF = "https://ismap.tatinta.com"; // lambda-function process read file route isango tour hoho /// via cloudfront
let CHATBOX = "https://selab.edu.vn/demos/nhtlong/20503";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
	BASE_API = "http://43.198.251.196:7200/v1/";
	//BASE_API = "http://192.168.1.10:7200/v1/";
	// BASE_API = "http://192.168.1.192:7200/v1/";
	BASE_URL = "http://localhost:2000";
	// STATIC_URL = "http://localhost:7200/v1/static/";
	STATIC_URL = "http://43.198.251.196:7200/v1/static/";
	//BASE_API = "https://api.tatinta.com/v1/";
	//STATIC_URL = "https://api.tatinta.com/v1/static/";
	//TRIPYAH_API = "http://localhost:3200/v1/";
	BASE_URL_SUPPLIER = "http://43.198.251.196:5000";
	BASE_URL_AFFILICATE = "http://43.198.251.196:5200";
	CLOUDFRONT = "";
	STATIC_CF = STATIC_URL;
}

// Enviroment UAT
if (process.env.REACT_APP_UAT === "uat") {
	BASE_URL = "http://43.198.251.196:2000";
	BASE_API = "http://43.198.251.196:7200/v1/";
	STATIC_URL = "http://43.198.251.196:7200/v1/static/";
	BASE_URL_SUPPLIER = "http://43.198.251.196:5500";
	BASE_URL_AFFILICATE = "http://43.198.251.196:5200";
	CLOUDFRONT = "";
	STATIC_CF = STATIC_URL;
}

//TRIPYAH_STATIC_URL: "https://content.tripyah.com/v1/static/",

const CONFIG = {
	CLOUDFRONT,
	STATIC_CF,
	TA_IMG_CF,
	ISMAP_CF,
	CHATBOX,
	BASE_URL: BASE_URL,
	CDN_URL,
	STATIC_URL: STATIC_URL,
	TRIPYAH_STATIC_URL: "https://static.tripyah.com/",
	BASE_URL_SHOP: "https://muasam.tatinta.com",
	BASE_URL_SHOP_SELLER: "https://banhang.tatinta.com",
	BASE_URL_SUPPLIER: BASE_URL_SUPPLIER,
	BASE_URL_AFFILICATE,
	API: {
		KEY: "vp0fqbzqmo6iblch8d3z7lknj7dx4g",
		DESTINATION: {
			AREA: `${BASE_API}destination/area`,
			INTEREST: `${BASE_API}destination/interest`,
			DESTINATION: `${BASE_API}destination/destination`,
			CITY: `${BASE_API}destination/city`,
			COUNTRY: `${BASE_API}destination/country`,
			ORDER_ITEM: `${BASE_API}destination/order-item`,
			CHECKOUT: `${BASE_API}destination/checkout`,
			FACILITY: `${BASE_API}destination/facility`,
			IMAGE: `${BASE_API}destination/image`,
		},
		SERVICE: {
			SERVICE: `${BASE_API}service/service`,
			TICKET: `${BASE_API}service/ticket`,
			CONTACT: `${BASE_API}extra/info`,
			NEWSLETTER: `${BASE_API}extra/newsletter`,
			VISACOUNTRY: `${BASE_API}service/visa-country`,
			VISA: `${BASE_API}service/visa`,
			HOTEL: `${BASE_API}service/hotel`,
			WEBISTE: `${BASE_API}extra/web-builder`,
			VISA_AREA: `${BASE_API}service/visa-area`,
			VISA_PREMIUM_SERVICE: `${BASE_API}service/visa-premium-service`,
		},
		TOUR: {
			TOUR: `${BASE_API}tour/tour`,
			CATEGORY: `${BASE_API}tour/category`,
			ORDER_ITEM: `${BASE_API}tour/order-item`,
			CHECKOUT: `${BASE_API}tour/checkout`,
			ORDER: `${BASE_API}tour/order`,
			CONFIRM: `${BASE_API}tour/order/confirm`,
		},
		HOTEL: {
			HOTEL: `${BASE_API}hotel/hotel`,
			ROOM: `${BASE_API}hotel/room`,
			FACILITY: `${BASE_API}hotel/facility`,
			IMAGE: `${BASE_API}hotel/image`,
			ORDER_ITEM: `${BASE_API}hotel/order-item`,
			ORDER: `${BASE_API}hotel/order`,
			CHECKOUT: `${BASE_API}hotel/checkout`,
			TYPE: `${BASE_API}hotel/type`,
		},
		SHOPPING_CART: {
			ORDER: `${BASE_API}shopping-cart/order`,
			CHECKOUT: `${BASE_API}shopping-cart/checkout`,
		},
		CARD: `${BASE_API}payment/card`,
		FLIGHT: {
			FLIGHT: `${BASE_API}flight/flight`,
			CATEGORY: `${BASE_API}flight/category`,
			FACILITY: `${BASE_API}flight/facility`,
			CITY: `${BASE_API}flight/city`,
			ORDER_ITEM: `${BASE_API}flight/order-item`,
			CHECKOUT: `${BASE_API}flight/checkout`,
		},
		PROGRAM: {
			ORDER: `${BASE_API}trip/order`,
			PROFILE: `${BASE_API}trip/profile`,
			QUIZ: `${BASE_API}trip/quiz`,
			QUIZ_ITEM: `${BASE_API}trip/quiz-item`,
		},
		POST: {
			POST: `${BASE_API}post/post`,
			CATEGORY: `${BASE_API}post/category`,
		},
		USER: {
			USER: `${BASE_API}users`,
			CHECK: `${BASE_API}users/check`,
			GET_BY_TOKEN: `${BASE_API}users/get-by-token`,
			SLUG_AGENCY_CHECK: `${BASE_API}agency/agency/check`,
			REGISTER: `${BASE_API}auth/register`,
			AGENCY_REGISTER: `${BASE_API}agency/agency`,
			ACTIVE: `${BASE_API}users/active`,
			LOGIN: `${BASE_API}auth/login`,
			LOGIN_FACEBOOK: `${BASE_API}auth/facebook`,
			LOGIN_GOOGLE: `${BASE_API}auth/google`,
			FORGOT: `${BASE_API}auth/forgot-password`,
			CHECK_AFFILIATE: `${BASE_API}users/check-affiliate`,
		},
		API_PRODUCT: "",
		GURU: {
			GURU: `${TRIPYAH_API}guru`,
			CITY: `${TRIPYAH_API}city`,
			BOOK: `${TRIPYAH_API}book/tatinta`,
			BOOKS: `${TRIPYAH_API}book`,
			PAYMENT: `${TRIPYAH_API}transaction/tatinta`,
			PAYMENT_UPDATE: `${TRIPYAH_API}transaction`,
			LOGIN: `${TRIPYAH_API}auth/login`,
			LOGIN_FACEBOOK: `${TRIPYAH_API}auth/facebook`,
			LOGIN_GOOGLE: `${TRIPYAH_API}auth/google`,
			REFRESH_TOKEN: `${TRIPYAH_API}auth/refresh-token`,
			REGISTER: `${TRIPYAH_API}auth/register`,
			USER: `${TRIPYAH_API}users`,
			UPLOAD_IMAGE: `${TRIPYAH_API}upload/image`,
			ACTIVE_VISITOR: `${TRIPYAH_API}users/active`,
			CHECKOUT: `${TRIPYAH_API}checkout`,
			COUNTRY: `${TRIPYAH_API}country`,
		},
		IMAGE: {
			UPLOAD_AVATAR: `${BASE_API}extra/upload/avatar`,
			MEDIA: `${BASE_API}media/media`,
			UPLOAD_IMAGE: `${BASE_API}media/upload/image`,
			UPLOAD_LIFELIMO: `${BASE_API}extra/upload/lifelimo`,
		},
		AUTH: {
			LOGIN: `${BASE_API}auth/login`,
		},
		EXTRA: {
			INVITE: `${BASE_API}extra/info/invite`,
			SEARCH: `${BASE_API}extra/search`,
			QUICK_SEARCH: `${BASE_API}extra/search/quick-search`,
			CURRENCY_RATES: `${BASE_API}extra/rates`,
			INFO_LOC: `${BASE_API}extra/info/loc`,
		},
		TICKET: {
			TICKET: `${BASE_API}ticket/ticket`,
			IMAGE: `${BASE_API}ticket/image`,
			ORDER_ITEM: `${BASE_API}ticket/order-item`,
			CHECKOUT: `${BASE_API}ticket/checkout`,
		},
		VOUCHER: {
			APPLY: `${BASE_API}voucher/voucher/apply-voucher`,
			CHECK: `${BASE_API}voucher/voucher/check-voucher`,
			CHECK_REGISTER: `${BASE_API}voucher/voucher-register/check-voucher`,
			CHECK_VOUCHER_REGISTER: `${BASE_API}voucher/voucher/check-voucher-register`,
			CONDITION_POINT: `${BASE_API}voucher/voucher/condition-point`,
		},
		TRANSPORT: {
			TRANSPORT: `${BASE_API}transport/transport`,
			ORDER: `${BASE_API}transport/order`,
			CHECKOUT: `${BASE_API}transport/checkout`,
			CONFIRM: `${BASE_API}transport/order/confirm`,
		},
		BIKE: {
			BIKE: `${BASE_API}bike/bike`,
			ORDER: `${BASE_API}bike/order`,
			CHECKOUT: `${BASE_API}bike/checkout`,
			CONFIRM: `${BASE_API}bike/order/confirm`,
		},
		MYDAYTRIP: {
			SEARCH: `${BASE_API}mydaytrip/search`,
			CUSTOMIZE: `${BASE_API}mydaytrip/search/customize`,
			BOOKING: `${BASE_API}mydaytrip/book`,
			CHECKOUT: `${BASE_API}mydaytrip/checkout`,
			DETAIL: `${BASE_API}mydaytrip/details`,
			CUSTOM_ROUTE: `${BASE_API}daytrip/request`,
		},
		ISANGO: {
			REGION: `${BASE_API}isango/regions`,
			ACTIVITIES: `${BASE_API}isango/activities`,
			ACTIVITY: `${BASE_API}isango/activity`,
			CHECKAVAI: `${BASE_API}isango/checkavailability`,
			//AFFILIATEID: '312113ee-2c74-4352-b541-013c851c73a2',// AUT
			AFFILIATEID: "fdaa3f0c-a58e-4406-a513-358b92bd1c8d", // PROD
			RESERVATION: `${BASE_API}isango/reservation`,
			CHECKOUT: `${BASE_API}isango/checkout`,
			ORDER: `${BASE_API}isango/order`,
			MAP: `${BASE_API}extra/ismap`,
		},
		LIFELIMO: {
			ORDER: `${BASE_API}lifelimo/order`,
		},
		INCENTIVE: `${BASE_API}incentive`,
		REVIEW: `${BASE_API}review`,
		CONTACT: `${BASE_API}contact`,
	},
	ENCRYPT: "Tvp0fqbzqmo6iblc",
	MAX_SEND_POST: 3,
	FACEBOOK_PAGE: "",
	TWITTER_PAGE: "",
	GOOGLE_PLUS_PAGE: "",
	INSTAGRAM_PAGE: "",
	PER_PAGE: 9,
	FACEBOOK_ID: "235665277965726",
	CURRENCY_DEFAULT: { value: "VND", sym: "₫" },
	CURRENCIES: [
		{ value: "VND", sym: "₫" },
		{ value: "USD", sym: "$" },
		{ value: "EUR", sym: "€" },
		{ value: "CHF", sym: "Fr" },
		{ value: "CAD", sym: "C$" },
		{ value: "KRW", sym: "₩" },
		{ value: "JPY", sym: "¥" },
		{ value: "SGD", sym: "S$" },
		{ value: "AUD", sym: "AU$" },
		{ value: "CNY", sym: "CN¥" },
		{ value: "GBP", sym: "GB£" },
		{ value: "HKD", sym: "HK$" },
		{ value: "INR", sym: "Rs" },
		{ value: "MYR", sym: "RM" },
	],
	RATES_DEFAULT: [],
	PRICE_RANGE_MAX: 10000000,
	ARR_HOTEL_BUDGET: [
		{ value: "0,1400000", min: 0, max: 1400000 },
		{ value: "1400000,2800000", min: 1400000, max: 2800000 },
		{ value: "2800000,4200000", min: 2800000, max: 4200000 },
		{ value: "4200000,5600000", min: 4200000, max: 5600000 },
		{ value: "5600000", max: 5600000 },
	],
	FILE_VERSION: Math.random(),
};

export default CONFIG;
