"use client"
import Heading from "@/components/Heading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "../constants/projects";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
	return (
		<section
			id="projects"
			className="mx-auto w-full max-w-6xl min-h-screen"
		>
			<Heading title="Projects" />
			<Carousel
				className="overflow-x-hidden"
				opts={{
					align: "start",
					loop: true
				}}
			>
				<CarouselContent
					className="m-8"
				>
					{
						projects.map(
							(p, idx) => <CarouselItem key={idx}
								className="basis-1/1 md:basis-1/3"
							>
								<ProjectCard p={p} />
							</CarouselItem>
						)
					}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}

