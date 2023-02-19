import React from 'react'

import chicken from '../images/chicken.svg'
import mail from '../images/mail.svg'
import telegram from '../images/telegram.svg'
import bglayer from '../images/bglayer.svg'

import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Nft from '../components/Nft'

const YourNft = () => {
    return (
        <div className='max-w-[480px] mx-auto min-h-[100vh] overflow-x-hidden  '>
            <div className='relative '>
                <Header />
                <div className='relative z-0 bg-[#F9DC5C] p-2 h-[1000px]'>
                    <img src={bglayer} className='w-[100%] absolute top-0 bottom-0 z-[-1] '></img>
                    <h1 className='text-[2.4rem] text-center font-bold my-6'>Your Nft</h1>
                    <Nft />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default YourNft