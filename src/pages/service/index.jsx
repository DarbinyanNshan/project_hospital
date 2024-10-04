import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { ServiceContent } from "../../components/servicesContent";


export const Service = () => {
    const { t } = useTranslation();

    return (
        <>        
        <div className="services">
            <div className="services-img">
                <div className="services-text">
                    <h1>{t('services')}</h1>
                    <h6><span>{t('home')}</span> / {t('services')}</h6>
                </div>
            </div>
        </div>
        <ServiceContent/>
        </>
   );
};
