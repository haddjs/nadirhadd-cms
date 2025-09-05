import { projects } from "@/constants/data";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import Image from "next/image";

const ProjectPage = () => {
	return (
		<div className="flex flex-col gap-6 p-8">
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-montserrat font-semibold">Projects</h1>
				<div className="flex justify-between">
					<Button size="lg" className="text-lg">
						Add New Project
					</Button>
					<Input className="w-1/5" placeholder="Search Project" />
				</div>
			</div>
			{projects.map((project) => (
				<div
					key={project.id}
					className="flex flex-col bg-[#eee] p-10 gap-6 rounded-xl">
					<h1 className="text-3xl font-poppins">{project.projectTitle}</h1>
					<div className="flex justify-between gap-4">
						<div className="flex flex-col justify-evenly gap-4 w-6/4">
							<span>{project.description}</span>
							<div className="flex gap-3 font-montserrat">
								{project.tech.map((techStack, index) => (
									<Button key={index} size="lg" className="text-sm">
										{techStack}
									</Button>
								))}
							</div>
						</div>
						<Carousel className="flex items-center w-full mx-auto">
							<CarouselContent>
								{project.snapshots.map((pic, i) => (
									<CarouselItem key={i}>
										<div className="p-1">
											<Card>
												<CardContent>
													<Image
														src={pic.source}
														alt={pic.alt}
														width={800}
														height={400}
														className="object-contain w-fit h-auto"
													/>
												</CardContent>
											</Card>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselNext className="mx-8" />
							<CarouselPrevious className="mx-8" />
						</Carousel>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectPage;
