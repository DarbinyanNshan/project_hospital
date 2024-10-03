import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

import img1 from "../../../assets/images/departments/terapevt.png";
import img2 from "../../../assets/images/departments/cancer.png";
import img3 from "../../../assets/images/departments/cardiology.png";
import img4 from "../../../assets/images/departments/dermatology.png";
import img5 from "../../../assets/images/departments/infectious-disease.png";
import img6 from "../../../assets/images/departments/uterus.png";
import img7 from "../../../assets/images/departments/neurological.png";
import img8 from "../../../assets/images/departments/endocrinological.png";
import img9 from "../../../assets/images/departments/dental.png";
import img10 from "../../../assets/images/departments/check.png";
import img11 from "../../../assets/images/departments/uroGast.png";
import img12 from "../../../assets/images/departments/physical-therapy.png";
import img13 from "../../../assets/images/departments/ear.png";
import img14 from "../../../assets/images/departments/search.png";
import img15 from "../../../assets/images/departments/diagnostic.png";
import img16 from "../../../assets/images/departments/surTra.png";



export const Medical = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const items = [
        {
            img: img1,
            title: t('departments-content.terapevt'),
            route: "/departments/medical/terapevt"
        },
        {
            img: img2,
            title: t('departments-content.cancer'),
            route: "/departments/medical/cancer"
        },
        {
            img: img3,
            title: t('departments-content.cardiology'),
            route: "/departments/medical/cardiology"
        },
        {
            img: img4,
            title: t('departments-content.dermatology'),
            route: "/departments/medical/dermatology"
        },
        {
            img: img5,
            title: t('departments-content.infectious'),
            route: "/departments/medical/infectious"
        },
        {
            img: img6,
            title: t('departments-content.women'),
            route: "/departments/medical/women"
        },
        {
            img: img7,
            title: t('departments-content.neurological'),
            route: "/departments/medical/neurological"
        },
        {
            img: img8,
            title: t('departments-content.endocrinological'),
            route: "/departments/medical/endocrinological"
        },
        {
            img: img9,
            title: t('departments-content.dental'),
            route: "/departments/medical/dental"
        },
        {
            img: img10,
            title: t('departments-content.ophthalmic'),
            route: "/departments/medical/ophthalmic"
        }, 
        {
            img: img11,
            title: t('departments-content.uroGast'),
            route: "/departments/medical/uroGast"
        },   
        {
            img: img12,
            title: t('departments-content.therapy'),
            route: "/departments/medical/therapy"
        },
        {
            img: img13,
            title: t('departments-content.otorhinolaryngology'),
            route: "/departments/medical/otorhinolaryngology"
        },
        {
            img: img14,
            title: t('departments-content.epidemiology'),
            route: "/departments/medical/epidemiology"
        }, 
        {
            img: img15,
            title: t('departments-content.diagnostic'),
            route: "/departments/medical/diagnostic"
        }, 
         {
            img: img16,
            title: t('departments-content.surTra'),
            route: "/departments/medical/surTra"
        },

    ];

    const handleClick = (route) => {
        navigate(route);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="medical">
            {items.map((item, index) => (
                <div className="medical-content" key={index} onClick={() => handleClick(item.route)}>
                    <img src={item.img} alt={`department ${index + 1}`} />
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    );
};
