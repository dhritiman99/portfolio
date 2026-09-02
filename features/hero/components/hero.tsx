import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { File, Phone } from "lucide-react";
import { motion } from "framer-motion"
import Logo from "./logo";

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-5xl md:my-15">
			{/* Top Shades */}
			<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
			>
				<div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,--theme(--color-foreground/.08),transparent)] contain-strict" />
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
			>
				<div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
				<div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
			</div>

			<div className="relative flex flex-col items-center justify-center gap-5 md:pt-10">

				<div
					aria-hidden="true"
					className="absolute inset-0 -z-1 size-full overflow-hidden"
				>
					<div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
					<div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
					<div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
					<div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
				</div>

				<div className="md:flex  md:flex-row-reverse  md:gap-15 justify-center items-center">
					<Logo/>
					<motion.div
						initial={{
							translateX:"500px"
						}}
						animate={{
							translateX:"0px"
						}}
					>
						<h1
							className={cn(
								"fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-2xl tracking-tight delay-100 duration-500 ease-out md:text-4xl lg:text-5xl",
								"text-shadow-[0_0px_50px_theme(--color-foreground/.2)]"
							)}
						>
							Hi, I am Dhritiman <br /> A Full Stack Developer

						</h1>
						<p className="fade-in slide-in-from-bottom-10 mx-auto max-w-md animate-in fill-mode-backwards text-center text-base text-foreground/80 tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl">
							Turning ideas into elegant digital products.
						</p>
					</motion.div>
				</div>
				<div className="fade-in slide-in-from-bottom-10 flex flex-col animate-in md:flex-row flex-wrap items-center justify-center gap-5 md:gap-10 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
					<Button className="rounded-full p-5" size="lg" variant="secondary">
						<File data-icon="inline-start" />
						Download CV
					</Button>
					<a href="#contact">
						<Button className="rounded-full p-5" size="lg">
							Contact
							<Phone data-icon="inline-end" />
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
}
