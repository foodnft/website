import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bglayer from '../images/bglayer.svg'
import Success from '../images/Success.svg'

const Enterotp = () => {

    const [value, setValue] = useState('');

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/^\d$/.test(keyValue)) {
            event.preventDefault();
        }
    };

    return (
        <div className='max-w-[480px] mx-auto min-h-[100vh] overflow-x-hidden  '>
        <div className='relative '>
          <Header/>
            <div className='relative z-0 bg-[#F9DC5C] p-2 h-[920px]'>
                <img src={bglayer} className='w-[100%] absolute top-0 bottom-0 z-[-1] '></img>
                <h1 className='text-[2.4rem] text-center font-bold my-6'>Enter OTP</h1>
                <div className='h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl relative  flex flex-col justify-center '>
                        <div style={{ padding: '20px'}} className='relative top-0 h-[100vh] flex flex-col bg-black rounded-xl drop-shadow-xl
'>
                            <h2 className='text-[#fdf523] text-2xl  my-10 text-center mx-2 font-bold'>Collect the Tastiest <br/> Chicken NFTs</h2>
                            <div >
                                <form className='flex flex-col justify-center text-white '>
                                    <label className='text-center text-2xl mb-5 '>Input Otp</label>
                                    <div className='flex gap-2 justify-center'>
                                        <input type={Number} onKeyPress={handleKeyPress} maxLength={1} className='h-14 w-[20%] font-bold text-black text-2xl text-center  '></input>
                                        <input type={Number} onKeyPress={handleKeyPress} maxLength={1} className='h-14 w-[20%] font-bold text-black text-2xl text-center  '></input>
                                        <input type={Number} onKeyPress={handleKeyPress} maxLength={1} className='h-14 w-[20%] font-bold text-black text-2xl text-center  '></input>
                                        <input type={Number} onKeyPress={handleKeyPress} maxLength={1} className='h-14 w-[20%] font-bold text-black text-2xl text-center  '></input>
                                    </div>
                    
                                </form>
                            </div>
                            <Link to='/mycollection'className='mx-auto'>
                                <button className='bg-[#db7c26] mb-0 mt-5 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg'>Confirm</button>
                            </Link>
                            <button className='bg-[#dbc926] my-5 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg'>Re-send</button>

                        </div>
                


                    {/* <p>Terms and Conditions | Private Policy</p> */}
                </div>
            </div>

            <Footer/>
        </div>
    </div>  
    )
}

export default Enterotp