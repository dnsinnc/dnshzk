import computer from './images/photofrontend.png';
import {useEffect, useRef, useState} from "react";
import MySkills from "../Widgets/my-skills/MySkills.tsx";
import AboutMe from "../Widgets/about-me/AboutMe.tsx";
import Projects from "../Widgets/projects/projects.tsx";
import Contacts from "../Widgets/contacts/Contacts.tsx";
import Header from "../Widgets/header/Header.tsx";
import Footer from "../Widgets/footer/Footer.tsx";
import { motion } from 'framer-motion';
import {MoveLeft, MoveRight} from "../App/MAnimations";




function Main() {
    const [activeSection, setActiveSection] = useState('home');
    
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projects = useRef(null)
    const contacts = useRef(null);
    


    const handleScroll = () => {
        const sections = [
            { id: 'home', ref: homeRef },
            { id: 'about me', ref: aboutRef },
            { id: 'my skills', ref: skillsRef },
            { id: 'projects', ref: projects },
            { id: 'contacts', ref: contacts },
            
        ];

        sections.forEach(section => {
            const rect = section.ref.current.getBoundingClientRect();

            
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                setActiveSection(section.id);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    

    return (
        <div ref={homeRef} id='home' className='page'>
<div>
    <Header activeSection={activeSection}></Header>
</div>

            <main
              
                className='container relative'>
                <motion.section
                    initial="hidden"
                    animate="visible"
                    className='section '>
                    <div
                        className='flex lg:justify-between pt-[150px] w-full text-[clamp(20px,3vw,30px)] flex-wrap drop-shadow-2xl justify-center gap-[50px]  items-center'>
                        <motion.div variants={MoveRight} className='inline-block w-auto'>
                            <div
                                className='m-auto lg:text-[30px] sm:text-[20px]  text-[18px] w-[265px] sm:w-[290px] lg:w-[440px] xl:text-[34px] xl:w-[495px] '>
                                <div
                                    className='font-Manrope  font-extrabold'><span
                                    className='tracking-[3px] text-[50px]  spacing font-bold'>Denys is a  </span>
                                    <p className='font-firaCode typed-out whitespace-nowrap text-[#c778dd]'>front-end.web(developer)</p>
                                </div>
                                <p className='font-firaCode text-[clamp(10px,2vw,18px)]  text-[gray]'>He crafts
                                    responsive where technologies meet creativity</p>
                            </div>
                        </motion.div>
                        <motion.div variants={MoveLeft} className='max-w-[500px] sm:min-w-[200px] px-[20px]'>
                            <img className='w-full drop-shadow-[0_0_55px_#3f3fb5] ' alt={computer}
                                 src={computer}></img>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    initial="hidden"
                    animate="visible"
                    ref={skillsRef} id='my-skills' className='section'>
                    <MySkills/>
                </motion.section>
                <section ref={aboutRef} id='about-me' className='section'>
                    <AboutMe/>
                </section>

                <section ref={projects} id='projects' className='section'>
                    <Projects/>
                </section>

                <section ref={contacts} id='contacts' className='section'>
                    <Contacts/>
                </section>
            </main>
            <div className='shadow-2xl'>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Main;