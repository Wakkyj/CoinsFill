import Image from 'next/image';
import Background from "@/components/background";

export default function Home() {
  return (
    <main >
      <Background />
       <div className="flex items-center justify-center flex-wrap flex-col pt-[47px]">
        <div className='bg-gradient-to-b from-[#4936D4] to-[#6835D4] rounded-[35px] opacity-70 w-[375px] h-[594px] absolute z-0'></div>
        <form className="w-[375px] h-[594px] text-white flex flex-wrap table-column text-center z-2 opacity-90">
                <h2 className="mt-[61px] mb-[53px] text-[26px]">
                Логин</h2>
                <p className="text-[14px] text-left ml-[45px]">
                  Ваш телефон</p>

                <div className="flex flex-auto w-[300px] h-[47px] mt-[9px] mb-[22px] bg-white rounded-[22.5px] ml-[40px]">
                  <Image
                  src="/TELEPHONE.svg"
                  alt="telephone img"
                  className="mx-[20px]"
                  width={18}
                  height={18}
                  priority
                  />
                  <input type="tel" id="tel" value="+7 961 825 70 55" className='text-black '></input>
                </div>
            
                <p className="text-[14px] text-left ml-[45px]">
                  Пароль</p>

                <div className="flex flex-auto w-[300px] h-[47px] mt-[9px] mb-[24px] bg-white rounded-[22.5px] ml-[40px]">
                  <Image
                  src="/LOCK.svg"
                  alt="telephone img"
                  className="mx-[20px]"
                  width={18}
                  height={18}
                  priority
                  />
                  <input type="password" id="password" value="********" className='text-black w-[150px]'></input>
                  <Image
                  src="/EYE.svg"
                  alt="telephone img"
                  className="relative left-14"
                  width={18}
                  height={18}
                  priority
                  />
                </div>

                <p className='text-[#86BFEB] text-[12px] font-medium underline text-left ml-[45px] '>
                  Забыли пароль?</p>
                <div className="flex flex-nowarp ml-[40px] mr-[66px] text-[12px] text-left mt-[27px]">
                  <input type="checkbox" id="agreement" className="mr-[18px]"></input>
                  <p>
                    Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с Условиями Соглашения! Правилами и политикой конфиденциальности компании
                  </p>
                </div>
                <a href="./dowland">
                  <button className="text-white w-[319px] h-[62px] rounded-full shadow-xl bg-gradient-to-tl from-[#FFC543] to-[#FF8412] mt-[26px]">
                    Войти
                  </button>
                </a>
        </form>
      </div> 
      
  </main>
  )
}