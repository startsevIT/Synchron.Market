import { Outlet } from "react-router-dom";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

export default function LoginPage() {
  return (
    <>
        <Header/>
        <Outlet/>
        
    </>
  );
}

