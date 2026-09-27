import { Button } from "@/components/ui/button";
import { File, Phone } from "lucide-react";
import { Socials } from "./Socials";
import { Description } from "./Desc";
import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline";


export function HeroSection() {
	return (
		<section className="min-h-screen flex justify-center">
			<Scene3D/>
			<div className="flex flex-col gap-5 justify-center md:min-w-5xl text-foreground">
				<Description />
				<ButtonGrp/>
				<Socials />
			</div>
		</section>
	);
}

function Scene3D() {
	return <div className="absolute inset-0 pointer-events-none -z-10">
		<Spline
			scene="https://prod.spline.design/ScwcdBpNEmfdFeaq/scene.splinecode" />
	</div>;
}

function ButtonGrp() {
	return <div className="flex gap-5">
		<motion.div
			initial={{
				translateX: "-1000px"
			}}
			animate={{
				translateX: "0px"
			}}
			transition={{
				duration: 0.8
			}}
		>
			<Button className="rounded-full p-5" size="lg" variant="secondary">
				<File data-icon="inline-start" />
				Download CV
			</Button>
		</motion.div>
		<motion.div
			initial={{
				translateX: "1000px"
			}}
			animate={{
				translateX: "0px"
			}}
			transition={{
				duration: 0.8
			}}
		>
			<a href="#contact">
				<Button className="rounded-full p-5" size="lg">
					Contact
					<Phone data-icon="inline-end" />
				</Button>
			</a>
		</motion.div>
	</div>;
}

