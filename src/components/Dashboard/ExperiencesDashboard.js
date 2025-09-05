import { Button } from "../ui/button";
import { experience } from "@/constants/data";
import Image from "next/image";

const ExperiencesDashboard = () => {
	return (
		<div className="flex flex-col gap-6 p-8">
			<div className="flex justify-between">
				<h1 className="text-3xl font-montserrat font-semibold">Projects</h1>
				<Button size="lg" className="text-lg">
					More
				</Button>
			</div>
			{experience.map((exp) => (
				<div
					key={exp.id}
					className="flex flex-col bg-[#eee] p-10 gap-6 rounded-xl">
					<h1 className="text-3xl font-poppins">{exp.experienceTitle}</h1>
					<div className="flex justify-between gap-4">
						<div className="flex flex-col justify-evenly gap-4 w-1/2">
							<span>{exp.expDescription}</span>
							<div className="flex gap-3 font-montserrat">
								{exp.expTech.map((techStack, index) => (
									<Button key={index} size="lg" className="text-sm">
										{techStack}
									</Button>
								))}
							</div>
						</div>
						<div>
							<Image
								src={exp.snapshots}
								alt={exp.alt}
								width={400}
								height={400}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ExperiencesDashboard;
