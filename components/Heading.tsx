import { motion } from "framer-motion"
import { Suspense } from "react"

type props = {
    title: string
}

export default function Heading({ title }: props) {
    return <>
        <Suspense>        
        <motion.div
            initial={{
                translateX: "200px"
            }}
            animate={{
                translateX: "0px"
            }}
            whileInView={{
                opacity: 1,
                x:0
            }}
            viewport={{
                once: true,
                amount: 0.1
            }}
        >
            <h3 className="text-start  mx-10 mt-15 px-6 text-4xl">{title}</h3>
            <hr className="text-primary p-2" />
        </motion.div>
        </Suspense>

    </>
}