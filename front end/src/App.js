import {Routes, Route,BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Receptionist from "./components/Receptionist"
import Lab from "./components/Lab";
import Pharmacy from "./components/Pharmacy"
import Doctor from "./components/Doctor"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='admin' element={<Admin/>}></Route>
      <Route path='recep' element={<Receptionist/>}></Route>
      <Route path='doct' element={<Doctor/>}></Route>
      <Route path='pharm' element={<Pharmacy/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
