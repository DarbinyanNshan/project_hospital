import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useTranslation } from "react-i18next";

import img1 from "../../../assets/images/departments/assurance.png";



export const AdministrativeContent = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const items = [
        {
            img: img1,
            title: t('departments-content.assurance'),
            route: "/departments/medical/terapevt"
        }
    ];

    const handleClick = (route) => {
        navigate(route);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="administrative">
            {items.map((item, index) => (
                <div className="administrative-content" key={index} onClick={() => handleClick(item.route)}>
                    <img src={item.img} alt={`administrative ${index + 1}`} />
                    <h2>{item.title}</h2>
                </div>
            ))}
        </div>
    );
};
