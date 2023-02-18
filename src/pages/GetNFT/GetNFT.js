import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";

import { asyncApiCall } from "../../Axios";
import bglayer from "../../images/svg/bglayer.svg";

import "./style.scss";

function GetNFT() {
  const [countryCode, setCountryCode] = useState("+60");
  const [showInput, setShowInput] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [optValue, setOtpValue] = useState("");
  const [optValue1, setOtpValue1] = useState("");
  const [optValue2, setOtpValue2] = useState("");
  const [optValue3, setOtpValue3] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [resednBtn, setResndBtn] = useState(true);
  const [resendTimer, setResendTimer] = useState(60);

  const optResendTimer = useRef();
  const navigate = useNavigate();

  const startTimer = () => {
    optResendTimer.current = setInterval(() => {
      setResendTimer((previousTime) => (previousTime -= 1));
    }, 1000);
  };

  useEffect(() => {
    if (mobileNumber.length === 9 || mobileNumber.length === 10) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
    return () => clearInterval(optResendTimer.current);
  }, [mobileNumber]);

  useEffect(() => {
    if (resendTimer === 0) {
      setResndBtn(false);
      clearInterval(optResendTimer.current);
    }
  }, [resendTimer]);

  const sendOtp = () => {
    sessionStorage.setItem("userMobileNumber", `${countryCode}${mobileNumber}`);
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
          startTimer();
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

  const reSendOtp = () => {
    const apiData = {
      url: "/otp/resendOtp",
      method: "post",
      data: {
        mobileNumber: sessionStorage.getItem("userMobileNumber"),
      },
    };
    asyncApiCall(apiData)
      .then((data) => {
        setResndBtn(true);
        setResendTimer(60);
        startTimer();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative createAcountContainer">
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
                <button
                  className={`mobileBtn first-otp-btn ${
                    btnDisable && "disabled-btn"
                  }`}
                  disabled={btnDisable}
                  onClick={sendOtp}
                >
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
                  className={`mobileBtn second-otp-btn resend-btn ${
                    resednBtn && "disabled-btn"
                  }`}
                  onClick={reSendOtp}
                  disabled={resednBtn}
                >
                  Re Send
                </button>
                <div className="timer-count-value">
                  Resend : {resendTimer} Seconds
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetNFT;
