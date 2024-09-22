import React, { useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

import { PiHeartbeatThin } from "react-icons/pi";
import { MdOutlineLocalPharmacy, MdOutlineMedicalServices } from "react-icons/md";
import { CiMedicalCross } from "react-icons/ci";
import { PiAmbulanceBold } from "react-icons/pi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";

export const ServiceContent = () => {
    const { t } = useTranslation();
    
    const servicesData = [
        {
            id: 1,
            icon: <PiHeartbeatThin />,
            titleKey: 'healthCheckTitle',
            descriptionKey: 'healthCheckDescription'
        },
        {
            id: 2,
            icon: <MdOutlineLocalPharmacy />,
            titleKey: 'pharmacySupportTitle',
            descriptionKey: 'pharmacySupportDescription'
        },
        {
            id: 3,
            icon: <CiMedicalCross />,
            titleKey: 'operatingRoomTitle',
            descriptionKey: 'operatingRoomDescription'
        },
        {
            id: 4,
            icon: <PiAmbulanceBold />,
            titleKey: 'ambulanceCarTitle',
            descriptionKey: 'ambulanceCarDescription'
        },
        {
            id: 5,
            icon: <LiaFileMedicalAltSolid />,
            titleKey: 'recentEvaluationsTitle',
            descriptionKey: 'recentEvaluationsDescription'
        },
        {
            id: 6,
            icon: <MdOutlineMedicalServices />,
            titleKey: 'intensiveCareTitle',
            descriptionKey: 'intensiveCareDescription'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.services-content');
            elements.forEach((e, index) => {
                const rect = e.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    e.classList.add('in_view', `delay-${index + 1}`);
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="services">
            <div className="servicesImg">
                {servicesData.map((service, index) => (
                    <div className={`services-content delay-${index + 1}`} key={service.id}>
                        <div className="service-icon">
                            {service.icon}
                        </div>
                        <h2>{t(service.titleKey)}</h2>
                        <h3 className="service-description">
                            {t(service.descriptionKey)}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
