import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Image from "next/image";

const PersonalDashboard = () => {
	return (
		<div className="flex flex-col gap-6 p-8">
			<h1 className="text-3xl font-montserrat font-semibold">
				Personal Details
			</h1>
			<div className="flex flex-col bg-[#eee] p-5 gap-6 rounded-xl">
				<h1 className="text-3xl font-poppins">About</h1>
				<form className="flex justify-between gap-8">
					<Textarea
						className="resize-none bg-white font-poppins text-6xl w-full p-6"
						placeholder="Insert About..."
					/>
					<div className="flex flex-col bg-white rounded-xl p-4 items-center gap-2">
						<Image
							src="/assets/profile.jpeg"
							alt="profile"
							width={150}
							height={150}
							className="rounded-lg"
						/>
						<input type="file" className="bg-[#eee] p-2 cursor-pointer" />
					</div>
				</form>
				<div className="flex justify-end">
					<Button size="lg" className="text-lg">
						Update
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PersonalDashboard;
