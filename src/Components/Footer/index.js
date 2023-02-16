import React from "react";

import mail from "../../images/svg/mail.svg";
import telegram from "../../images/svg/telegram.svg";
import chicken from "../../images/svg/chicken.svg";

function Footer() {
  return (
    <footer className=" bg-black flex justify-center p-2   w-[100%] ">
      <div className=" text-center text-white m-3  ">
        <h3 className=" border-[1px]-[#C32F27] font-bold text-4xl my-4">
          Content
        </h3>
        <p className=" flex m-2 text-4xl my-2">
          <img src={mail} className="mr-2 w-8 "></img>your@anonheLper.com
        </p>
        <p className=" flex m-2 text-4xl my-2">
          <img src={mail} className="mr-2 w-8"></img>get@yournft.com
        </p>
        <p className=" flex m-2 text-4xl my-2">
          <img src={telegram} className="mr-2 w-8"></img>@CocktaiLDev
        </p>
        <img src={chicken} className="w-[25%] mx-auto my-10"></img>
      </div>
    </footer>
  );
}

export default Footer;
