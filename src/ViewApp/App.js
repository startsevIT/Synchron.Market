import LoginPage from "../3Pages/LoginPage/LoginPage.js";
import MainPage from "../3Pages/MainPage/MainPage.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Layout.js"
import Orders from "../3Pages/OrdersPage/Orders.js";
import AccountPage from "../3Pages/AccountPage/AccountPage.js";
import RegisterPage from "../3Pages/RegisterPage/RegisterPage.js";
import SubscribePage from "../3Pages/SubscribePage/SubscribePage.js";
import OrdersList from "../3Pages/OrdersPage/OrderListPage/OrderList.js";
import OrderCreatePage from "../3Pages/OrdersPage/OrderCreatePage/OrderCreatePage.js"
import PayPage from "../3Pages/PayPage/Pay.js";
import CompletePayPage from "../3Pages/CompletePayPage/CompletePayPage.js";
import AboutProject from "../3Pages/AboutPage/AboutPage.js";
import TestPage from "../3Pages/test.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="about" element={<AboutProject/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="orders" element={<Orders/>}>
            <Route index element={<OrdersList/>}/>
            <Route path="create" element={<OrderCreatePage/>}/>
          </Route>
          <Route path="account" element={<AccountPage/>}/>
          <Route path="registration" element={<RegisterPage/>}/>
          <Route path="subscribe" element={<SubscribePage/>}/>
          <Route path="pay" element={<PayPage/>}/>
          <Route path="completepay" element={<CompletePayPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


{/**/}