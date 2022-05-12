import React, { useState } from 'react'
import bookmarkTab1 from 'assets/images/illustration-features-tab-1.svg';
import speedyTab2 from 'assets/images/illustration-features-tab-2.svg';
import sharingTab3 from 'assets/images/illustration-features-tab-3.svg';
import Image from 'next/image';

interface Props { }
interface TABProps {
    h1: string,
    img: string,
    p:string
}
const Features: React.FC<Props> = () => {
    const [currentTab, setCurrentTab] = useState(1);
    const tabs = [

        {
            h1: "BookMark in one click",
            img: bookmarkTab1,
            p:"organize you bookmarks however you like. Our simple drag-and-drop interface fives you complete control over how you manage your favorite sites."
        },
        {
            h1: "Intelligent Search",
            img: speedyTab2,
            p:"Our aim to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go."
        },
        {
            h1: "Share your bookmarks",
            img: sharingTab3,
            p:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        },
    ]
    const tab_Style = (tabNumber:number) => `border-b-2 hover:text-[#fa5757] w-11/12 sm:mb-0 mb-10 sm:w-[calc(100%/3)] pb-5 cursor-pointer ${currentTab === tabNumber ? 'border-[#fa5757] border-b-4' : undefined}`;
  return (
    <div className='w-full flex flex-col items-center text-center mb-40 lg:mb-0'>
        <div>
            <h1 className='text-4xl font-[500] text-[#252b46]'>Features</h1>
            <p className='md:w-[45%] w-11/12 my-10 mx-auto text-[#9194a1]'>Our aim to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <div className='my-10 lg:w-1/2 w-11/12 mx-auto'>
            <ul className='w-full flex sm:flex-row flex-col items-center justify-between'>
                <li onClick={() => setCurrentTab(1)} className={tab_Style(1)}>Simple Bookmarking</li>
                <li onClick={() => setCurrentTab(2)} className={tab_Style(2)}>Speedy Searching</li>
                <li onClick={() => setCurrentTab(3)} className={tab_Style(3)}>Easy Sharing</li>
            </ul>
        </div>
        <>
            {currentTab === 1 ? <Tab {...tabs[0]}/> : (currentTab === 2 ? <Tab {...tabs[1]}/> : <Tab {...tabs[2]}/>)}
        </>
    </div>
  )
}
const Tab: React.FC<TABProps> = ({h1, img, p}) => {

    return (
        <div className='w-full lg:h-[100vh] min-h-screen relative overflow-x-hidden flex lg:flex-row flex-col items-center justify-start lg:justify-center'>
            <div className='relative sm:w-[600px] w-[95%] h-[45vh] z-10 lg:top-[-15vh] sm:left-[1vw] mb-40 lg:mb-0'>
                <Image src={img} alt="speedy" layout="fill" priority className='object-contain' />
            </div>
            <div className='lg:w-[35vw] w-[90%] h-[30vh] bg-slate-600 rounded-r-full absolute lg:left-[-120px]  left-0 z-0 top-[20vh] lg:top-[auto]'></div>
            <div className='lg:w-[40%] w-11/12 text-center lg:mb-40 lg:ml-40 ml-0 mb-0 lg:text-left '>
                <h1 className='sm:text-4xl text-2xl font-[500]  capitalize text-[#252b46]'>{h1}</h1>
                <p className='sm:text-xl sm:w-[70%] ms:my-10 my-5 text-[#9194a1] mx-auto lg:mx-0'>{p}</p>
                <button className='bg-[#5368df] text-white w-[120px] h-[45px] rounded-md font-[500] shadow-lg'>More Info</button>
            </div>
        </div>
    )
};

export default Features
