import NavMenu from "../NavMenu.tsx";
import ChangeTheme from "../../Shared/UI/ChangeTheme.tsx";
import ChangeLanguage from "../../Shared/UI/ChangeLanguage.tsx";
import { IoMdSettings } from "react-icons/io";
import {useEffect, useRef, useState} from "react";
import i18n from "i18next";

const Header = ({activeSection}:{activeSection: string}) => {
    const [openSettings, setOpenSettings] = useState<boolean>(false);
    const currentLanguage = i18n.language;

    useEffect(() => {
        setOpenSettings(false)
        
    }, [currentLanguage]);

    const settingRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (settingRef.current && !settingRef.current.contains(event.target as Node)) {
            setOpenSettings(false);
        }
    };
    
   
    return (
        <header  className='header'>
            <div className='container  items-center h-full flex justify-between'>
                <div
                    className='text-[clamp(24px,3vw,30px)] font-extrabold '>
                    <h1 className='font-extrabold'>dnshzk.</h1>
                </div>
                    <div   className='relative flex items-center h-[24px] '>

                        <NavMenu activeSection={activeSection}></NavMenu>
                        {/*@ts-ignore*/}
                            <div ref={settingRef} onClick={(e)=> handleClickOutside(e)}
                                className={`duration-[500ms] absolute top-0 right-[30px] md:-right-[70px] 
                                ${openSettings ? " h-[200px]" : 'h-[24px]'} flex flex-col items-center ] overflow-hidden`}>
                                <div className='-translate-x-[40%]' onClick={() => setOpenSettings(!openSettings)}>
                                    <IoMdSettings size={'24px'}/>
                                </div>
                                <div className='flex w-[60px] flex-col pt-[20px] gap-[10px] items-start justify-center'>
                                    <ChangeTheme/>

                                    <ChangeLanguage/>
                                </div>
                            </div>
                    </div>
            </div>
        </header>
    );
};

export default Header;