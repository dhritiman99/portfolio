import { cn } from "@/lib/utils";
import {motion} from "framer-motion"
import Typewriter from "typewriter-effect"

export function Description() {
	return <motion.div
	className="flex flex-col gap-5"
		initial={{
			translateX: "500px"
		}}
		animate={{
			translateX: "0px"
		}}
	>
		<h1
			className={cn(
				"fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-2xl tracking-tight delay-100 duration-500 ease-out md:text-4xl lg:text-5xl",
				"text-shadow-[0_0px_50px_theme(--color-foreground/.2)]"
			)}
		>
			Hi, I am <span className="text-primary">Dhritiman</span> <br /> <SubHeading/>
			
		</h1>
		<p className="flex fade-in flex-wrap slide-in-from-bottom-10 mx-auto max-w-md animate-in fill-mode-backwards text-center text-base text-foreground/80 tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl">
			Turning ideas into elegant digital products.
		</p>
	</motion.div>;
}

function SubHeading() {
	return  <Typewriter
		options={{
			strings: ['Full Stack Developer', 'Tech Enthusiast', 'Problem Solver'],
			autoStart: true,
			loop: true,
			cursor: '_',
		}} />
		
}
