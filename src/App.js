import React from "react";
import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const MainLandingPage = React.lazy(() =>
  import("./pages/MainLandingPage/MainLandingPage")
);
const CreateAccount = React.lazy(() =>
  import("./pages/CreateAccount/CreateAccount")
);
const Mycollection = React.lazy(() => import("./pages/Mycollection"));
const HeaderComponent = React.lazy(() => import("./components/Header"));
const FooterComponent = React.lazy(() => import("./components/Footer"));
import Enterotp from "./pages/Enterotp";

function App() {
  const { pathname } = useLocation();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/getnft" element={<Getnft/>} />
        <Route path="/enterotp" element={<Enterotp/>} />
        <Route path="/mycollection" element={<Mycollection/>} />
        <Route path="/yournft" element={<Yournft/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
