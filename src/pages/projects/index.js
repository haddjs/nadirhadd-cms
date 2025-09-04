import { prisma } from "@/lib/db";

export default async function handler(req, res) {
	if (req.method === "GET") {
		try {
			const projects = await prisma.project.findMany();
			res.status(200).json(projects);
		} catch (error) {
			res.status(500).json({ error: "Failed to Fetch Projects" });
		}
	} else {
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}

	if (req.method === "POST") {
		try {
			const { title, description, techStack, liveUrl, repoUrl } = req.body;
			const requiredFields = ["title", "description", "techStack"];

			for (const field of requiredFields) {
				if (!req.body[field])
					return res.status(400).json({ error: `${field} is required` });
			}

			const newProject = await prisma.project.create({
				data: {
					title,
					description,
					techStack,
					liveUrl,
					repoUrl,
				},
			});
			res.status(201).json(newProject);
		} catch (error) {
			res.status(500).json({ error: "Failed to create project." });
		}
	}

	if (req.method === "DELETE") {
		const { id } = req.body;

		await prisma.project.delete({
			where: { id: id },
		});

		res.status(200).json({ message: "Project deleted" });
	}

	if (req.method === "PUT") {
		const { id, title, description, techStack, liveUrl, repoUrl } = req.body;

		await prisma.project.update({
			where: {
				id: id,
			},

			data: {
				title: title,
				description: description,
				techStack: techStack,
				liveUrl: liveUrl,
				repoUrl: repoUrl,
			},
		});

		res.status(200).json({ message: "Project Updated" });
	}
}
