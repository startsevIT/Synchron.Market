import { Outlet } from "react-router-dom";
import Header from "../2Widgets/Header/Header.js";

export default function LoginPage() {
  return (
    <>
        <Header/>
        <Outlet />    
    </>
  );
}

