import React from "react";
import { useRef } from "react";
import { asyncApiCall } from "../../Axios";

import "./style.scss";

function Index() {
  const mobileNumberRef = useRef("");
  const sendOtp = () => {
    const url = {
      url: "/otp/sendOtp",
      method: "post",
      data: {
        mobile: mobileNumberRef.current?.value,
      },
    };
    asyncApiCall(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default Index;
