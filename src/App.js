import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const MainLandingPage = React.lazy(() =>
  import("./pages/MainLandingPage/MainLandingPage")
);
const CreateAccount = React.lazy(() =>
  import("./pages/CreateAccount/CreateAccount")
);
const HeaderComponent = React.lazy(() => import("./Components/Header"));
const FooterComponent = React.lazy(() => import("./Components/Footer"));

function App() {
  const { pathname } = useLocation();
  return (
    <div className=" min-w-max min-h-[100vh] overflow-x-hidden  ">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/mintNft" />
      </Routes>
      {pathname === "/" && <FooterComponent />}
    </div>
  );
}

export default App;
