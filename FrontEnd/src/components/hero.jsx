import React from 'react';
import store from 'store';
function Hero() {
  
    return (
      <div className='flex'>
        <h1 className='font-serif text-[#323557] ml-52 mt-28 text-5xl'>
          Garden Fresh
          <p className='font-sans tracking-tight text-base ml-1 mt-2 text-[#a6acc6]'> <p>Lorem ipsum dolor sit amet consectetur</p><p>adipisicing elit. </p> </p>
          <button className="bg-[#2bc6eb] font-sans text-sm ml-1 mt-10 hover:bg-blue-400 stroke-black text-[#323557] font-bold py-2.5 px-16 rounded">
            Buy
          </button>
          <div class="flex justify-center mt-14">
            <div class="flex flex-col md:flex-row md:w-[20rem] h-[15rem] rounded-lg shadow-lg bg-zinc-700 ">
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-white text-xl font-medium mb-2">Card title</h5>
                <p class="text-xs mb-4 text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum!
                </p>
                <p class=" text-xs text-slate-300">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
  
  
        </h1>
        <div className='ml-20 -mt-8'>
          <img style={{ height: 800, width: 800 }} src={require('../images/juice.png')} />
  
        </div>
  
  
  
      </div>
  
  
    )
  }


export default Hero