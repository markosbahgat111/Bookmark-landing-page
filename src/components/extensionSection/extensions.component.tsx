import Image from 'next/image'
import React from 'react'
import chrome from 'assets/images/logo-chrome.svg';
import firefox from 'assets/images/logo-firefox.svg';
import opera from 'assets/images/logo-opera.svg';

interface Props {}

const Extensions: React.FC<Props> = () => {
    const div_styles = "h-[400px] shadow-xl rounded-2xl flex flex-col items-center justify-between py-14 px-8",
        nested_section_styles = "flex flex-col items-center",
        h1_styles = "text-2xl text-[#252b46] font-[500] mt-10",
        span_styles = "text-[#9194a1] text-sm",
        button_styles = "text-white font-[500] w-full h-[50px] bg-[#5368df] hover:text-[#5368df] border-[#5368df] rounded-md hover:bg-transparent hover:border-2 hover:shadow-sm hover:shadow-[#5368df]";
  return (
    <div className='w-full flex flex-col items-center justify-between  mb-40'>
        <section>
            <h1 className='sm:text-4xl text-2xl font-[500] text-[#252b46] text-center'>Download the extension</h1>
            <p className='sm:w-[45%] w-11/12 my-5 mx-auto text-[#9194a1] text-center'>We&apos;ve got more browsers in the pipeline. Please do let us know if you&apos;ve got a favorite you&apos;d like us to prioritize.</p>
        </section>
        <section className='lg:w-[1000px] w-[300px] grid grid-cols-sectionOne gap-10 items-center justify-between my-16 lg:my-0'>
            <div className={`${div_styles}`}>
                <section className={nested_section_styles}>
                    <Image src={chrome} alt="chrome" width={70} height={70}/>
                    <h1 className={h1_styles}>Add to Chrome</h1>
                    <span className={span_styles}>Minimum Version 6.2.4</span>
                </section>
                <button className={button_styles}>Add & Install Extension</button>
            </div>
            <div className={`lg:mt-20 ${div_styles}`}>
                <section className={nested_section_styles}>
                    <Image src={firefox} alt="firefox" width={70} height={70}/>
                    <h1 className={h1_styles}>Add to FireFox</h1>
                    <span  className={span_styles}>Minimum Version 6.2</span>
                </section>
                <button className={button_styles}>Add & Install Extension</button>
            </div>
            <div className={`lg:mt-40 ${div_styles}`}>
                <section className={nested_section_styles}>
                    <Image src={opera} alt="opera" width={70} height={70}/>
                    <h1 className={h1_styles}>Add to Opera</h1>
                    <span className={span_styles}>Minimum Version 4.2.4</span>
                </section>
                <button className={button_styles}>Add & Install Extension</button>
            </div>
        </section>
    </div>
  )
}

export default Extensions
