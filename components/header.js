import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex mt-[18px] justify-center">
      <div className="flex items-center">
        <Image
          src="/LOGO.png"
          alt="Coinsfill logo"
          className="dark:invert mr-[9px]"
          width={30}
          height={47}
          priority
        />
        <p className="">СoinsFill</p>
      </div>

      <div className="flex">
        <Image
          src="/LOUPE.svg"
          alt="Search"
          className="dark:invert ml-[216px] mr-[16px]"
          width={17}
          height={17}
          priority
        />
        <a href="./dowland" className="flex">
            <Image
            src="/ICON.svg"
            alt="Icon of person"
            className="dark:invert"
            width={24}
            height={24}
            priority
            />
        </a>
        
      </div>
    </div>
  );
};

export default Header;