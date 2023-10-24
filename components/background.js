import Image from 'next/image';

const Background = () => {
    return (
        <div className="absolute">
            <div className="bg-[#1E1E2EE5] w-screen h-[420px] z-0"></div>
            <div className=" bg-[#1E1E2EE5] opacity-99 w-screen h-screen z-0 absolute"></div>
            <p className='w-[0px] h-[0px] mx-auto'>
            <Image
            src="/BGlogoL.png"
            alt="Coinsfill logo"
            className="absolute top-[19px] translate-x-[-190px]"
            width={43}
            height={68}
            priority
            />
            </p>
            

            <p className='w-[358px] h-[0px] mx-auto'>
            <Image
            src="/BGlogoL.png"
            alt="Coinsfill logo"
            className="absolute w-[358px] h-[538px]  text-center top-[77px] text-white"
            width={358}
            height={538}
            priority
            /> 
            {/* top-[77px] */}
            </p>
            
            <p className=''>
            <Image
                src="/BGdevice.png"
                alt="Coinsfill logo"
                className="mx-auto w-screen h-[400px] max-w-[500px]"
                width={400}
                height={400}
                priority
            />
            </p>
                   
            
            
        </div>
        
    );
};

export default Background;