import Image from 'next/image';
import Link from 'next/link';

const Footernav = () => {
    return (
        <div className="flex  bg-gradient-to-b from-transparent to-[#E5F1FB] shadow-[0_-5px_20px_0px_rgba(0,0,0,0.1)] rounded-[10px_10px_0px_0px] w-full h-[80px] place-items-center">
            <a href="./" className="w-1/4 pl-[40px] pr-[20px] ">
                <p >
                <Image
                src="/HOME.svg"
                alt="home icon"
                className="m-[10px] justify-center"
                width={26}
                height={24}
                priority
                />
                HOME
                </p>
            </a>
            
            <p className="w-1/4 px-[20px]">
                <Image
                src="/CARD.svg"
                alt="card image"
                className="m-[10px]"
                width={26}
                height={24}
                priority
                />
                CARD
            </p>
            <p className="w-1/4 px-[20px]">
                <Image
                src="/ARROW.svg"
                alt="arrow to left"
                className="m-[10px]"
                width={26}
                height={24}
                priority
                />
                TRANSFERS
            </p>
            <p className="w-1/4 pr-[20px] pl-[20px">
                <Image
                src="/CARDS.svg"
                alt="cards iamges"
                className="m-[10px]"
                width={26}
                height={24}
                priority
                />
                FUNDRAISING
            </p>
        </div>
    );
};

export default Footernav;