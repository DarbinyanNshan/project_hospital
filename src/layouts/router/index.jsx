import { Routes, Route } from "react-router-dom";
import { About } from "../../pages/about";
import { Doctors } from "../../pages/doctors";
import { Home } from "../../pages/home";
import { NavBar } from "../../components/navbar";
import { Contact } from "../../pages/contact";
import { Service } from "../../pages/service";
import { Departments } from "../../pages/departments";

import { Cardiology } from "../../components/departments/cardiology";
import { Neurology } from "../../components/departments/neurology";
import { Urology } from "../../components/departments/urology";
import { Pediatric } from "../../components/departments/pediatric";
import { Laboratory } from "../../components/departments/laboratory";
import { Specialists } from "../../components/specialists";
import { Footer } from "../../components/footer";





export const Router = () => {


    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/services" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/doctors/specialists" element={<Specialists/>} />
                <Route path="/departments/cardiology" element={<Cardiology/>} />
                <Route path="/departments/neurology" element={<Neurology/>} />
                <Route path="/departments/urology" element={<Urology />} />
                <Route path="/departments/pediatric" element={<Pediatric />} />
                <Route path="/departments/laboratory" element={<Laboratory />} />
            </Routes>
            <Footer/>
        </div>
    )
}