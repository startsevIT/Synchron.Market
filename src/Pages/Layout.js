import { Outlet } from "react-router-dom";
import Header from "../Components/Header.js";

export default function LoginPage() {
  return (
    <>
        <Header/>
        <Outlet />    
    </>
  );
}

