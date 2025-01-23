import { FaInstagram } from "react-icons/fa";

import { IoLogoGithub } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import {Link} from "react-router-dom";
import {ReactNode, useState} from "react";

import { FaCopy } from "react-icons/fa6";
import {useTranslation} from "react-i18next";



const Contacts = () => {
    const [copy, setCopy] = useState(false);
    const {t} = useTranslation();

    const copyTextToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopy(true);
        } catch (err) {
            console.error('error:', err);
        }

        setTimeout(() => setCopy(false), 1000);
        
    };
    
    interface Contact{
        icon: ReactNode;
        link: string | null;
        copy?: string | undefined;
    }
    
    
    
    const MyContacts: Contact[] = [
        {icon: <FaInstagram size={'40px'}/>, link:"https://www.instagram.com/dnsinnc/"},
        {icon: <IoLogoGithub size={'40px'}/>, link:"https://github.com/dnsinnc"},
        {icon: <FaTelegramPlane size={'40px'}/>, link:"https://t.me/vaguelette0" },
        {icon: <FaDiscord size={'40px'}/>, link:null, copy: 'bud_painkoi'},

        {icon: <SiGmail size={'40px'}/>, link:null, copy: 'denishuziuk@gmail.com'},
        
    ]
    
    
    return (
        <div className='w-full'>

           
            <div className='text-[clamp(24px,3vw,40px)]  font-extrabold text-center'>
                <span className='gradientViolet'># </span>
                <h2 className=' before:-bottom-[14px]  relative inline-block  before:absolute before:w-[70%] before:h-[7px] before:bg-[--line-color]'>
                    {t("contacts.title")}</h2>
            </div>
            <div className='flex justify-center flex-wrap pt-[100px] gap-[40px] md:gap-[80px] px-[20px]'>
                {MyContacts.map((item, index) => (
                    <>
                        {item.link ? <Link target='_blank' className='hover:text-[#b670ca] duration-150' key={index} to={item.link}>{item.icon}</Link> :
                            <div className='relative cursor-pointer'>
                                <div  onClick={() => copyTextToClipboard(item.copy ? item.copy : '')} className='relative card-not-copy hover:text-[#b670ca] duration-150' key={index}> {item.icon}</div>
                                <div
                                  onClick={() => copyTextToClipboard(item.copy ? item.copy : '')}  className='text-[12px]  contact-card duration-150'>{copy ? 'Copied!' : 
                                    <span className='text-ellipsis  overflow-hidden flex items-center gap-[3px]'>{item.copy} <FaCopy size='10px'/>  </span>}
                                </div>
                            </div>
                        }
                       
                    </>
                ))}
            </div>
        </div>
    );
};

export default Contacts;