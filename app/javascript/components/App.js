import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import NotFound from "./pages/NotFound"
import Header from "./component/Header"
import Footer from "./component/Footer"





const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/apartmentedit" element={<ApartmentEdit/>} /> 
          <Route path="/apartmentnew" element={<ApartmentNew/>} /> 
          <Route path="/apartmentshow" element={<ApartmentShow/>} /> 
          <Route path="/apartmentindex" element={<ApartmentIndex/>} /> 
          <Route path="*" element={<NotFound/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
