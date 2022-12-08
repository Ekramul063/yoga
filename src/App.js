
import { useState } from 'react';
import './App.css';
import Blogs from './component/Blogs/Blogs';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import Yoga from './component/Yoga/Yoga';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [yogaTime,setYogaTime] = useState([0]);
  function newTime(x){
    const y =[...yogaTime];
    y.push(x);
    setYogaTime(y);

  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-wrap">

        {/* sidebar */}
        <div className='w-full lg:w-[25%] md:w-[60%] md:mx-auto'>
          <Sidebar yogaTime={yogaTime}></Sidebar>
        </div>

        <div className="w-full lg:w-3/4">
          <Yoga newTime={newTime}></Yoga>
        </div>
      </div>
      <Blogs></Blogs>
      <Toaster />

    </div>
  );
}

export default App;
