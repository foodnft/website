import React from 'react'
import chicken from '../images/chicken.svg'
import mail from '../images/mail.svg'
import telegram from '../images/telegram.svg'
import bglayer from '../images/bglayer.svg'
import Success from '../images/Success.svg'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Mycollection = () => {
    return (
        <div className='min-w-max min-h-[100vh] overflow-x-hidden  '>
            <div className='relative '>
                <Header/>
                <div className='relative z-0 bg-[#F9DC5C] p-2 h-[920px]'>
                    <img src={bglayer} className='w-[100%] absolute top-0 bottom-0 z-[-1] '></img>
                    <h1 className='text-[2.4rem] text-center font-bold my-6'>Mint NFT</h1>
                    <Link to='/yournft'className='mx-auto'>

                    <button className='bg-[#780116] text-white py-4 w-[92%] ml-[4%] mx-auto text-[1.4rem] font-bold drop-shadow-xl

'>Generate NFT</button>
                    </Link>

                    <div className='h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl  flex flex-col justify-center drop-shadow-xl

'>
                        <img src={Success} className='w-[80%] mx-auto'></img>
                        <Link to="/yournft" className='mx-auto' >
                            <button className='bg-[#db7c26] my-10 py-3  inline w-[180px] rounded-3xl mx-auto  font-bold text-lg'>Your Collection</button>

                        </Link>
                            
                        <p>Terms and Conditions | Private Policy</p>
                    </div>

                </div>

                <Footer/>
            </div>
        </div>

    )
}

export default Mycollection