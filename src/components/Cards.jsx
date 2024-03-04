const Cards = () => {
  return (
    <div  className="w-full h-screen bg-zinc-700 flex gap-5 items-center px-8">
      <div  className="cardcontainer-one w-1/2 h-[50vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center ">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
          <button className="uppercase absolute left-8 bottom-7 border-[1px] rounded-full
           text-[#CDEA68] border-[#CDEA68] text-xs px-3 py-1">&copy;2019-2024 </button>
        </div>
      </div>
      <div className="cardcontainer-two w-1/2 h-[50vh] flex gap-5">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              className="w-1/3 h-1/5"
            />
             <button className="uppercase absolute left-13 bottom-7 border-[1px] rounded-full
           text-zinc-300 border-zinc-300 text-xs px-3 py-1"> rating 5.0 on clutch</button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            className="w-1/3 h-1/3"
          />
           <button className="uppercase absolute left-10 bottom-7 border-[1px] rounded-full
           text-zinc-300 border-zinc-300 text-xs px-3 py-1"> business bootcamp alumni</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
