import React from 'react'
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div className='w-full h-[10vh] relative flex justify-center items-center'>
        <i class="text-zinc-400 text-3xl mt-2 ri-search-line "></i>
        <input className='w-[60%] mx-10 p-4 text-xl outline-none border-none bg-white bg-opacity-[0.04] text-white rounded-2xl mt-2' type="text" placeholder='Search Anything...' />
        {/* <i class="text-zinc-400 text-3xl ri-close-fill"></i> */}

        <div className='absolute w-[60%] h-[50vh] bg-zinc-200 top-[100%] ml-7'>
            <Link className='hover:text-black hover:bg-zinc-300 duration-300 w-full font-semibold text-zinc-600 p-6 flex justify-start items-center border-b-[1px] border-zinc-400'>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link>
        </div>
    </div>
  )
}

export default Topnav 