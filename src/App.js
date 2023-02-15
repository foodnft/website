import React from "react";
import { Routes, Route } from "react-router-dom";

const MainLandingPage = React.lazy(() => import("./Pages/MainLandingPage"));
const CreateAccount = React.lazy(() => import("./Pages/CreateAccount"));
const HeaderComponent = React.lazy(() => import("./Components/Header"));
const FooterComponent = React.lazy(() => import("./Components/Footer"));

function App() {
  return (
    <div className=" min-w-max min-h-[100vh] overflow-x-hidden  ">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
