import { useRef, useState } from 'react';
import {motion} from 'framer-motion'

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

import landingPageVideo from '../assets/videos/landing-page-video.mp4';
import shoe1 from '../assets/images/1.png';
import shoe2 from '../assets/images/2.png';
import shoe3 from '../assets/images/3.png';
import shoe4 from '../assets/images/4.png';
import shoe5 from '../assets/images/5.png';

function Home() {

  return (
    <>
      <TopBar></TopBar>

      <section id="Video" className='py-8 px-24'>
        <video src={landingPageVideo} autoPlay={true} muted loop className='rounded-xl'></video>
      </section>

      <motion.section id='Slogan' className='my-8 h-56 rounded-xl flex  flex-col items-center justify-center '
        initial = {{
          y: -80,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          amount: .1
        }}
        transition={{
          type: 'tween',
          duration: .5
        }}
        >
        <div className='text-7xl mb-6'>
          We Craft Fashion
        </div>
        <div className='text-2xl'>
          with a handcrafted touch
        </div>
      </motion.section>
      
      <motion.section id='Shoes'
        className='w-full m-auto my-12 h-96 rounded-xl flex flex-row items-center justify-center'
        initial={{
          scale: 0.8,
          opacity: 0
        }}
        whileInView={{
          scale: 1,
          opacity: 1
        }}
        viewport={{
          amount: .1
        }}
        transition={{
          duration: .5
        }}
        >
        {
          [
            {id: 1, image: shoe1, backgroundPosX: "10%"}, 
            {id: 2, image: shoe2, backgroundPosX: "35%"}, 
            {id: 3, image: shoe3, backgroundPosX: "50%"}, 
            {id: 4, image: shoe4, backgroundPosX: "75%"}, 
            {id: 5, image: shoe5, backgroundPosX: "100%"}
          ].map((item)=>{return <motion.div key={item.id} className='w-24 rounded-xl mx-[0.6rem] h-96 shadow-md'
          initial={{
            scale: 0.9,
            width: '6rem'
          }}
          whileHover={{
            scale: 1,
            width: '36rem',
            backgroundSize: "cover"
          }}
          transition={{duration: 1, ease: "easeInOut"}} 
          style={{ backgroundImage:`url(${item.image})`, backgroundSize: "cover", backgroundPositionX: `${item.backgroundPosX}`  }} />})
        }
      </motion.section>

      <Footer></Footer>
    </>
  )
}

export default Home
