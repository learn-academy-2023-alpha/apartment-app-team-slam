import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApartmentEdit from "./pages/ApartmentEdit";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentShow from "./pages/ApartmentShow";
import NotFound from "./pages/NotFound";
import Header from "./component/Header";
import Footer from "./component/Footer";

const App = (props) => {
  console.log("logged_in:", props.logged_in);
  console.log("current_user:", props.current_user);
  console.log("new_user_route:", props.new_user_route);
  console.log("sign_in_route:", props.sign_in_route);
  console.log("sign_out_route:", props.sign_out_route);
  return (
    <>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentedit" element={<ApartmentEdit />} />
          <Route path="/apartmentnew" element={<ApartmentNew />} />
          <Route path="/apartmentshow" element={<ApartmentShow />} />
          <Route path="/apartmentindex" element={<ApartmentIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
