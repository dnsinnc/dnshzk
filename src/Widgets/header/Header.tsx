import NavMenu from "../NavMenu.tsx";

const Header = ({activeSection}:{activeSection: string}) => {
    return (
        <header className='header'>
            <div className='container items-center h-full flex justify-between'>
                <div
                    className='text-[clamp(24px,3vw,30px)] font-extrabold '>
                    <h1 className='font-extrabold'>dnshzk.</h1>
                </div>
                <div>
                    <NavMenu activeSection={activeSection}></NavMenu>
                </div>
            </div>
        </header>
    );
};

export default Header;