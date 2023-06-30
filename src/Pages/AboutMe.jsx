import { useEffect } from 'react'


import ProgressBar from "@ramonak/react-progress-bar";
import { GoLocation } from 'react-icons/go'
import { SlCalender } from 'react-icons/sl'
import { FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import AOS from 'aos';
import { saveAs } from 'file-saver';
import 'aos/dist/aos.css';
const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const handleDownloadResume = () => {
        const fileUrl = 'https://drive.google.com/file/d/1qejElQIPQG-PbVJxRy9h19OWO7f5FsWM/view?usp=sharing'
        const fileName = 'Safi-Resume.pdf'
        saveAs(fileUrl, fileName)
    }

    return (
        <div className=" h-fit mt-16  mx-8 md:mx-16">
            <div className="flex justify-center">
                <img
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-back"
                data-aos-mirror="true"
                data-aos-once="false"
                className="h-[250px] w-[250px] rounded-full border-8 border-neutral-500" src="https://i.ibb.co/2W5GJ9x/356807092-167427786318260-3485479920495068713-n-1.jpg" alt="" />
            </div>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-10 mx-auto ">
                <div data-aos="slide-right"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out-sine"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    
                    className=" space-y-4">
                    <h1 className="text-xl font-semibold md:text-2xl  ">Hi There! I'm MD. Said Hasan Safi</h1>
                    <p>I'm a 6 months creative web designer and devlopment based in Bangladesh, specializing in crafting clean, visually appealing, and user-friendly interfaces that meet the latest web standards.</p>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='flex flex-col gap-3 '>
                            <p className='flex gap-2' ><GoLocation size={25} /><span className='font-bold' >Location:</span>Gobindhaganj , Gaibandha  </p>
                            <p className='flex gap-2' ><FaPhoneAlt size={25} /><span className='font-bold' >Phone:</span>+8801318610396</p>

                        </div>
                        <div className='flex flex-col gap-3 '>
                            <p className='flex gap-2' ><SlCalender size={25} /><span className='font-bold' >Age:</span>22</p>
                            <p className='flex gap-2' ><AiOutlineMail size={25} /><span className='font-bold' >Email:</span>safiislam04@gmail.com</p>
                        </div>

                    </div>
                    <button onClick={handleDownloadResume} className='border px-4 py-2 text-white hover:rounded-xl' >Download Resume</button>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    >
                    <div>
                        <h1 className='font-bold text-base' >HTML/CSS3</h1>
                        <ProgressBar animateOnRender height="12px" labelSize="12px" labelAlignment="outside" bgColor="#E44D26" completed={70} />
                    </div>
                    <div>
                        <h1 className='font-bold text-base' >JAVASCRIPT</h1>
                        <ProgressBar animateOnRender height="12px" labelSize="12px" labelAlignment="outside" bgColor="#E44D26" completed={55} />
                    </div>
                    <div>
                        <h1 className='font-bold text-base' >REACT</h1>
                        <ProgressBar animateOnRender height="12px" labelSize="12px" labelAlignment="outside" bgColor="#E44D26" completed={70} />
                    </div>
                    <div>
                        <h1 className='font-bold text-base' >MONGODB</h1>
                        <ProgressBar animateOnRender height="12px" labelSize="12px" labelAlignment="outside" bgColor="#E44D26" completed={60} />
                    </div>
                    <div>
                        <h1 className='font-bold text-base' >NODE JS</h1>
                        <ProgressBar animateOnRender height="12px" labelSize="12px" labelAlignment="outside" bgColor="#E44D26" completed={50} />
                    </div>
                    <div>
                        <h1 className='font-bold text-base' >EXPRESS</h1>
                        <ProgressBar animateOnRender height="12px" labelSize="12px" labelAlignment="outside" bgColor="#E44D26" completed={55} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;