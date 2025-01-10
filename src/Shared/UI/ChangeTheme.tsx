import {IoIosMoon, IoMdSunny} from "react-icons/io";
import {useTheme} from "../../utils/hooks/useTheme.ts";


const ChangeTheme = () => {

    const [theme, setTheme] = useTheme();
    const handleChangeDarkTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }


    return (
        <div onClick={handleChangeDarkTheme}
             className='w-[40px] bg-gray-400 backdrop-blur  relative h-[20px] rounded-full shadow-2xl'>
            <div
                
                className={` ${theme === 'dark' ? 'translate-x-[100%] text-gray-500' : 'translate-x-0 text-yellow-500'} 
                    flex items-center justify-center shadow-2xl absolute h-full duration-200 w-[20px] bg-white rounded-full`}>
                {theme === 'dark' ? <IoIosMoon/> : <IoMdSunny/>}
            </div>

        </div>
    );
};

export default ChangeTheme;