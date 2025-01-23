import { motion } from "framer-motion";
import avatar from "../../Pages/images/avatar.png";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AboutMe = () => {
    const {t} = useTranslation();
    
    return (
            <div className='w-full'>
                <div className='text-[clamp(24px,3vw,40px)]  font-extrabold text-left '>
                    <span className=' gradientViolet'># </span>
                    <h2 className=' before:-bottom-[14px]  relative inline-block  before:absolute before:w-[70%] before:h-[7px] before:bg-[--line-color]'>
                        {t("about-me.title")}</h2>
                </div>

                <div className='flex pt-[60px] justify-between lg:flex-nowrap flex-wrap gap-[20px]  m-auto items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }} // Початковий стан
                        whileInView={{ opacity: 1, x: 0 }} // Стан після потрапляння у в'юпорт
                        transition={{ duration: 1 }} // Тривалість анімації
                        viewport={{ once: false }}
                        className='flex items-center  flex-wrap justify-center'>
                        <img
                            className='drop-shadow-[0_0_55px_#717b85]  rounded-full  active:scale-[1.2] hover:scale-[1.05] duration-150 w-[100px] sm:min-w-[400px] h-auto]'
                            src={avatar} alt={avatar}></img>
                        <h4 className="lg:hidden flex text-[clamp(20px,5vw,50px)] font-Manrope  font-extrabold">{t("about-me.name")}</h4>
                    </motion.div>


                    <div
                        className='flex font-firaCode max-w-[900px] text-[clamp(12px,3vw,18px)] flex-col gap-[20px] '>
                        <h4 className=" lg:inline hidden text-[clamp(12px,3vw,40px)] font-Manrope font-extrabold">{t("about-me.name")}</h4>
                        <p className=' text-[--text-color]'>
                            {t("about-me.subtitle")}
                        </p>
                        <div className='flex flex-col text-[gray] gap-[20px]'>

                            <p>
                                {t("about-me.text.first.part1")} <Link target="_blank"
                                                                                             to={'https://github.com/dnsinnc'}
                                                                                             className='text-[#c778dd] underline'>GitHub</Link>,  
                                {t("about-me.text.first.part2")}
                            </p>
                            <p>
                                {t("about-me.text.second")}
                            </p>
                            <p>
                                {t("about-me.text.third")}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default AboutMe;