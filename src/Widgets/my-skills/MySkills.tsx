

import { GrSystem } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";


import {TechCard} from "../../Shared/UI/TechCard.tsx";
import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";

function MySkills() {
    
    const {t} = useTranslation();
    return (
            <div
                
                className='w-full'>
                <div className=' text-[clamp(24px,3vw,40px)] w-full pl-[40px] font-extrabold text-right '>
                    <span className='text-[#c778dd]'># </span>
                    <h1
                        className='before:-bottom-[14px]  relative inline-block  before:absolute before:w-[70%] before:h-[7px] before:bg-[--line-color]'>
                        {t("skills.title")}</h1>
                </div>
                <div className='pt-[100px]  flex-wrap  justify-center flex gap-[40px] items-center'>
                    <TechCard image={<CgWebsite size={'40px'}/>} 
                              title="HTML & CSS" 
                              subtitle='Responsive websites with fast loading.'/>
                  <TechCard image={<GrSystem size={'40px'}/>} title="React.js & Vite" subtitle='Build your system with node.js.'/>
                    
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className='flex justify-center flex-wrap gap-[20px] pt-[40px] md:pt-[160px]'>

                    <motion.div
                        initial={{ opacity: 0 }} // Початковий стан
                        whileInView={{ opacity: 1, x: 0 }} // Стан після потрапляння у в'юпорт
                        transition={{ duration: 1 }} // Тривалість анімації
                        viewport={{ once: false }}
                        className="skills-info">
                        <div className=' h-full w-[4px] mr-[20px] bg-[gray]'></div>
                        <div>
                            <h3>{t("skills.exp")}</h3>
                            <ul>
                                <li>Git: version control, branching, merging, and conflict resolution</li>
                                <li>Docker, Postman</li>
                                <li>SCSS, Tailwind CSS</li>
                                <li>API integration</li>
                                <li>Performance optimization</li>
                                <li>Testing and debugging</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0,  }} // Початковий стан
                        whileInView={{ opacity: 1, }} // Стан після потрапляння у в'юпорт
                        transition={{ duration: 1 }} // Тривалість анімації
                        viewport={{ once: false }}
                        
                        className="skills-info">
                        <div className='h-full w-[2px] mr-[20px] bg-[gray]'></div>
                        <div>
                            <h3>{t("skills.years-exp")}</h3>
                            <ul>
                                <li>HTML, CSS (flex, grid layout)</li>
                                <li>TypeScript, React, Vite</li>
                                <li>JavaScript (ES6+)</li>
                                <li>Redux Toolkit, RTK Query</li>
                                <li>Responsive web design</li>
                                <li>Cross-browser compatibility</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0}} // Початковий стан
                        whileInView={{ opacity: 1, x: 0 }} // Стан після потрапляння у в'юпорт
                        transition={{ duration: 1 }} // Тривалість анімації
                        viewport={{ once: false }}
                        className="skills-info">
                        <div className='h-full w-[2px] mr-[20px] bg-[gray]'></div>
                        
                        <div>
                            <h3>{t("skills.study")}</h3>
                            <ul>
                                <li>UI/UX design principles</li>
                                <li>BEM, FSD (architecture)</li>
                            </ul>
                        </div>
                    </motion.div>

                </motion.div>


            </div>
    );
}

export default MySkills;