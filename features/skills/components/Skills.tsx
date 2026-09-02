"use client"
import Heading from "@/components/Heading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion"

const skills = [
	{
		label: 'HTML',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyH2myWuIgQG8jBZSxpCal8L_6F96e_Ip5T7DiqeQWQ&s'
	},
	{
		label: 'CSS',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ikO3pUhUmpZ9roI0ERZPii07B8QP3tgG38JtLshG5w&s=10'
	},
	{
		label: 'Javascript',
		url: 'https://blog.amt.in/wp-content/uploads/2017/05/download.jpg'
	},
	{
		label: 'Python',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3okoVB6kjjT0nM98EwhozVLWRmyYV_pDDLHr2x06gtg&s=10'
	},
	{
		label: 'ReactJs',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10'
	},
	{
		label: 'NextJs',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwZIex5hjq3kEFn4AdQJuzaDaO2rfcPbXNwqNxbwTghVk2WFVX0WtJ4V2&s=10'
	},
]

export function Skills() {
	return (
		<section id="skills">
			<Heading title="Skills" />
			<div className="grid grid-cols-2 mx-10 md:grid-cols-4 lg:grid-cols-5 md:gap-5 gap-2">
				{
					skills.map(
						(it, idx) => <div
							className="flex justify-around"
							key={idx}
						>
							<motion.div
								initial={{ opacity: 0, x: -5 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									opacity: { duration: 2 },
								}}
								whileHover={{ scale: 1.1 }}
							>
								<Card
									className="flex"
								>
									<CardContent
										className="min-w-40 min-h-40"
									>
										<img src={it.url}  />
									</CardContent>
									<CardFooter>
										{it.label}
									</CardFooter>
								</Card>
							</motion.div>
						</div>
					)}
			</div>

		</section>
	);
}


