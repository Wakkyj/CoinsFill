import Header from "@/components/header";
import Footernav from "@/components/footernav";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="flex items-center justify-start flex-wrap flex-col">
        <p>Главная / Найстройки аккаунта / Загрузка аватара</p>
        <h2 className="font-bold text-[26px] justify-start">Загрузка аватара</h2>
        <p>
          Загрузите файл размером до 5Мб<br />По формату: JPG, PNG, GIF
        </p>
          <button className=" text-white w-[375px] h-[65px] rounded-full bg-gradient-to-tl from-[#686DE0] to-[#4834D4] mb-[176px] mb-[220px] mt-[43px]">
            <div className="mx-[97px] flex justify-center">  
              <Image
                  src="/DOWLAND.svg"
                  alt="Search"
                  className="m-[6px]"
                  width={15}
                  height={18}
                  priority
              />
                Выбрать файл
              </div>
          </button>
          
          
      </div>
      <Footernav />
  </main>
  )
}
