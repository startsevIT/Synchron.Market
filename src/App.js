import LoginPage from "./Pages/LoginPage.js";
import Main from "./Pages/Main.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Pages/Layout.js"

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


