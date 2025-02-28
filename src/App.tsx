import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Vahicle from "./Components/Vahicle";
import Admin from "./Components/Admin";
import Catalog from "./Components/Catalog";
import Payment from "./Components/Payment";
import Contact from "./Components/Contact";
import DashBord from "./Components/DashBord";
import OrderConformation from "./Components/OrderConformation";
import TestDrive from "./Components/TestDrive";
import "../src/App.css"
import Submitted from "./Ecomponents/Submitted";
import LoginPage from "./Components/Login";
import SingIn from "./Components/SingIn";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/sign" element={<SingIn/>} />

          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Vahicle" element={<Vahicle/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/TestDrive" element={<TestDrive/>}/>
          <Route path="/Catalog" element={<Catalog/>} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/DashBord" element={<DashBord/>} />
          <Route path="/submitted" element={<Submitted/>} />

          <Route path="/OrderConformation" element={<OrderConformation/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
