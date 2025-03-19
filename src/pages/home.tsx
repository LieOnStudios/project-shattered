import { Component } from "solid-js";
import { Button } from "../components/ui/button";
import { Maximize } from "lucide-solid";

const Home: Component = () => {
	return (
		<>
			<div class="inline-flex gap-4 items-center">
				<Button variant="ghost">
					<span>Primary</span>
				</Button>
				<Button variant="destructive">
					<span>Primary</span>
				</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="destructive">Destructive</Button>
				<Button variant="outline">Outline</Button>
				<Button size="icon">
					<Maximize size={16} />
				</Button>
			</div>
		</>
	);
};

export default Home;
