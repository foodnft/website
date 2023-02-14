import React from 'react'

import chicken from "../images/chicken.svg"
import mail from "../images/mail.svg"
import telegram from "../images/telegram.svg"
import bglayer from "../images/bglayer.svg"

import { Link } from 'react-router-dom'


const YourNft = () => {
  return (
    <div className=" min-h-[100vh] overflow-x-hidden  ">
    <div className='relative ' >
        <header className=' bg-black h-[60px] flex justify-between  px-3 py-2 ' >
            <img src={chicken} ></img>
            <div className='my-auto' >
                        <button className='bg-[#C32F27] text-white px-4 py-2  rounded-[40px] text-[1.0rem] mx-1 '  >My Collection</button>

                    </div>
        </header>
        <div className=' relative z-0 bg-[#F9DC5C] p-2 h-[1000px]' >
            <img src={bglayer} className="w-[100%] absolute top-0 bottom-0 z-[-1] " ></img>
            <h1 className='text-[2.4rem] text-center font-bold my-6' >Your Nft</h1>
            <div className=' h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl  flex flex-col ' >
                <div className='w-[90%] bg-slate-400 h-[80%] mx-[5%] my-5 rounded-lg ' ></div>
                <Link to="/" className=' mx-auto' >
                <div className='flex text-white max-w-[90%] mx-[6%] '>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button className='bg-[#db7c26] my-2 py-2 inline w-[150px]  rounded-3xl mx-auto  font-bold text-lg' >Buy</button>
                </div>
                </Link>
                <p>Terms and Conditions | Private Policy</p>
            </div>

        </div>

        <footer className=' bg-black flex justify-center p-2   w-[100%] ' >
            <div className=' text-center text-white m-3  '>
                <h3 className=' border-[1px]-[#C32F27] font-bold text-4xl my-4'>Content</h3>
                <p className=' flex m-2 text-xl my-2' > <img src={mail} className="mr-2 w-6 " ></img>your@anonheLper.com</p>
                <p className=' flex m-2 text-xl my-2' > <img src={mail} className="mr-2 w-6"></img>ibrahim.bhabay@gmail.com</p>
                <p className=' flex m-2 text-xl my-2' > <img src={telegram} className="mr-2 w-6"></img>@CocktaiLDev</p>
                <img src={chicken} className="w-[25%] mx-auto my-10" ></img>

            </div>
        </footer>
    </div>
</div>
  )
}

export default YourNft