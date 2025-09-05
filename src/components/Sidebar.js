import { navLinks } from "@/constants/data";
import { Button } from "./ui/button";
import Link from "next/link";

const Sidebar = () => {
	return (
		<div className="bg-[#222831] min-w-1/7 h-screen sticky top-0 flex flex-col justify-between py-10 px-5 gap-4">
			<div className="flex flex-col gap-20">
				<h1 className="text-[#eee] font-montserrat lg:text-3xl md:text-xl text-center">
					nadir<span className="font-semibold">hadd.</span> <br />
					CMS
				</h1>
				<div className="flex flex-col px-4 md:px-0 lg:text-xl md:text-md gap-5">
					{navLinks.map((data, index) => (
						<Link key={index} href={data.url}>
							<div className="text-white cursor-pointer font-poppins lg:p-5 md:p-3 rounded-xl hover:bg-[#171b22] lg:hover:ps-6 transition-all ease-in-out duration-150">
								<span className="">{data.title}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-5 px-5 justify-between text-white">
				<h1 className="text-xl">Me</h1>
				<Button variant="destructive" className="text-xl cursor-pointer">
					Logout
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
