/* eslint-disable react/jsx-no-target-blank */

import { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
    useEffect(() => {
        AOS.init({
           
        });
    }, [])
    const project = [
        {
            id: '1',
            webUrl: 'https://summary-school.web.app/',
            imgUrl: 'https://i.ibb.co/Bf0SnGb/1website.png',
            client: 'https://github.com/safiislam/Hurmoney-Academy',
            server: 'https://github.com/safiislam/Harmoney-Academy-server',
            discription: "Hurmony Academy school has there navbar such as home , all class, instractor .it has 3 dashbord one is student ,one is instractor ,one is admin dashbord . student enroll class by stripe payment . instructor add a class . delete class . another admin deshbord admin can denay or panding class .admin make admin and instructor ",
            title: 'Hurmony Academy',
            technologies: ['Tailwind Css', 'React', 'Node js', 'Express', 'MongoDB', 'Firebase', 'jwt', 'axios', 'stripe payment']

        },
        {
            id: '2',
            webUrl: 'https://toy-market-1f366.web.app/',
            imgUrl: 'https://i.ibb.co/ns9TbFs/2-websit.png',
            client: 'https://github.com/safiislam/toy-market-client',
            server: 'https://github.com/safiislam/toy-market-server',
            discription: "There employment login system useing firebase. there has all toy section there show all toy . all toy section add search emplyment. add a toy anyone add a toy . my toy section has this user show all toy that this user add . this section delete toy and update toy . all section are privet . if you are not login . you are not show all .",
            title: 'Toy Market',
            technologies: ['Tailwind Css', 'React', 'Node js', 'Express', 'MongoDB', 'Firebase']

        },
        {
            id: '3',
            webUrl: 'https://cook-website.web.app/',
            imgUrl: 'https://i.ibb.co/G0Vmwwm/3-website.png',
            client: 'https://github.com/safiislam/cooking-website-client',
            server: 'https://github.com/safiislam/cook-website-server',
            discription: "Cooking website login emplyment with firebase . home section a banner, chef section show all chef . click view recipe then show all recepe that the shape make . view recepe is private . ",
            title: 'Cooking-website',
            technologies: ['Tailwind Css', 'React', 'Node js', 'Express', 'MongoDB', 'Firebase', 'jwt', 'axios', 'stripe payment']

        }
    ]
    const [open, setOpen] = useState(false)
    const onOpenModal = (id) => {
        setOpen((prevState)=>({...prevState,[id]:true}))
    }
    const onCloseModal = (id) => {
        setOpen((prevState)=>({...prevState,[id]:false}))
    }

    return (
        <div className=" mx-4 md:mx-16 " >
            <p className='divider  w-[40%] mx-auto text-white text-xl md:text-4xl font-bold'>Recent Work</p>
            <div
                data-aos="slide-right"
                // data-aos-offset="200"
                // data-aos-delay="0"
                // data-aos-duration="800"
                // data-aos-easing="ease"
                // data-aos-mirror="true"
                // data-aos-once="false"
                className="h-fit grid grid-cols-1 md:grid-cols-3 gap-4 mt-24" >
                {
                    project.map(item => <div key={item.id} className="rounded-xl border-2 h-96 card-container ">
                        <img className="w-full h-full rounded-xl " src={item.imgUrl} alt="" />
                        <div className='layer'>
                            <div className='space-x-8 layter-text' ><button onClick={()=>onOpenModal(item.id)} className='px-8 bg-primary py-2 rounded-full' >view</button> <button className='px-8 bg-primary py-2 rounded-full'> <a target="_blank" href={item.webUrl}>site</a> </button> </div>
                            <Modal classNames='' open={open[item.id]} onClose={()=>onCloseModal(item.id)} center>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <img src={item.imgUrl} alt="" />
                                <p className="text-2xl font-bold ">{item.title}</p>
                                <p>{item.discription}</p>
                                <p className='text-xl font-bold' > Source Code</p>
                                <div className='space-x-3' >
                                    <button className='px-8 bg-primary py-2 rounded-full' > <a target='_blank' href={item.client}>Client link</a> </button>
                                    <button className='px-8 bg-primary py-2 rounded-full' > <a target='_blank' href={item.server}>Server link</a> </button>
                                </div>
                                <p className='text-xl font-bold' > Technologies</p>
                                <div className='space-x-3 space-y-3'>
                                    {
                                        item.technologies.map((tec, index) => <button key={index} className='px-8 bg-primary py-2 rounded-full' >{tec} </button>)
                                    }
                                </div>
                            </Modal>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;