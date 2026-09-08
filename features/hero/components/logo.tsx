import { motion } from 'framer-motion'
export default function Logo() {
    return <motion.div
        initial={{
            scale: 0,
            rotateY: 180
        }}
        animate={{
            scale: 1,
            rotateY: 0

        }}
        transition={{
            duration: 0.8
        }}
        className="w-60 md:max-w-90 mx-auto grid rounded-full border-5 border-primary perspective-dramatic"

    >
        <img
            className="rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaool7XEWpn1IGXAX6KN7WKvG_YiLWhfbqcuo1iR-9w&s=10" alt=""
        />
    </motion.div>
}