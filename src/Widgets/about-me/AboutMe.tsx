import { motion } from "framer-motion";
import avatar from "../../Pages/images/avatar.png";
import {Link} from "react-router-dom";

const AboutMe = () => {
    return (
            <div className='w-full'>
                <div className='text-[clamp(24px,3vw,40px)]  font-extrabold text-left '>
                    <span className='text-[#c778dd]'># </span>
                    <h2 className=' before:-bottom-[14px]  relative inline-block  before:absolute before:w-[70%] before:h-[7px] before:bg-[--line-color]'>
                        about me</h2>
                </div>

                <div className='flex pt-[60px] justify-between lg:flex-nowrap flex-wrap gap-[20px]  m-auto items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }} // Початковий стан
                        whileInView={{ opacity: 1, x: 0 }} // Стан після потрапляння у в'юпорт
                        transition={{ duration: 1 }} // Тривалість анімації
                        viewport={{ once: false }}
                        className='flex items-center  flex-wrap justify-center'>
                        <img
                            className='drop-shadow-[0_0_55px_#717b85] anim-pulse rounded-full  active:scale-[1.2] hover:scale-[1.05] duration-150 w-[100px] sm:min-w-[400px] h-auto]'
                            src={avatar} alt={avatar}></img>
                        <h4 className="lg:hidden flex text-[clamp(20px,5vw,50px)] font-Manrope  font-extrabold">Hello,
                            I'm Denys!</h4>
                    </motion.div>


                    <div
                        className='flex font-firaCode max-w-[900px] text-[clamp(12px,3vw,18px)] flex-col gap-[20px] '>
                        <h4 className=" lg:inline hidden text-[clamp(12px,3vw,40px)] font-Manrope font-extrabold">Hello,
                            I'm Denys!</h4>
                        <p className=' text-[--text-color]'>
                            I'm a front-end developer currently living in Dobrodzien, Poland, originally from Ukraine.
                            I can design responsive websites from scratch and turn them into modern user-friendly web
                            resources.
                        </p>
                        <div className='flex flex-col text-[gray] gap-[20px]'>

                            <p>
                                I have a passion for designing accessible and flawless user interfaces. At the moment,
                                I'm
                                actively practicing, developing my own projects for my <Link target="_blank"
                                                                                             to={'https://github.com/dnsinnc'}
                                                                                             className='text-[#c778dd] underline'>GitHub</Link> ,
                                and also participating in commercial projects. In particular, I create and maintain
                                front-end components that ensure the smooth operation of the platform,
                                taking into account web accessibility standards.
                            </p>
                            <p>
                                My journey in front-end development began in 2022, and since then I have been actively
                                improving my skills on my own.
                            </p>
                            <p>
                                In my free time, I study English and Polish, love reading books, and continue to improve
                                my
                                front-end development skills, as it gives me great pleasure. I also listen to music all
                                the
                                time.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default AboutMe;