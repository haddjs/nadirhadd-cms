import { Sidebar } from "@/components";

export default function DashboardLayout({ children }) {
	return (
		<div className="flex">
			<Sidebar />
			<main className="flex-1 p-0 w-10">{children}</main>
		</div>
	);
}
