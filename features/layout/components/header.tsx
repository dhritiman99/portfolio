"use client";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import ThemeButton from "@/features/theme/components/ThemeButton";

export const navLinks = [
	{
		label: "Home",
		href: "#",
	},
	{
		label: "Skills",
		href: "#skills",
	},
	{
		label: "Projects",
		href: "#projects",
	},
];

export function Header() {
	const scrolled = useScroll(10);
	return (
		<header
			className={cn("sticky top-0  mx-7 z-50  border-transparent border-b-2 transition-all", {
				"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 top-4 rounded-full":
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<a
					className="rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50"
					href="#"
				>
					<h1 className="font-extrabold text-2xl">Portfolio</h1>
				</a>
				<div className="hidden items-center gap-2 md:flex">
					<div className="flex gap-2">
						<ThemeButton />
					</div>
					{navLinks.map((link) => (
						<Button key={link.label} size="sm" variant="outline" render={<a href={link.href} />} nativeButton={false}>{link.label}</Button>
					))}
					<a href="#contact"><Button size="sm">Hire Me</Button></a>
				</div>

				<MobileNav />
			</nav>
		</header>
	);
}
