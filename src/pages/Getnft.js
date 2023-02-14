import React from 'react'
import { useState } from 'react'
import chicken from "../images/chicken.svg"
import mail from "../images/mail.svg"
import telegram from "../images/telegram.svg"
import bglayer from "../images/bglayer.svg"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom'

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
        <div className=" min-h-[100vh] overflow-x-hidden  ">
            <div className='relative ' >
                <header className=' bg-black h-[60px] flex justify-between  px-3 py-2 ' >
                    <img src={chicken} ></img>
                    <div className='my-auto' >
                        <button className='bg-[#C32F27] text-white px-4 py-2  rounded-[40px] text-[1.0rem] mx-1 '  >My Collection</button>

                    </div>
                </header>
                <div className=' relative z-0 bg-[#F9DC5C] p-2 h-[880px]' >
                    <img src={bglayer} className="w-[100%] absolute top-0 bottom-0 z-[-1] " ></img>
                    <h1 className='text-[2.4rem] text-center font-bold my-6' >Get Nft</h1>
                    {/* <button className=' bg-[#c32f27] text-white py-4 w-[92%] ml-[4%] mx-auto my-  text-[1.4rem]  font-bold  '>Click here to start</button> */}
                    <div className=' h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl relative  flex flex-col justify-center ' >
                        {showPopUp ? <></> : <div className='flex flex-col' >



                            <h2 className=' text-[#fdf523] text-2xl  my-10 text-center mx-2 text' >Collect the Tastiest Chicken NFTs</h2>

                            <div >
                                <form className=' flex justify-center gap-4' >
                                    <select id="cars" name="cars" className='h-14 w-[20%] text-center font-bold text-2xl '>
                                        <option value="mal" className='font-bold text-2xl  ' >+60</option>
                                    </select>
                                    <input type={Number} onKeyPress={handleKeyPress} maxLength={15} className="h-14 w-[60%] font-bold text-2xl text-center " ></input>

                                </form>
                            </div>
                            {/* <Link to="/mycollection" className=' mx-auto' >
                            <button className='bg-[#db7c26] my-10 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg' >Send OTP</button>
                            
                        </Link> */}

                            <button className='bg-[#db7c26] my-10 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg' onClick={handleClick}>Send Otp </button>

                        </div>}
                        {showPopUp && (
                            <div style={{ padding: '20px' }} className="relative top-0 h-[100vh] flex flex-col bg-black  rounded-xl " >
                                <h2 className=' text-[#fdf523] text-2xl  my-10 text-center mx-2 text' >Collect the Tastiest Chicken NFTs</h2>
                                <div >
                                    <form className=' flex flex-col justify-center text-white ' >
                                        <label className='text-center text-2xl mb-5 ' >Input Otp</label>
                                        <div className='flex gap-2 justify-center'>
                                            <input type={Number} onKeyPress={handleKeyPress} maxLength={1} className="h-14 w-[20%] font-bold text-black text-2xl text-center  " ></input>
                                            <input type={Number} onKeyPress={handleKeyPress} maxLength={1} className="h-14 w-[20%] font-bold text-black text-2xl text-center  " ></input>
                                            <input type={Number} onKeyPress={handleKeyPress} maxLength={1} className="h-14 w-[20%] font-bold text-black text-2xl text-center  " ></input>
                                            <input type={Number} onKeyPress={handleKeyPress} maxLength={1} className="h-14 w-[20%] font-bold text-black text-2xl text-center  " ></input>
                                        </div>
                        
                                    </form>
                                </div>
                                <Link to="/mycollection" className=' mx-auto' >
                                    <button className='bg-[#db7c26] my-10 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg' >Confirm</button>

                                </Link>
                                <button onClick={handleClick}>Close</button>
                            </div>
                        )}


                        {/* <p>Terms and Conditions | Private Policy</p> */}
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

export default Getnft