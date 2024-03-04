import ViseImg from "../assets/Vise.jpg";
import FydeImg from "../assets/Fyde.png";
import trawaImg from "../assets/trawa.jpg";
import blendImg from "../assets/blend.png";
import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation() ]
  const handleHover=(index)=>{
  cards[index].start({y:"0"})
  }  
  const handleHoverEnd=(index)=>{
  cards[index].start({y:"100%"})
  }  
  return (
    <div className="w-full py-10 px-10 bg-zinc-700">
      <div className="w-full border-b-[1px] border-zinc-500 pb-10">
        <h1 className="font-['Neue_Montreal'] text-[5vw] font-medium tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="pt-16 pb-48">
        <div className="cards_row_1 w-full flex gap-10">
          <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 card h-[80vh]">
            <div className="cardTitle flex items-center gap-2 p-3">
              <div className="w-3 h-3 bg-zinc-300 rounded-full"></div>
              <p className="text-xl font-medium text-zinc-100">FYDE</p>
            </div>
            <h1 className="absolute flex left-full overflow-hidden -translate-x-2/4 pl-7 top-1/2 -translate-y-2/5 text-8xl z-[9] leading-none tracking-tighter text-[#CDEA68] font-semibold ">
              {"FYDE".split("").map((item, index) => (
                <motion.span 
                initial={{y:"100%"}}
                animate={cards[0]}
                transition={{ease:[0.22,1,0.36,1], delay: index*.05}}
                className="inline-block" key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-3xl overflow-hidden">
              <img src={FydeImg} className="rounded-2xl"></img>
            </div>
            {["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"].map(
              (item, index) => (
                <button
                  key={index}
                  className="link uppercase border-2 border-zinc-800 rounded-3xl font-medium
              text-lg py-1 mr-2 mt-3 px-4 text-center hover:bg-zinc-200 hover:text-zinc-800"
                >
                  {item}
                </button>
              )
            )} 
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 card h-[80vh]">
            <div className="cardTitle flex items-center gap-2 p-3">
              <div className="w-3 h-3 bg-zinc-300 rounded-full"></div>
              <p className="text-xl font-medium text-zinc-100">VISE</p>
            </div>
            <h1 className="absolute flex right-full overflow-hidden translate-x-2/4 pr-10 top-1/2 -translate-y-2/5 text-8xl z-[9] leading-none tracking-tighter text-[#CDEA68] font-semibold ">
              {"VISE".split("").map((item, index) => (
                <motion.span 
                initial={{y:"100%"}}
                animate={cards[1]}
                transition={{ease:[0.22,1,0.36,1], delay: index*.05}}
                className="inline-block" key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-3xl overflow-hidden">
              <img src={ViseImg} className="rounded-2xl"></img>
            </div>
            {["agency", "company presentation"].map((item, index) => (
              <button
                key={index}
                className="link uppercase border-2 border-zinc-800 rounded-3xl font-medium
              text-lg py-1 mr-2 mt-3 px-4 text-center hover:bg-zinc-200 hover:text-zinc-800"
              >
                {item}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="cards_row_2 w-full flex gap-10 mt-48 ">
          <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className="cardcontainer relative w-1/2 card h-[80vh]">
            <div className="cardTitle flex items-center gap-2 p-3">
              <div className="w-3 h-3 bg-zinc-300 rounded-full"></div>
              <p className="text-xl font-medium text-zinc-100">TRAWA</p>
            </div>
            <h1 className="absolute flex overflow-hidden left-full -translate-x-2/4 pl-7 top-1/2 -translate-y-2/5 text-8xl z-[9] leading-none tracking-tighter text-[#CDEA68] font-semibold ">
              {"TRAWA".split("").map((item, index) => (
                <motion.span 
                initial={{y:"100%"}}
                animate={cards[2]}
                transition={{ease:[0.22,1,0.36,1], delay: index*.05}}
                className="inline-block" key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-3xl overflow-hidden">
              <img src={trawaImg} className="rounded-2xl"></img>
            </div>
            {["brand identity", "design research", "investor deck"].map(
              (item, index) => (
                <button
                  key={index}
                  className="link uppercase border-2 border-zinc-800 rounded-3xl font-medium
              text-lg py-1 mr-2 mt-3 px-4 text-center hover:bg-zinc-200 hover:text-zinc-800"
                >
                  {item}
                </button>
              )
            )}
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className="cardcontainer relative w-1/2 card h-[80vh]">
            <div className="cardTitle flex items-center gap-2 p-3">
              <div className="w-3 h-3 bg-zinc-300 rounded-full"></div>
              <p className="text-xl font-medium text-zinc-100">PREMIUM BLEND</p>
            </div>
            <h1 className="absolute flex overflow-hidden right-full translate-x-72 top-1/2 whitespace-nowrap -translate-y-3/5 text-8xl z-[9] leading-none tracking-tighter text-[#CDEA68] font-semibold ">
              {"PREMIUM BLEND".split("").map((item, index) => (
               <motion.span 
               initial={{y:"100%"}}
               animate={cards[3]}
               transition={{ease:[0.22,1,0.36,1], delay: index*.02}}
               className="inline-block" key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-3xl overflow-hidden">
              <img src={blendImg} className="rounded-2xl"></img>
            </div>
            {["branded template"].map((item, index) => (
              <button
                key={index}
                className="link uppercase border-2 border-zinc-800 rounded-3xl font-medium
              text-lg py-1 mr-2 mt-3 px-4 text-center hover:bg-zinc-200 hover:text-zinc-800"
              >
                {item}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <div className="flex items-center justify-center gap-8 border-2 font-semibold
         rounded-full py-4 px-4 w-1/4 text-center hover:bg-zinc-300 hover:text-zinc-900 ">
          <div className="uppercase">view all case studies </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
