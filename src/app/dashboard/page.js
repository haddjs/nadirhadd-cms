import {
	Sidebar,
	PersonalDashboard,
	ProjectsDashboard,
	ExperiencesDashboard,
} from "@/components";
import { Separator } from "@/components/ui/separator";

const Dashboard = () => {
	return (
		<div className="flex min-w-full">
			<div className="flex flex-col w-screen">
				<h1 className="text-4xl p-7 font-montserrat font-semibold">Overview</h1>
				<PersonalDashboard />
				<Separator />
				<ProjectsDashboard />
				<Separator />
				<ExperiencesDashboard />
			</div>
		</div>
	);
};

export default Dashboard;
