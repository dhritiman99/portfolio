import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TSkill } from "../types/skills";

export function SkillCard({ skillItem: skillItem }: { skillItem: TSkill }) {
	return <motion.div
		initial={{ opacity: 0, x: -5 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{
			opacity: { duration: 2 },
		}}
		whileHover={{ rotateY: -30 }}
		className="perspective-normal"
	>
		<Card
			className="flex border-l-2 border-primary"
		>
			<CardContent
				className="min-w-40 min-h-40"
			>
				<img src={skillItem.url} width="208" height="208" />
			</CardContent>
			<CardFooter>
				{skillItem.label}
			</CardFooter>
		</Card>
	</motion.div>;
}
