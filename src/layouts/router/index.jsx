import React from "react";
import "./style.css";

import { Routes, Route } from "react-router-dom";
import { About } from "../../pages/about";
import { Doctors } from "../../pages/doctors";
import { Home } from "../../pages/home";
import { NavBar } from "../../components/navbar";
import { Contact } from "../../pages/contact";
import { Service } from "../../pages/service";
import { Departments } from "../../pages/departments";

import { Administrative } from "../../components/departments/administrative";
import { Specialists } from "../../components/specialists";
import { Footer } from "../../components/footer";
import { NotFound } from "../../pages/notFound";





export const Router = () => {


    return (
        <div >
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/departments" element={<Departments />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/doctors/specialists" element={<Specialists />} />
                    <Route path="/departments/administrative" element={<Administrative />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </div>
    )
}