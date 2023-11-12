import React from "react";

const Hero = () => {
  return (
    <div className="bg-black/40 h-screen flex justify-center">
      <div className="flex flex-col items-center self-center">
        <h2>Welcome to Romeo</h2>
        <h1 className="playfair text-6xl">Discover the art of </h1>
        <div className="flex items-center gap-4">
          <hr className="h-[2px] bg-white w-[60px]" />
          <h1 className="playfair text-6xl">Creative </h1>
          <hr className="h-[2px] bg-white w-[60px]" />
        </div>
        <form
          action=""
          className="bg-red-600/20 w-[800px] h-[50px] p-[6px] rounded-full mt-[50px]"
        >
            <input type="date" name=""  id="" className="bg-transparent" placeholder="Check In" />
          <button
            type="submit"
            className="rounded-full h-full poppins px-[10px] bg-yellow-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
