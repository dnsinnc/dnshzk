import {useEffect, useRef, useState} from "react";

// @ts-ignore
import {Link} from "react-scroll";


import {useTranslation} from "react-i18next";



function NavMenu({activeSection}: {activeSection: string}) {
    
    const {t} = useTranslation();
    
    const [active, setActive] = useState<string>('home')
    const [openBurger, setOpenBurger] = useState(false);
 
    const menuRef = useRef<HTMLDivElement | null>(null)
    
    const navLinks = [
        { to: 'home', label:  t("navmenu.home")},
        { to: 'my-skills', label: t("navmenu.my-skills")},
        { to: 'about-me', label: t("navmenu.about-me")},
        { to: 'projects', label: t("navmenu.projects")},
        { to: 'contacts', label: t("navmenu.contacts")},
    ];




 
    const toggleOpenMenu  = () =>{
        setOpenBurger((prev) => !prev);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpenBurger(false);
        }
    };


    
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        setTimeout(()=> {
            setOpenBurger(false);
        }, 600)
    }, [active]);

    
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (activeSection !== active) {
                setActive(activeSection);
            }
        }, 600);

        return () => clearTimeout(timeout);
    },[activeSection, active])
    
    

   
    return (
        // @ts-ignore
        <div onClick={(e)=> handleClickOutside(e)} className='flex  gap-[20px]  justify-center'>
            <div className='hidden md:flex  h-full items-center gap-8'>
                <div className=''>
                    <nav className='flex gap-[30px]  '>
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.to}
                                  smooth={true}
                                  duration={500} onClick={() => setActive(link.to)}
                                  className={`cursor-pointer lg:text-[16px] text-[12px]  ${link.to === active ? 'active' : " "}`}>{link.label}</Link>
                        ))}
                    </nav>
                </div>

            </div>
            
            
          
                
            
         
            <div ref={menuRef} 
                className='md:hidden relative  bg-white/10  backdrop-blur shadow-lg top-0  flex flex-end'>
                <div className='relative h-full right-[10px] items-center z-[100]   '>
                    <div onClick={toggleOpenMenu} className={`menubg h-[15px]
                                ${openBurger ? ' after:rotate-[45deg] before:-top-[6px] before:-rotate-[45deg]   ' : ''}
                            `}>
                                <span className={` 
                                ${openBurger ? 'opacity-0' : ''}
                             w-[20px] rounded-[2px] absolute min-h-[3px] duration-200 bg-[--line-color]`}></span>
                    </div>
                </div>


                <div className={`${openBurger
                    ? "-translate-x-[80%]"
                    : "translate-x-[200%]"} duration-300 absolute z-40 flex rounded-bl-[10px]  bg-white/30  
                    backdrop-blur-md shadow-lg left-[20px] py-[20px] w-[120px] justify-center top-[37px] `}>

                    <nav className='flex justify-center flex-col  text-right items-center gap-[20px]'>
                        {navLinks.map((link, index) => (
                            <Link
                                
                                key={index}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setActive(link.to)}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                                className={`${
                                    openBurger
                                        ? `translate-x-0 `
                                        : "translate-x-[200%]"
                                } cursor-pointer duration-500 lg:text-[16px] text-[12px] ${
                                    link.to === active ? "active" : ""
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