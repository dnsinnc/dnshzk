

type Props = {
    title: string;
    subtitle: string;
    image: React.ReactNode;
};
export const TechCard = ({title, subtitle, image}: Props) => {
    return (
        <div
            className='techCard'>
            <div className='line-color'>
                {image}
            </div>
            <div className='h-[100%] min-w-[2px] bg-[grey]'></div>
            <div>
                <p className='font-bold text-[clamp(12px,3vw,16px)]'>{title}</p>
                <p className='font-firaCode text-[gray] text-[clamp(8px,3vw,12px)]'>{subtitle}</p>
            </div>

        </div>
    );
};