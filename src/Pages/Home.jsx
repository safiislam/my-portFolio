import Typed from 'typed.js';
import { useRef, useEffect } from 'react';

const Home = () => {
    const el = useRef(null)
    useEffect(()=>{
        const typed = new Typed(el.current,{
            strings:['Junior Mern stack developer'],
            smartBackspace:true ,
            loop: true,
            typeSpeed:100
        })
        return()=>{
            typed.destroy()
        }
    },[])
    return (
        <div  className="h-screen  flex-col flex items-center justify-center  bg-[url(https://i.ibb.co/0GPTPQ6/pexels-rostislav-uzunov-5011647.jpg)]  bg-cover">
            <h1 className=" text-2xl md:text-7xl font-bold -mt-20 text-white" >Hi! i'am Safi</h1>
            <p className=" text-xl md:text-4xl font-bold text-white" >A professional <span ref={el}></span>  </p>
        </div>
    );
};

export default Home;