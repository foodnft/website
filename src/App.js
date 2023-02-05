import logo from './logo.svg';
import chicken from "./chicken.svg"
import mail from "./mail.svg"
import telegram from "./telegram.svg"
import bglayer from "./bglayer.svg"
import banner from "./images/banner.png"
import banner2 from "./images/banner2.png"
import chicken1 from "./images/chicken1.png"
import chicken2 from "./images/chicken2.png"
import chicken3 from "./images/chicken3.png"
import arrowdown from "./images/arrowdown.svg"

import './App.css';

function App() {
  return (
    <div className=" min-w-max min-h-[100vh] overflow-x-hidden  ">
      <div className='relative ' >
        <header className=' bg-black h-[180px] flex justify-between  px-3 py-2 ' >
          <img src={chicken} ></img>
          <div className='my-auto' >
            <button className='bg-[#C32F27] text-white px-10 py-6  rounded-[40px] text-[2.8rem] mx-10 '  >My Collection</button>

          </div>
        </header>
        <div className=' relative z-0 bg-[#F9DC5C] p-2' >
          <img src={bglayer} className="w-[100%] absolute top-0 bottom-0 z-[-1] " ></img>

          <img src={banner} className=" w-[100%] mt-20 " ></img>
v          <img src={banner2} className=" w-[100%] mt-20 " ></img>

          <button className=' bg-[#c32f27] text-white py-8 w-[92%] ml-[4%] mx-auto my-8  text-[3.2rem]  font-bold  '>Click here to start</button>

          <div className='mx-2 pb-16 rounded-2xl bg-[#231f1e]' >
            <div className='  flex flex-col text-white ' >
              <h2 className='text-center m-4 text-5xl font-bold my-10 ' >How does it works ?</h2>
              <img src={chicken1} width="60%" className='mx-auto my-4' ></img>
              <h3 className='text-center font-bold text-4xl ' >Nest your NFT</h3>
              <img src={arrowdown} width="16%" className='mx-auto mb-4 mt-8' ></img>
              <img src={chicken2} width="60%" className='mx-auto my-4 ' ></img>
              <h3 className='text-center font-bold text-4xl ' >Let it grow</h3>
              <img src={arrowdown} width="16%" className='mx-auto mb-4 mt-8' ></img>

              <img src={chicken3} width="60%" className='mx-auto my-4' ></img>
              <p className='text-center font-bold text-3xl w-[60%] mx-auto'>Claim anothe 25% discount
              30 days after fully grown</p>
            </div>
          </div>
        </div>

        <footer className=' bg-black flex justify-center p-2   w-[100%] ' >
          <div className=' text-center text-white m-3  '>
            <h3 className=' border-[1px]-[#C32F27] font-bold text-4xl my-4'>Content</h3>
            <p className=' flex m-2 text-4xl my-2' > <img src={mail} className="mr-2 w-8 " ></img>your@anonheLper.com</p>
            <p className=' flex m-2 text-4xl my-2' > <img src={mail} className="mr-2 w-8"></img>ibrahim.bhabay@gmail.com</p>
            <p className=' flex m-2 text-4xl my-2' > <img src={telegram} className="mr-2 w-8"></img>@CocktaiLDev</p>
            <img src={chicken} className="w-[25%] mx-auto my-10" ></img>
          
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
