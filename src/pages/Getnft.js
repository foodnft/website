import React from 'react'
import { useState } from 'react'
import chicken from '../images/chicken.svg'
import mail from '../images/mail.svg'
import telegram from '../images/telegram.svg'
import bglayer from '../images/bglayer.svg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Getnft = () => {

    const [showPopUp, setShowPopUp] = useState(false);
    const handleClick = () => {
        setShowPopUp(!showPopUp);
    };

    const [value, setValue] = useState('');

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/^\d$/.test(keyValue)) {
            event.preventDefault();
        }
    };

    return (
        <div className='min-h-[100vh] overflow-x-hidden  '>
            <div className='relative '>
              <Header/>
                <div className='relative z-0 bg-[#F9DC5C] p-2 h-[920px]'>
                    <img src={bglayer} className='w-[100%] absolute top-0 bottom-0 z-[-1] '></img>
                    <h1 className='text-[2.4rem] text-center font-bold my-6'>Get Nft</h1>
                    {/* <button className='bg-[#c32f27] text-white py-4 w-[92%] ml-[4%] mx-auto my-  text-[1.4rem]  font-bold  '>Click here to start</button> */}
                    <div className='h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl relative  flex flex-col justify-center '>
                     <div className='flex flex-col'>
                            <h2 className='text-[#fdf523] text-2xl mb-10 text-center mx-5 font-bold'>Collect the Tastiest <br/> Chicken NFTs</h2>
                            <div >
                                <form className='flex justify-center gap-4'>
                                    <select id='cars'name='cars'className='h-14 w-[20%] text-center font-bold text-2xl '>
                                        <option value='mal'className='font-bold text-2xl  '>+60</option>
                                    </select>
                                    <input type={Number} onKeyPress={handleKeyPress} maxLength={10} className='h-14 w-[60%] font-bold text-2xl text-center '></input>

                                </form>
                            </div>
                            <Link to='/enterotp'className='mx-auto'>
                            <button className='bg-[#db7c26] my-10 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg'>Send OTP</button>
                            
                        </Link>


                        </div>
                  


                        {/* <p>Terms and Conditions | Private Policy</p> */}
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
    )
}

export default Getnft