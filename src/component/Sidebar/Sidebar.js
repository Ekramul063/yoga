import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import profile from '../../asets/profile.jpeg'


const Sidebar = ({yogaTime}) => {
    const [yogaBreak,setYogaBreak] = useState('0S');
    const handleCompleteYoga =()=>{
        toast.success('complete yoga successfullgit')
    }
    const handleBreak = event =>{
        const value = event.target.innerText;
        localStorage.setItem('break-time',value);
        setYogaBreak(value)
    } 
    const storedTime = localStorage.getItem('break-time');
    let showtime = 0;
    yogaTime.forEach(item => {
        showtime = showtime+item;
      });

    return (
        <div className='px-5 border'>
            <div className="flex flex-col justify-center items-center mb-7 mt-5">
                <img className='h-[100px] w-[100px]' src={profile} alt="" />
                <h3 className='mt-3 text-xl font-bold uppercase'>jimmy</h3>
            </div>

           <div className='my-7'>
            <h3 className='text-xl font-bold mb-3 text-center'>Add a break</h3>
           <ul className="flex gap-3 justify-center">
            <li onClick={handleBreak} className='list-none p-2 bg-primary text-white cursor'>10S</li>
            <li onClick={handleBreak} className='list-none p-2 bg-primary text-white cursor'>20S</li>
            <li onClick={handleBreak} className='list-none p-2 bg-primary text-white cursor'>30S</li>
            <li onClick={handleBreak} className='list-none p-2 bg-primary text-white cursor'>40S</li>
           </ul>
           </div>
           <div>
            <h3 className='text-xl font-bold mb-3 text-center'>Exercise Details</h3>
          <div >
            <div className='flex mb-3 justify-between bg-blue-200 p-2 items-center'>
                <h3 className='text-lg font-bold '>Exercise time</h3>
                <p className='font-bold'>{showtime}S</p>
            </div>
            <div className='flex mb-3 bg-blue-200 p-2 justify-between items-center'>
                <h3 className='text-lg font-bold '>Break time</h3>
                <p className='font-bold'>{storedTime}</p>
            </div>
          </div>
           </div>
           <button className='btn btn-primary w-full mt-5' onClick={handleCompleteYoga}>Complete Yoga</button>
        </div>
    );
};

export default Sidebar;