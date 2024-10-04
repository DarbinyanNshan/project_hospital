import React from "react";
import "./style.css"
import { Routes, Route } from "react-router-dom";
import { About } from "../../pages/about";
import { Doctors } from "../../pages/doctors";
import { Home } from "../../pages/home";
import { NavBar } from "../../components/navbar";
import { Contact } from "../../pages/contact";
import { Service } from "../../pages/service";
import { Departments } from "../../pages/departments";

import { Administrative } from "../../components/departments/administrative";
import { Footer } from "../../components/footer";
import { NotFound } from "../../pages/notFound";
import { Terapevt } from "../../components/departments/medical-pages/terapevt";
import { Cancer } from "../../components/departments/medical-pages/cancer";
import { Cardiology } from "../../components/departments/medical-pages/cardiology";
import { Dermatology } from "../../components/departments/medical-pages/dermatology";
import { Infectious } from "../../components/departments/medical-pages/infectious";
import { Women } from "../../components/departments/medical-pages/women";
import { Neurological } from "../../components/departments/medical-pages/neurological";
import { Endocrinological } from "../../components/departments/medical-pages/endocrinological";
import { Dental } from "../../components/departments/medical-pages/dental";
import { Ophthalmic } from "../../components/departments/medical-pages/ophthalmic";
import { UroGast } from "../../components/departments/medical-pages/uroGast";
import { Therapy } from "../../components/departments/medical-pages/therapy";
import { Otorhinolaryngology } from "../../components/departments/medical-pages/otorhinolaryngology";
import { Epidemiology } from "../../components/departments/medical-pages/epidemiology";
import { SurTra } from "../../components/departments/medical-pages/surTra";
import { Assurance } from "../../components/departments/administrative-pages/assurance";





export const Router = () => {


    return (
        <div className="wrapper">
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/departments/administrative" element={<Administrative />} />
                    <Route path="/departments/medical" element={<Departments />} />
                    <Route path="/departments/medical/terapevt" element={<Terapevt />} />
                    <Route path="/departments/medical/cancer" element={<Cancer />} />
                    <Route path="/departments/medical/cardiology" element={<Cardiology />} />
                    <Route path="/departments/medical/dermatology" element={<Dermatology />} />
                    <Route path="/departments/medical/women" element={<Women />} />
                    <Route path="/departments/medical/infectious" element={<Infectious/>} />
                    <Route path="/departments/medical/neurological" element={<Neurological />} />
                    <Route path="/departments/medical/endocrinological" element={<Endocrinological />} />
                    <Route path="/departments/medical/dental" element={<Dental />} />
                    <Route path="/departments/medical/ophthalmic" element={<Ophthalmic/>} />
                    <Route path="/departments/medical/uroGast" element={<UroGast/>} />
                    <Route path="/departments/medical/therapy" element={<Therapy/>} />
                    <Route path="/departments/medical/otorhinolaryngology" element={<Otorhinolaryngology/>} />
                    <Route path="/departments/medical/epidemiology" element={<Epidemiology/>} />
                    <Route path="/departments/medical/surTra" element={<SurTra/>} />
                    <Route path="/departments/administrative/assurance" element={<Assurance/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </div>
    )
}