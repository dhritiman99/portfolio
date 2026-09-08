
import { Button } from "@/components/ui/button";
import { File, Phone } from "lucide-react";
import Logo from "./logo";
import { Socials } from "./Socials";
import { Description } from "./Desc";
import { motion } from "framer-motion"


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

				<div className="grid grid-cols-1 md:grid-cols-[20%_60%] gap-5 md:gap-0 justify-between items-center">
					<Logo />
					<Description />
				</div>
				<div className="fade-in slide-in-from-bottom-10 flex animate-in flex-col flex-wrap items-center justify-center gap-5 md:gap-10 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
					<div className="flex gap-5">
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
					</div>
					<motion.div
						initial={{
							translateY: "2000px"
						}}
						animate={{
							translateY: "0px"
						}}
						transition={{
							duration: 0.8
						}}
					>
						<Socials />
					</motion.div>
				</div>

			</div>
		</section>
	);
}




