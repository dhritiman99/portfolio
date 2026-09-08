"use client"
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion"

const projects = [
	{
		title: 'Movie browsing website',
		desc: 'Movie Browsing website using TMDB API. Users can search movies, by genre, language, submit reviews and view movie details',
		git_url: 'https://github.com/dhritiman99/movie_website',
		live_url: 'https://movie-website-rust-two.vercel.app/'
	},
	{
		title: 'Weather App Dashboard',
		desc: 'Displays current Weather in a dashboard, based on users location',
		git_url: 'https://github.com/dhritiman99/weather_forecast',
		live_url: 'https://weather-forecast-beta-nine.vercel.app/weather'
	},
	{
		title: 'Helmet detection using YOLO OpenCV',
		desc: `Helmet detection using YOLO OpenCV 
		Developed a YOLOv8-based system for detecting motorcycle riders, helmet violations, and 
		license plates from video streams, with custom model training and violation tracking.`,
		git_url: 'https://github.com/dhritiman99/helmet_and_license_plate_detection_yolo'
	},
]

export default function Projects() {
	return (
		<section id="projects">

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
								<ProjectCard p={p}/>
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



type TProjectCardProps = {
	title: string;
	desc: string;
	git_url?: string;
	live_url?: string;
};

function ProjectCard({p}: {p:TProjectCardProps}) {
	return <motion.div
		whileHover={
			{ rotateY: -30 }
		}
		transition={{
			duration: 0.5
		}}
	>
		<Card
			size="default"
			className=""
		>
			<CardHeader className="text-xl">
				{p.title}
			</CardHeader>
			<CardContent className="min-h-34">
				{p.desc}
			</CardContent>
			<CardFooter className="min-h-20 md:min-h-10 grid grid-cols-2 gap-10 justify-between">
				{p.git_url && <a href={p.git_url} target="_blank">
					<Button className='w-full'>
						Github
					</Button>
				</a>}
				{p.live_url && <a href={p.live_url} target="_blank">
					<Button className='w-full'>
						Live
					</Button>
				</a>}
			</CardFooter>
		</Card>
	</motion.div>;
}
