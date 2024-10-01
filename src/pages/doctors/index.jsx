import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { DoctorsCard } from "../../components/doctorsCard/DoctorsCard";

export const Doctors = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="doctors">
            <div className="doctors-img">
                <div className="doctors-text">
                    <h1>{t('doctors')}</h1>
                    <h6><span>{t('home')}</span> / {t('doctors')}</h6>
                </div>
            </div>
               <DoctorsCard/>
            </div>
        </>
    );
};
