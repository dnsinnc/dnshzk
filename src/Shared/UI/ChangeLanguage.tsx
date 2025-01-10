import { useState} from "react";
import uk from './images/uaFlag.png'
import en from "./images/enFlag.png"
import pl from "./images/plFlag.png"
import i18n from "i18next";
import { BsCaretDownFill } from "react-icons/bs";






const ChangeLanguage = () => {
    const currentLanguage = i18n.language;
    const defaultLang  = () => {
        switch (currentLanguage) {
            case 'en':
                return en;
            case 'uk':
                return uk;
            case 'pl':
                return pl;

        }
    }

    const [selectedLanguage, setSelectedLanguage] = useState(defaultLang); // значенгня за змовчуванням (англ мова)
    const [openMenu, setOpenMenu] = useState(false);





  


    // Можна дописати нову мову, писати в такому ж форматі.

        const languageData = [
            {flag: uk, tag: 'uk'},
            {flag: en, tag: 'en'},
            {flag: pl, tag: 'pl'},
        ]







        // функція для зміни мови
        const selectLang = (lang: any) => {
            setSelectedLanguage(lang.flag)
            setOpenMenu(false)
            i18n.changeLanguage(lang.tag);
        }
        
        const hui = () =>{
            setOpenMenu(!openMenu)
            console.log(openMenu)
        }
        
    


        return (
            <div className={`${openMenu ? "h-[100px]" : 'h-[22px]' } w-full overflow-hidden right-0 duration-300  relative flex items-end flex-col  `}>
                
                    <div className='w-full '  onClick={hui}
                    >
                        <div  className={`w-full flex items-center gap-[8px] `}>
                            <img alt={selectedLanguage} className='w-[40px]   h-[22px] rounded-[5px]'
                                 src={selectedLanguage}/>
                          <div className={` ${openMenu ? 'rotate-180': 'rotate-0'} absolute right-0 duration-150`}>
                              <BsCaretDownFill />
                          </div>
                        </div>
                    </div>
                    <div className='flex absolute left-0 top-[30px] flex-col gap-[10px]  '>
                        {
                            languageData.filter((lang) => lang.flag !== selectedLanguage).map((lang, i) => (
                                <div  key={i} onClick={() => selectLang(lang)}
                                     className={`cursor-pointer ${openMenu ? 'opacity-100' : 'opacity-0' } duration-300`}>
                                        <img alt={lang.flag} className='w-[40px] h-[22px] duration-150 hover:scale-110 rounded-[5px]'
                                             src={lang.flag}/>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
        );
}

export default ChangeLanguage;