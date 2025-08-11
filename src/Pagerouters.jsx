// src\Pagerouters.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import("./pages/HomeScreen/Home"));
// const Aboutus = lazy(() => import("./Pages/AboutUs/Aboutus"));
// const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
// const Category = lazy(() => import("./Pages/Category-Bussiness/Category"));


const Pagerouters = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
   
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Tluk-Origin" element={<OurMission />} /> */}
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/Tluk-Origin" element={<Aboutus />} />
        <Route path="/Contact-Us" element={<Contact />} />
        <Route path="/Feature-Bussiness" element={<FuturePost />} />
        <Route path="/category-Bussiness" element={<Category />} />
        <Route path="/Bussiness-Catageries" element={<BussinessCatageries />} /> */}

      
      </Routes>
    </Suspense>
  );
};

export default Pagerouters;
