import React from 'react';

export default function LoginPage(){
    {/*JavaScript Code*/}
    return (
        <div className="w-screen h-screen flex justify-center items-end sm:items-center bg-[url('public/CreationPageBackground.png')] bg-cover">
            <div className="p-15 text-[#1F100A] flex flex-col justify-center w-full m-7 sm:w-[500px] h-3/5 lg:h-3/4 bg-[#FFCF32] rounded-4xl shadow-md font-[Dongle] lg:text-4xl">
                <h1 className="text-white text-center lg:text-5xl font-[Slackey]">PalsPlan</h1>
                <div className='mt-5 flex flex-col'>
                    <h2 className='font-[Dongle] text-white'>Login</h2>
                    <select className='mb-3 bg-black rounded-2xl text-2xl pl-2 text-white'>
                        <option value="Name1">Paul</option>
                        <option value="Name2">Hakeem</option>
                        <option value="Name3">Danna</option>
                    </select>
                    <button class="btn bg-[#5E93E8] border-none text-xl">Select your Name!</button>
                </div>
                {/*OR Line*/}
                <hr className='mt-10 mb-10'></hr>
                <div className='flex flex-col'>
                    <h2 className='font-[Dongle] text-white'>New Pal</h2>
                    <input type="text" placeholder="Enter name here..." className="w-full input mb-3 text-2xl bg-black text-white rounded-2xl" />
                    <button class="btn bg-[#5E93E8] border-none text-xl">Pal Registration</button>
                </div>
            </div>
        </div>
    )
}