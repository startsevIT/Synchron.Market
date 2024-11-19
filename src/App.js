import LoginPage from "./Pages/LoginPage.js";
import Main from "./Pages/Main.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Pages/Layout.js"
import Orders from "./Pages/Orders.js";
import AccountPage from "./Pages/AccountPage.js";
import RegisterPage from "./Pages/RegisterPage.js";
import SubscribePage from "./Pages/SubscribePage.js";
import OrdersList from "./Pages/OrderList.js";
import OrderCreatePage from "./Pages/OrderCreatePage.js"
import PayPage from "./Pages/Pay.js";
import CompletePayPage from "./Pages/CompletePayPage.js";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
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


