
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Getnft from "./pages/Getnft";
import Mycollection from "./pages/Mycollection";
import Yournft from "./pages/Yournft";
import './App.css';
import Enterotp from "./pages/Enterotp";

function App() {
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
