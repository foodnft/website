import React from 'react'

import chicken from '../images/chicken.svg'
import mail from '../images/mail.svg'
import telegram from '../images/telegram.svg'
import bglayer from '../images/bglayer.svg'

import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

const YourNft = () => {
  return (
    <div className='min-h-[100vh] overflow-x-hidden  '>
    <div className='relative '>
        <Header/>
        <div className='relative z-0 bg-[#F9DC5C] p-2 h-[1000px]'>
            <img src={bglayer} className='w-[100%] absolute top-0 bottom-0 z-[-1] '></img>
            <h1 className='text-[2.4rem] text-center font-bold my-6'>Your Nft</h1>
            <div className='h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl  flex flex-col ' >
                <div className='w-[90%] bg-slate-400 h-[80%] mx-[5%] my-5 rounded-lg ' ></div>
                <Link to='/' className='mx-auto'>
                <div className='flex text-white max-w-[90%] mx-[6%] '>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button className='bg-[#db7c26] my-2 py-2 inline w-[150px]  rounded-3xl mx-auto  font-bold text-lg'>Buy</button>
                </div>
                </Link>
                <p>Terms and Conditions | Private Policy</p>
            </div>
        </div>
        <Footer/>
    </div>
</div>
  )
}

export default YourNft