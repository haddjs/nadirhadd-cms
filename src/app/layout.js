import { Poppins, Montserrat } from "next/font/google";
import "@/style/globals.css";

const fontMont = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["variable"],
});

const fontPoppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "800"],
});

export const metadata = {
	title: "Dashboard | nadirhadd portfolio",
	description: "CMS For nadirhadd portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${fontMont.variable} ${fontPoppins.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
