import Image from 'next/image'
import React from 'react'
import logo from 'assets/images/logo-bookmark.svg';

interface Props {}

const Footer:React.FC<Props> = () => {
  return (
    <>
        <section className='w-full min-h-[40vh] py-10 sm:py-0 bg-[#5368df] flex flex-col items-center justify-center gap-10'>
            <span className='sm:tracking-[8px] text-white font-[400]'>35,000+ ALREADY JOINED</span>
            <h2 className='sm:text-4xl text-2xl text-center font-[500] text-white'>Stay up-to-date with what<br/> we&apos;re doing</h2>
            <form className='w-11/12 sm:w-[auto] flex sm:flex-row flex-col items-center sm:gap-10 gap-5'>
                <input placeholder='Enter your email address...' className='sm:w-[300px] w-full h-[50px] rounded-md pl-3 outline-none focus:border-2 border-[#fa5757]'/>
                <button className='text-white bg-[#fa5757] h-[50px] w-full sm:w-[125px] rounded-md hover:bg-white hover: border-2 border-[#fa5757] hover:text-[#fa5757]'>Contact Us</button>
            </form>
        </section>
        <section className='w-full min-h-[80px] py-10 md:py-0 flex md:flex-row flex-col items-center justify-between lg:px-40 px-10 bg-[#252b46]'>
            <div className='flex md:flex-row flex-col items-center gap-10'>
                <Image src={logo} alt="logo" className='invert'/>
                <ul className='flex md:flex-row flex-col items-center md:gap-14 gap-5 uppercase text-[#9194a1]'>
                    <li className="hover:text-[#fa5757] cursor-pointer">Features</li>
                    <li className="hover:text-[#fa5757] cursor-pointer">Pricing</li>
                    <li className="hover:text-[#fa5757] cursor-pointer">Contact</li>
                </ul>
            </div>
            <ul className='flex flex-row items-center text-white gap-10 mt-10 md:mt-0'>
                <li><i className="fa-brands fa-facebook-square fa-2xl hover:text-[#fa5757] cursor-pointer"></i></li>
                <li><i className="fa-brands fa-twitter fa-2xl hover:text-[#fa5757] cursor-pointer"></i></li>
            </ul>
        </section>
    </>
  )
}

export default Footer
