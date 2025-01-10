import LHDahs from './dashboards/lhdash.png'
import visioncap from './dashboards/visioncap.png'
import ecomm from './dashboards/ecommerce.png'
import portf from './dashboards/portf.png'

import {Link} from "react-router-dom";
import { motion } from 'framer-motion';
import {useTranslation} from "react-i18next";
const Projects = () => {
    const {t} = useTranslation();


    const projects = [
        {
            title: "Leave Hosting",
            description: t("projects.description.LH"),
            technologies: ["React", "Tailwind CSS"],
            liveDemo: "https://leavehosting.com/",
            github: null, 
            image: LHDahs,
            type: "commercial",
        },
      
        {
            title: "Ecommerce",
            description: t("projects.description.ecomm"),
            technologies: ["React", "Redux Toolkit","FakeApi", "FireBase", "TypeScript", "Tailwind CSS"],
            liveDemo: "https://dnsinnc.github.io/market/",
            github: "https://github.com/dnsinnc/market",
            image: ecomm,
            type: "personal",
        },
        {
            title: "Portfolio",
            description: t("projects.description.portfolio"),
            technologies: ["React","TypeScript", "Tailwind CSS"],
            liveDemo: "/",
            github: null,
            image: portf,
            type: "personal",
        },
        {
            title: "Vision Capital",
            description: t("projects.description.vis-cap"),
            technologies: ["HTML/CSS","JavaScript", "Tailwind CSS"],
            liveDemo: "https://dnsinnc.github.io/vision-capital/",
            github: "https://github.com/dnsinnc/vision-capital",
            image: visioncap,
            type: "personal",
        },

       
        
        
    ];



    return (
        <div className="w-full  ">
            <div className='text-[clamp(24px,3vw,40px)]  font-extrabold text-right '>
                <span className='text-[#c778dd]'># </span>
                <h2 className=' before:-bottom-[14px]  relative inline-block  before:absolute before:w-[70%] before:h-[7px] before:bg-[--line-color]'>
                    {t("projects.titles.title")}</h2>
            </div>
            <div className='pt-[120px]  '>
                <h2 className='text-[clamp(20px,3vw,26px)] font-bold text-center'>{t("projects.titles.personal")}</h2>
                <motion.div
                   
                    className='flex gap-[50px] pt-[30px] flex-wrap justify-center'>
                    {projects.filter(proj => proj.type === "personal").map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0,}} // Початковий стан
                            whileInView={{ opacity: 1, x: 0 }} // Стан після потрапляння у в'юпорт
                            transition={{ duration: 0.4 * index  }} // Тривалість анімації
                            className="max-w-[500px] bg-white/10 flex flex-col justify-between backdrop-blur shadow-lg rounded-lg p-4 ">
                            <div>
                                <div className='flex items-center h-[270px] '>
                                    <img src={project.image} alt="Project Screenshot"
                                         className="rounded-md w-[full] h-[]"/>
                                </div>
                                <h3 className="text-xl font-semibold  mt-2">{project.title}</h3>
                                <p className="font-firaCode text-[clamp(12px,3vw,16px)] text-[gray] mt-2">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.technologies.map(tech => (
                                    <span className="tech-badge">{tech}</span>
                                ))}

                            </div>
                            <div className="mt-4 flex justify-between">
                            <Link target="_blank" className="btn-live-demo" to={project.liveDemo}>{t('projects.liveDemo')}</Link>
                                {project.github ?
                                    <Link target="_blank" to={project.github} className="hover:text-white btn-github hover:bg-gray-800">GitHub</Link> :
                                    <div className="btn-github cursor-pointer opacity-20">GitHub</div>}
                            </div>
                        </motion.div>
                    ))}

                </motion.div>

                <h2 className='text-[clamp(20px,3vw,26px)] font-bold pt-[100px] text-center'>{t("projects.titles.comm")}</h2>
                <motion.div
                   
                    className='flex justify-center flex-wrap gap-[50px] pt-[30px]'>
                    {projects.filter(proj => proj.type === "commercial").map((project,index) => (
                        
                        <motion.div
                            initial={{ opacity: 0,}} // Початковий стан
                            whileInView={{ opacity: 1, x: 0 }} // Стан після потрапляння у в'юпорт
                            transition={{ duration: 0.2 * index  }} // Тривалість анімації
                         className="max-w-[500px] bg-white/10  backdrop-blur shadow-lg rounded-lg p-4 ">

                            <div>
                                <div className='flex items-center h-[270px] '>
                                    <img src={project.image} alt="Project Screenshot"
                                         className="rounded-md w-[full] h-[]"/>
                                </div>
                                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                                <p className="font-firaCode text-[clamp(12px,3vw,16px)] text-[gray] mt-2">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.technologies.map(tech => (
                                    <span className="tech-badge">{tech}</span>
                                ))}

                            </div>
                            <div className="mt-4 flex justify-between">
                                <Link target="_blank" className="btn-live-demo" to={project.liveDemo}>{t('projects.liveDemo')}</Link>
                                {project.github ?
                                    <Link target="_blank" to={project.github}
                                          className="btn-github hover:text-white hover:bg-gray-800">GitHub</Link> :
                                    <div className="btn-github  cursor-pointer opacity-20">GitHub</div>}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </div>
    );
};

export default Projects;