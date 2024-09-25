import React from "react";
import "./style.css";
import { CardContainer } from "../../components/cardsContainer/CardContainer";
import { useTranslation } from "react-i18next";

export const Doctors = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="doctors">
            <div className="services_img">
                <div className="about-text">
                    <h1>{t('doctors')}</h1>
                    <h6><span>{t('home')}</span> / {t('doctors')}</h6>
                </div>
            </div>
               <CardContainer/>
            </div>
        </>
    );
};
