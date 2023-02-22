import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { asyncApiCall } from "../../Axios";
import bglayer from "../../images/svg/bglayer.svg";

import "./style.scss";

function CreateAccount() {
  const [countryCode, setCountryCode] = useState("+60");
  const [showInput, setShowInput] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [optValue, setOtpValue] = useState("");
  const [optValue1, setOtpValue1] = useState("");
  const [optValue2, setOtpValue2] = useState("");
  const [optValue3, setOtpValue3] = useState("");

  const navigate = useNavigate();

  const sendOtp = () => {
    const url = {
      url: "/otp/sendOtp",
      method: "post",
      data: {
        mobile: `${countryCode}${mobileNumber}`,
      },
    };
    asyncApiCall(url)
      .then((res) => {
        if (res.status === 200) {
          setShowInput(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifyOtp = () => {
    const otpReceived = `${optValue}${optValue1}${optValue2}${optValue3}`;
    const url = {
      url: "/otp/verifyOtp",
      method: "post",
      data: {
        mobile: `${countryCode}${mobileNumber}`,
        otpValue: otpReceived,
      },
    };
    asyncApiCall(url)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/myCollection");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative ">
      <div className=" relative z-0 bg-[#F9DC5C] p-2">
        <img
          src={bglayer}
          className="w-[100%] absolute top-0 bottom-0 z-[-1] "
        />
        <div className="container">
          {showInput ? (
            <>
              <h2 className="nft-heading">Get NFT</h2>
              <div className="input_container">
                <div className="nft-heading-padding">
                  <div className="nft-heading  yellow_color">
                    Collect the Tastiest
                  </div>
                  <div className="nft-heading  yellow_color">Chicken NFTs</div>
                </div>
                <div className="mobile-number-container">
                  <select
                    className="country-code"
                    defaultValue="+60"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+60">+60</option>
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="number"
                    className="mobileInput"
                    // ref={mobileNumberRef}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <button className="mobileBtn first-otp-btn" onClick={sendOtp}>
                  Send OTP
                </button>
                <div className="terms-and-condition">
                  Terms and Conditions | Privacy Policy
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="nft-heading">Enter OTP</h2>
              <div className="input_container">
                <div className="nft-heading-padding">
                  <div className="nft-heading  yellow_color">
                    Collect the Tastiest
                  </div>
                  <div className="nft-heading  yellow_color">Chicken NFTs</div>
                </div>
                <div className="helperText">Input OTP</div>
                <div className="otp-input-container">
                  <input
                    type="number"
                    value={optValue}
                    onChange={(e) => {
                      if (optValue.length === 0) {
                        setOtpValue(e.target.value);
                      }
                    }}
                    className="otp-input"
                  />
                  <input
                    type="number"
                    value={optValue1}
                    className="otp-input"
                    onChange={(e) => {
                      if (optValue1.length === 0) {
                        setOtpValue1(e.target.value);
                      }
                    }}
                  />
                  <input
                    type="number"
                    value={optValue2}
                    className="otp-input"
                    onChange={(e) => {
                      if (optValue2.length === 0) {
                        setOtpValue2(e.target.value);
                      }
                    }}
                  />
                  <input
                    type="number"
                    value={optValue3}
                    className="otp-input"
                    onChange={(e) => {
                      if (optValue3.length === 0) {
                        setOtpValue3(e.target.value);
                      }
                    }}
                  />
                </div>
                <button
                  className="mobileBtn second-otp-btn"
                  onClick={verifyOtp}
                >
                  Confirm
                </button>
                <button
                  className="mobileBtn second-otp-btn resend-btn"
                  onClick={sendOtp}
                >
                  Re Send
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="container">
      <div className="relative ">
        <div className=" relative z-0 bg-[#F9DC5C] p-2">
          <img
            src={bglayer}
            className="w-[100%] absolute top-0 bottom-0 z-[-1] "
          />
        </div>
      </div>
      <div className="input_container">
        <input
          className="mobileInput"
          ref={mobileNumberRef}
          value={mobileNumberRef.current?.value}
        />
        <button className="mobileBtn" onClick={sendOtp}>
          Send OTP
        </button>
      </div>
    </div> */
}

export default CreateAccount;
