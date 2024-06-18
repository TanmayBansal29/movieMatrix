import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3">
        <div className="text-center">
          <h1 className="flex gap-[10px] mt-2 justify-center">
            <i class="text-[rgba(196,103,57,1)] text-[22px] ri-movie-fill"></i>
            <span className="text-white text-[20px] font-bold">
              Movie Matrix
            </span>
          </h1>
        </div>
        <nav className="flex flex-col text-zinc-400 text-xl font-semibold gap-[6px]">
          <h1 className="text-white font-bold text-xl mt-10 mb-5 ml-5">
            New Feeds
          </h1>
          <Link className="hover:bg-[rgba(196,103,57,1)] hover:text-white duration-300 rounded-md p-5">
            <i class="ri-fire-fill"></i> Trending
          </Link>
          <Link className="hover:bg-[rgba(196,103,57,1)] hover:text-white duration-300 rounded-md p-5">
            <i class="ri-sparkling-2-line"></i> Popular
          </Link>
          <Link className="hover:bg-[rgba(196,103,57,1)] hover:text-white duration-300 rounded-md p-5">
            <i class="ri-film-line"></i> Movies
          </Link>
          <Link className="hover:bg-[rgba(196,103,57,1)] hover:text-white duration-300 rounded-md p-5">
            <i class="ri-tv-2-line"></i> TV Shows
          </Link>
          <Link className="hover:bg-[rgba(196,103,57,1)] hover:text-white duration-300 rounded-md p-5">
            <i class="ri-team-fill"></i> People
          </Link>
        </nav>
        <hr className="mt-[3px]" />
        <nav className="flex flex-col text-zinc-400 text-xl font-semibold gap-[6px] mt-5">
          <Link className="hover:bg-[rgba(196,103,57,1)] hover:text-white duration-300 rounded-md p-5">
            <i class="ri-information-fill"></i> About Us
          </Link>
          <Link className="hover:bg-[rgba(196,103,57,1)] hover:text-white duration-300 rounded-md p-5">
            <i class="ri-phone-fill"></i> Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
