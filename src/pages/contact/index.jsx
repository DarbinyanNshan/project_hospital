import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { ContactContent } from "../../components/contactContent";


export const Contact = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="contact-us">
                <div className="contact-img">
                    <div className="contact-text">
                        <h1>{t('contact')}</h1>
                        <h6><span>{t('home')}</span> / {t('contact')}</h6>
                    </div>
                </div>
                <ContactContent/>
            </div>
        </>
    );
};