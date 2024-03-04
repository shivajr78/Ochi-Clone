import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.3' className="w-full py-12 rounded-tl-2xl rounded-tr-2xl bg-[#004D43] ">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex overflow-hidden whitespace-nowrap pb-3">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration : 10}} className="text-[18vw] leading-none tracking-tighter uppercase font-['Founders Grotesk marker X-Condensed'] font-semibold ">we are ochi&nbsp;</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration : 10}} className="text-[18vw] leading-none tracking-tighter uppercase font-['Founders Grotesk marker X-Condensed'] font-semibold ">we are ochi&nbsp;</motion.h1>
      </div>
    </div>
  );
};
   
export default Marquee;
      