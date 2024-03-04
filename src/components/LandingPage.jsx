import { FaArrowUpLong } from "react-icons/fa6";
import contentimg from "../assets/content.jpg"
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.6' className="h-screen w-full bg-zinc-900 pt-1">
      <div className="flex justify-between items-center">
        <div className="textStructure mt-32 px-20">
          {["We create", "eye opening", "presentation"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="flex w-fit items-end overflow-hidden ">
                  {index === 1 && (
                    <motion.img src={contentimg} 
                      initial={{width:0}} 
                      animate={{width:"9vw"}} 
                      transition={{ease:[0.76, 0, 0.24, 1], duration: 1}} 
                      className="w-[9vw] h-[5vw] rounded-md">
                    </motion.img>
                  )}
                  <div className=" text-[6.8vw] leading-[6vw] tracking-tighter font-medium font-['Founders Grotesk marker X-Condensed'] font-bold">
                    <h1 className="uppercase">{item}</h1>
                  </div>
                </div>
              </div>                
            );
          })}
        </div>
        <div className="bg-red-500 w-[40px] h-[35vh] mt-24 py-3 ">
            <p className="text-center text-xl font-['Founders Grotesk marker X-Condensed'] font-bold">W<span className="text-2xl">.</span></p>
            <p className="transform -rotate-90 mt-2  text-sm font-semibold">Day</p>
            <p className="transform -rotate-90 mt-1 text-sm font-semibold">the</p>
            <p className="transform -rotate-90 text-sm font-semibold">of</p>
            <p className="transform -rotate-90 mt-2 text-sm font-semibold">Site</p>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-16 py-5 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md px-20 font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2 mr-20">
          <div className="uppercase font-light text-[1vw] px-4 py-2 border-[2px] border-zinc-400 rounded-full">
            Start the Project
          </div>
          <span className="rotate-[45deg]">
            <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-zinc-500 ">
              <FaArrowUpLong />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
