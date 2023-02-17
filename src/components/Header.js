import React from 'react'
import chicken from '../images/chicken.svg'
import mail from '../images/mail.svg'
import telegram from '../images/telegram.svg'

const Header = () => {
    return (
        <header className='bg-black h-[60px] flex justify-between  px-3 py-2 '>
            <img src={chicken} ></img>
            <div className='my-auto'>
                <button className='bg-[#C32F27] text-white px-4 py-2 rounded-[40px] text-[1.0rem] mx-1'>My Collection</button>
            </div>
        </header>
    )
}

export default Header