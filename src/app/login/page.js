import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Login = () => {
	return (
		<div className="h-screen flex items-center justify-center gap-4">
			<h1 className="text-6xl font-montserrat">
				nadir<span className="font-semibold">hadd.</span> CMS
			</h1>
			<div className="border-2 p-5 rounded-xl">
				<form className="flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<Label className="text-lg">Username</Label>
						<Input type="text" />
					</div>
					<div className="flex flex-col gap-1">
						<Label className="text-lg">Password</Label>
						<Input type="password" />
					</div>
					<Button size="lg">Login</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
