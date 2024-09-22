import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { ServiceContent } from "../../components/servicesContent";


export const Service = () => {
    const { t } = useTranslation();

    return (
        <div className="services">
            <div className="services_img">
                <div className="about-text">
                    <h1>{t('services')}</h1>
                    <h6><span>{t('breadcrumb').split(' / ')[0]}</span> / {t('breadcrumb').split(' / ')[1]}</h6>
                </div>
            </div>
            <ServiceContent/>
        </div>
    );
};
