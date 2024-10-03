import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { Medical } from "../../components/departments/medical";

export const Departments = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="departments">
                <div className="departments-img">
                    <div className="departments-text">
                        <h1>{t('departments')}</h1>
                        <h6><span>{t('home')}</span> / {t('departments1')}</h6>
                    </div>
                </div>
            </div>
            <Medical />
        </>
    );
};
