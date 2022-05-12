import Image from 'next/image';
import React from 'react'
import tabIcon from 'assets/images/illustration-hero.svg';

interface Props {}

const Header:React.FC<Props> = () => {
  return (
    <div className='w-full min-h-[100vh] relative overflow-x-hidden flex lg:flex-row flex-col-reverse items-center lg:justify-around justify-end'>
        <div className='lg:w-1/2 w-11/12 mb-40 lg:ml-28  ml-0 md:text-left text-center'>
            <h1 className='sm:text-6xl text-3xl font-[500]  capitalize text-[#252b46]'>A simple Bookmark <br/> manager</h1>
            <p className='sm:text-xl sm:w-[70%] my-10 text-[#9194a1] mx-auto md:mx-0'>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <section className='sm:w-fit flex items-center sm:flex-row flex-col sm:gap-10 gap-5 mx-auto md:mx-0'>
                <button className='bg-[#5368df] hover:bg-transparent hover:border-2 hover:text-[#5368df] hover:shadow-[#5368df] border-[#5368df] text-white sm:w-[180px] w-full h-[50px] rounded-md font-[500] shadow-lg hover:shadow-sm'>Get it on Chrome</button>
                <button className='bg-gray-100 hover:bg-transparent hover:border-2 border-[#252b46] text-[#252b46] sm:w-[180px] w-full h-[50px] rounded-md font-[500] hover:shadow-sm shadow-md hover:shadow-[#252b46]'>Get it on FireFox</button>
            </section>
        </div>
        <div className='relative lg:w-[600px] w-[100%] h-[45vh] z-10 lg:top-[-10vh] mb-20 lg:right-[2vw]'><Image src={tabIcon} alt="icon" layout="fill" priority className='object-contain'/></div>
        <div className='lg:w-[35vw] w-[100%] h-[30vh] bg-[#5368df] rounded-l-full absolute lg:top-[auto] top-[15vh] right-[-20%] lg:right-[-120px] z-0'></div>
    </div>
  )
}

export default Header;
