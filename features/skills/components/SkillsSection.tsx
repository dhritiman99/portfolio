"use client"
import Heading from "@/components/Heading";
import { skills } from "../constants/skills";
import { SkillCard } from "./SkillCard";

export function SkillsSection() {
	return (
		<section
			id="skills"
			className="min-h-screen"
		>
			<Heading title="Skills" />
			<div className="flex justify-center">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-4">
					{
						skills.map(
							(it, idx) => <div
								className="flex"
								key={idx}
							>
								<SkillCard skillItem={it} />
							</div>
						)}
				</div>
			</div>
		</section>
	);
}

