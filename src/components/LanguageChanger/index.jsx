"use client";

import { useLocalStorage } from "@/hooks";
import { useRouter, usePathname } from "@/navigation";

export default function LanguageChanger({ locale }) {
	const router = useRouter();
	const pathname = usePathname();
	const [storedValue, setValue] = useLocalStorage("Lang");

	const handleChange = (e) => {
		router.push(pathname, { locale: e.target.value });
		setValue(e.target.value);
	};

	return (
		<select
			value={storedValue || "vi"}
			onChange={handleChange}
			className='bg-transparent text-white'
		>
			<option value='en'>English</option>
			<option value='vi'>VietNamese</option>
		</select>
	);
}
