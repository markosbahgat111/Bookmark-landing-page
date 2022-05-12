import React from 'react'
import styles from './styles.module.scss';

interface Props {}

const FAQ:React.FC<Props> = () => {
  return (
    <div className='md:w-[700px] w-11/12 mx-auto my-40 flex flex-col items-center'>
        <div className='mb-10'>
            <h1 className='text-4xl font-[500] text-[#252b46] text-center'>Frequently Asked questions</h1>
            <p className='sm:w-3/4 my-5 mx-auto text-[#9194a1] text-center'>Here are some of our FAQs. if you have any other questions you&apos;d like answered please feel free to email us.</p>
        </div>
         <details className={styles.details}>
                <summary>What is Bookmark?
                  <i className="fa-solid fa-angle-up" id={styles.minus}></i>
                  <i className="fa-solid fa-angle-down" id={styles.plus}></i>
                </summary>
                <p>
                  Studies Mechanical Engineering at Suez Canal University | Forth Level of Mechanical Departement - (Still in University)
                </p>
            </details>
          

            <details className={styles.details} open>
                <summary>How can i request new browser
                    <i className="fa-solid fa-angle-up" id={styles.minus}></i>
                    <i className="fa-solid fa-angle-down" id={styles.plus}></i>
                </summary>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde officiis quo, quibusdam omnis tenetur expedita eveniet quidem natus enim. Nam et quos, quaerat repudiandae architecto distinctio maxime? Aperiam, sapiente odio.
                </p>
            </details>
          

            <details className={styles.details}>
                <summary>Is there a mobile app
                  <i className="fa-solid fa-angle-up" id={styles.minus}></i>
                  <i className="fa-solid fa-angle-down" id={styles.plus}></i>
                </summary>
                <p>
                  Fixing any issues in the website of TedX and help all members with any Tech problems.
                </p>
            </details>
            
          
            <details className={styles.details}>
                <summary>What about other Chromium browsers?
                  <i className="fa-solid fa-angle-up" id={styles.minus}></i>
                  <i className="fa-solid fa-angle-down" id={styles.plus}></i>
                </summary>
                <p>
                  Fixing any issues in the website of TedX and help all members with any Tech problems.
                </p>
            </details>
            <button className='w-[130px] h-[50px] bg-[#5368df] text-white rounded-md font-[400] text-lg mt-10'>More Info</button>
    </div>
  )
}

export default FAQ
