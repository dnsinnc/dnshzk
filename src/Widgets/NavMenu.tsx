import {useEffect, useState} from "react";
import {Link} from "react-scroll";
import { IoIosMoon } from "react-icons/io";

import { IoMdSunny } from "react-icons/io";

import {useTheme} from "../utils/hooks/useTheme.ts";


function NavMenu({activeSection}: {activeSection: string}) {
    const [active, setActive] = useState<string>('home')
    const [openBurger, setOpenBurger] = useState(false);
    const [theme, setTheme] = useTheme();


    const handleChangeDarkTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        console.log(theme)
    }

    useEffect(() => {
        setActive(activeSection)
        console.log(activeSection)
    },[activeSection])

    const navLinks = [
        { to: 'home', label:  'home'},
        { to: 'my-skills', label: 'my skills'},
        { to: 'about-me', label: "about me"},
        { to: 'projects', label: 'projects'},
        { to: 'contacts', label: 'contacts'},
    ];
    return (
        <div className='flex gap-[20px] items-center justify-center'>
            <div className='hidden md:flex  h-full items-center gap-8'>
                <div className=''>
                    <nav className='flex gap-[30px]  '>
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.to}
                                  smooth={true}
                                  duration={500} onClick={() => setActive(link.label)}
                                  className={`cursor-pointer lg:text-[16px] text-[12px]  ${link.label === active ? 'active' : " "}`}>{link.label}</Link>
                        ))}
                    </nav>
                </div>

            </div>

            <div onClick={handleChangeDarkTheme}
                 className='w-[40px] bg-gray-400 backdrop-blur  relative h-[20px] rounded-full shadow-2xl'>
                <div
                    className={` ${theme === 'dark' ? 'translate-x-[100%] text-gray-500' : 'translate-x-0 text-yellow-500'} flex items-center justify-center shadow-2xl absolute h-full duration-200 w-[20px] bg-white rounded-full`}>
                    {theme === 'dark' ? <IoIosMoon/> : <IoMdSunny/>}
                </div>

            </div>
            <div
                className='md:hidden relative  bg-white/10  backdrop-blur shadow-lg top-0  flex flex-end'>
                <div className='relative h-full right-[10px] items-center z-[100]   '>
                    <div onClick={() => setOpenBurger(!openBurger)} className={`menubg h-[15px]
                                ${openBurger ? ' after:rotate-[45deg] before:-top-[6px] before:-rotate-[45deg]   ' : ''}
                            `}>
                                <span className={` 
                                ${openBurger ? 'opacity-0' : ''}
                             w-[20px] rounded-[2px] absolute min-h-[3px] duration-200 bg-[--line-color]`}></span>
                    </div>
                </div>


                <div className={`${openBurger
                    ? "-translate-x-[80%]"
                    : "translate-x-[200%]"} duration-300 absolute z-40 flex rounded-bl-[10px]  bg-white/30  backdrop-blur-md shadow-lg left-[20px] py-[20px] w-[100px]  top-[37px] `}>

                    <nav className='flex justify-center flex-col  text-right px-[10px] gap-[20px]'>
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setActive(link.label)}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                                className={`${
                                    openBurger
                                        ? `translate-x-0 `
                                        : "translate-x-[200%]"
                                } cursor-pointer duration-500 lg:text-[16px] text-[12px] ${
                                    link.label === active ? "active" : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>


        </div>
    )
        ;
}

export default NavMenu;