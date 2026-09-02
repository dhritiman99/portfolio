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
		url: 'https://movie-website-rust-two.vercel.app/'
	},
	{
		title: 'Weather App Dashboard',
		desc: 'Displays current Weather in a dashboard, based on users location',
		url: 'https://weather-forecast-beta-nine.vercel.app/weather'
	},
	{
		title: 'Url Shortener',
		desc: 'Movie Browsing website using TMDB API. Users can search movies, by genre, language, submit reviews and view movie details',
		url: 'https://movie-website-beta-three.vercel.app/'
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
								<motion.div
									whileHover={{ scale: 1.05 }}
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
										<CardFooter className="min-h-20 md:min-h-10">
											<a href={p.url}>
												<Button>
													View
												</Button>
											</a>
										</CardFooter>
									</Card>
								</motion.div>
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


