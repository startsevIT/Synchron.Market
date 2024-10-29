import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function LoginPage() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  );
}

