import { useEffect, useState } from "react";

const Start = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="w-full bg-[#CDEA68] h-[210vh] py-28 flex flex-col gap-16">
      <div
        className=" text-[#212121] text-9xl font-bold 
        font-['Founders Grotesk marker X-Condensed'] uppercase
        text-center leading-none tracking-tighter"
      >
        <h1 className="-mb-3">ready</h1>
        <h1 className="-mb-3">to start</h1>
        <h1 className="-mb-3">the project ?</h1>
      </div>
      <div className="relative">
        <div className="absolute flex items-center gap-8 top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%">
          <div className="flex items-center justify-center w-[16vw] h-[16vw] bg-zinc-200 rounded-full">
            <div className="w-[9vw] h-[9vw] relative bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[16vw] h-[16vw] bg-zinc-200 rounded-full">
            <div className="w-[9vw] h-[9vw] relative bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-48">
        <div className="flex justify-center ">
          <div
            className="flex items-center justify-center gap-8 border-2 border-zinc-800 bg-zinc-800 font-semibold
         rounded-full py-4 px-4 w-1/4 text-center "
          >
            <div className="uppercase ">start the project </div>
          </div>
        </div>
        <h1 className="uppercase text-zinc-800 text-center py-5 font-semibold">OR</h1>
        <div className="flex justify-center ">
          <div
            className="flex items-center justify-center gap-8 border-2 border-zinc-800 text-zinc-900 font-semibold
         rounded-full py-4 px-4 w-1/4 text-center hover:bg-zinc-800 hover:text-white "
          >
            <div className="uppercase">hello@ochi.design </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
