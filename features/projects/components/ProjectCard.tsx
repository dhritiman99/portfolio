import { TProject } from "../types/project";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";


export function ProjectCard({p}: {p:TProject}) {
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
			className="border-t-2 border-primary"
		>
			<CardHeader className="text-xl min-h-20">
				{p.title}
			</CardHeader>
			<CardContent className="min-h-50">
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
