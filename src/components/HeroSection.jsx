import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

        {/* Left Section */}
        <div className="z-40 xl:mb-0 mb-[20%]">
            <motion.h1 
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 25,
                    delay: 1.3,
                    duration: 1.5,
                }}
                className="text-3xl md:text-4xl lg:text-7xl font-bold z-10 mb-6">
                Java Full Stack Developer 
                <br /> <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold z-10 mb-2">Building Fast <br /> Reliable Results</h3>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 25,
                    delay: 1.8,
                    duration: 1.5,
                }}
                className="text-md md:text-1xl lg:text-2xl text-purple-200 max-w-2xl">
                I deliver robust, production-ready websites and web apps with speed and precision. Every project is backed by
                clean code, clear communication, and a commitment to getting it done, on time, every time.
            </motion.p>
        </div>

        {/* Right Section */}

        <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"  scene="https://prod.spline.design/xjQFy-JzKcwAc59B/scene.splinecode" />

    </section>
  )
}

export default HeroSection