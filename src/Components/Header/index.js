import React from "react";
import { useNavigate } from "react-router-dom";

import chicken from "../../images/svg/chicken.svg";

function Index() {
  const navigate = useNavigate();

  return (
    <header className=" bg-black h-[180px] flex justify-between  px-3 py-2 ">
      <img src={chicken}></img>
      <div className="my-auto">
        <button
          onClick={() => navigate("/createAcount")}
          className="bg-[#C32F27] text-white px-10 py-6  rounded-[40px] text-[2.8rem] mx-10 "
        >
          Create Account
        </button>
        <button className="bg-[#C32F27] text-white px-10 py-6  rounded-[40px] text-[2.8rem] mx-10 ">
          My Collection
        </button>
      </div>
    </header>
  );
}

export default Index;
