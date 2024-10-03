import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

export const Infectious= () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="">
            <h1>{t('ERRORR')}</h1>

            </div>
        </>
    );
};
