// import Scrollspy from 'react-scrollspy'
import ScrollspyNav from "react-scrollspy-nav";
import Home from './Pages/Home';
import { AiOutlineMenu } from 'react-icons/ai'
import {GiCancel} from 'react-icons/gi'
import { useState } from "react";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact";



const App = () => {
  const [isOpen, setIsopen] = useState(false)
  return (
    <div className="">
      <ScrollspyNav
        scrollTargetIds={["section_1", "section_2", "section_3"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
      >
        <div className=" z-10 px-8 md:px-16 bg-transparent fixed w-full top-0 py-6 flex justify-between  md:items-center ">
          <h2 className="text-xl md:text-2xl font-bold greadient ">Portfolio</h2>
          <div className="relative z-10">
            { !isOpen && <button onClick={()=>setIsopen(true)} className='block md:hidden' ><AiOutlineMenu /></button> }
            <ul className={`flex md:flex-row  flex-col gap-5 md:text-lg text-white absolute  ${isOpen ? '-top-3 right-0 ': 'top-0 -right-96 md:right-0'} `}>
                <button onClick={()=>setIsopen(false)} className="block md:hidden "  ><GiCancel /> </button>
              <li><a href="/">Home</a></li>
              <li><a href="#section_1">About</a></li>
              <li><a href="#section_2">Projects</a></li>
              <li><a href="#section_3">Contact</a></li>
            </ul>
          </div>
        </div>

      </ScrollspyNav>

      <div className="">
        <div><Home /></div>
        <div id="section_1" className=" min-h-screen" ><AboutMe /></div>
        <div id="section_2" className=" min-h-screen"><Projects /> </div>
        <div id="section_3" className=" min-h-screen"><Contact /> </div>
      </div>
    </div>
  );
};

export default App;