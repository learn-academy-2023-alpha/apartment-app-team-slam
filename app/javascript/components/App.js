import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApartmentEdit from "./pages/ApartmentEdit";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentShow from "./pages/ApartmentShow";
import NotFound from "./pages/NotFound";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProtectedIndex from "./pages/ProtectedIndex";

const App = (props) => {
  // console log our current props
  console.log(props);

  // set up state to hold apartment data in
  const [apartments, setApartments] = useState([]);



  // upon page load, run the load apartments function to load apartments from database into state
  useEffect(() => {
    loadApartments();
  }, []);

  // function to load apartments from the database into state
  const loadApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => setApartments(payload))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentedit" element={<ApartmentEdit />} />
          <Route path="/apartmentnew" element={<ApartmentNew />} />
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
          <Route
            path="/apartmentindex"
            element={<ApartmentIndex apartments={apartments} />}
          />
          <Route
            path="/protectedindex"
            element={
              <ProtectedIndex
                apartments={apartments}
                current_user={props.current_user}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
