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
		url: 'https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png'
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
			<div className="flex justify-center">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
				{
					skills.map(
						(it, idx) => <div
							className="flex"
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
										<img src={it.url} width="208" height="208" />
									</CardContent>
									<CardFooter>
										{it.label}
									</CardFooter>
								</Card>
							</motion.div>
						</div>
					)}
			</div>
			</div>

		</section>
	);
}


