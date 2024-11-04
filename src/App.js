import LoginPage from "./Pages/LoginPage.js";
import Main from "./Pages/Main.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Pages/Layout.js"
import Orders from "./Pages/Orders.js";
import AccountPage from "./Pages/AccountPage.js";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="account" element={<AccountPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


