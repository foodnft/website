import React from "react";
import { useNavigate } from "react-router-dom";

// ./bglayer.svg
import bglayer from "../../images/svg/bglayer.svg";
import banner from "../../images/banner.png";
import banner2 from "../../images/banner2.png";
import chicken1 from "../../images/chicken1.png";
import chicken2 from "../../images/chicken2.png";
import chicken3 from "../../images/chicken3.png";
import arrowdown from "../../images/arrowdown.svg";

function MainLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative ">
      <div className=" relative z-0 bg-[#F9DC5C] p-2">
        <img
          src={bglayer}
          className="w-[100%] absolute top-0 bottom-0 z-[-1] "
        ></img>
        <img src={banner} className=" w-[100%] mt-20 "></img>v{" "}
        <img src={banner2} className=" w-[100%] mt-20 "></img>
        <button
          onClick={() => navigate("/createAccount")}
          className=" bg-[#c32f27] text-white py-8 w-[92%] ml-[4%] mx-auto my-8  text-[3.2rem]  font-bold  "
        >
          Click here to start
        </button>
        <div className="mx-2 pb-16 rounded-2xl bg-[#231f1e]">
          <div className="  flex flex-col text-white ">
            <h2 className="text-center m-4 text-5xl font-bold my-10 ">
              How does it works ?
            </h2>
            <img src={chicken1} width="60%" className="mx-auto my-4"></img>
            <h3 className="text-center font-bold text-4xl ">Nest your NFT</h3>
            <img
              src={arrowdown}
              width="16%"
              className="mx-auto mb-4 mt-8"
            ></img>
            <img src={chicken2} width="60%" className="mx-auto my-4 "></img>
            <h3 className="text-center font-bold text-4xl ">Let it grow</h3>
            <img
              src={arrowdown}
              width="16%"
              className="mx-auto mb-4 mt-8"
            ></img>

            <img src={chicken3} width="60%" className="mx-auto my-4"></img>
            <p className="text-center font-bold text-3xl w-[60%] mx-auto">
              Claim anothe 25% discount 30 days after fully grown
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLandingPage;
