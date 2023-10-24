import Header from "@/components/header";
import Footernav from "@/components/footernav";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="flex items-center justify-center flex-wrap flex-col">
        <h2 className="block font-montserrat text-2xl leading-normal mt-[58px]">
          Выберите действие
        </h2> 
        <a href="./login">
          <button className="text-white w-[375px] h-[65px] rounded-full shadow-xl bg-gradient-to-tl from-[#FFC543] to-[#FF8412] mb-[20px] mt-[84px]">
            Login
          </button>
        </a>
        
        <a href="./registration">
          <button className="text-white w-[375px] h-[65px] rounded-full bg-gradient-to-tl from-[#686DE0] to-[#4834D4] mb-[176px]">
            Registration
          </button>
        </a>
      </div>
      <Footernav />
  </main>
  )
}
