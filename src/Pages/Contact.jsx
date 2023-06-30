import { useForm } from "react-hook-form";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const form = useRef();
    const onSubmit = data => {
        emailjs.sendForm('service_u7p4p87', 'template_c9atn5m', form.current, 'rwzW804g48l629pVL')
            .then((result) => {
                if (result) {
                    reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="mx-8 md:mx-16">
            <h1 className="divider w-[40%] md:mx-auto text-white text-xl md:text-4xl font-bold">Get In Touch</h1>
            <form
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                // data-aos-anchor-placement="top-top"
                ref={form} className=" mt-16 md:mt-36 md:w-[60%] mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex md:flex-row flex-col gap-4 mb-11">
                    <input className="md:w-1/2 outline-none bg-transparent border-b-2 h-10 ps-2" placeholder="Name" type="text" {...register("name")} />
                    <input className="md:w-1/2 outline-none bg-transparent border-b-2 h-10 ps-2" placeholder="Email" type="email" {...register("email")} />

                </div>
                <textarea placeholder="Enter your message" className="w-full outline-none bg-transparent border-b-2  ps-2" cols="30" rows="7" {...register("message")}></textarea>
                <input type="submit" className="px-6 py-2 float-right mt-8 border-2 cursor-pointer" value="Send Message" />
            </form>
        </div>

    );
};

export default Contact;