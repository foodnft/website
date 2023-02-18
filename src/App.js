import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const Getnft = lazy(() => import("./pages/GetNFT/GetNFT"));
const Mycollection = lazy(() => import("./pages/Mycollection"));
const Yournft = lazy(() => import("./pages/Yournft"));
const Enterotp = lazy(() => import("./pages/Enterotp"));

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <HeaderComponent />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/getnft" element={<Getnft />} />
          <Route path="/enterotp" element={<Enterotp />} />
          <Route path="/mycollection" element={<Mycollection />} />
          <Route path="/yournft" element={<Yournft />} />
        </Routes>
      </Suspense>
      {pathname === "/" && <FooterComponent />}
    </>
  );
}

export default App;
