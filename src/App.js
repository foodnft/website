import React from "react";
import { Suspense } from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Getnft from './pages/Getnft'
import Yournft from './pages/Yournft'
import Enterotp from "./pages/Enterotp";
const MainLandingPage = React.lazy(() =>
  import("./pages/MainLandingPage/MainLandingPage")
);
const CreateAccount = React.lazy(() =>
  import("./pages/CreateAccount/CreateAccount")
);
const Mycollection = React.lazy(() => import("./pages/Mycollection"));
const HeaderComponent = React.lazy(() => import("./components/Header"));
const FooterComponent = React.lazy(() => import("./components/Footer"));


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
