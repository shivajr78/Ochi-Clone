import { GoDotFill } from "react-icons/go";
import CoupleImage from '../assets/Couple.jpg'
const About = () => {
  return (
    <div className="w-full p-10 bg-[#cdea68] rounded-3xl">
      <h1 className="text-black font-['Neue_Montreal'] text-[4.5vw] leading-[1.2] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1> 
      <div className="w-full border-t-[1px] px-2 flex gap-5 mt-16 border-[#92a264] pt-10" >
        <div className="w-1/2 mt-2">
            <h1 className="text-black text-[5vw] font-semibold">Our approach :</h1>
            <button className=" bg-zinc-800 px-6 py-4 mt-2 items-center text-[1.6vw] rounded-full flex gap-7 uppercase">
               Read more <span className="text-[1.8vw]" ><GoDotFill/></span>
            </button>
        </div>
        <img src={CoupleImage} className="w-1/2 mt-5 h-[80vh] rounded-2xl bg-red-600 "></img>
      </div>    
    </div>
  );
};

export default About;
