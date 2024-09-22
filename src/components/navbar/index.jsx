import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { NavLink, useLocation } from "react-router-dom";
import { BiMap, BiTimeFive } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../i18n/LanguageSwitcher";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

export const NavBar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const navRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false); 
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    return (
        <>
            <div className="info">
                <div className="contact-data">
                    <p className="time">
                        <span><BiTimeFive /></span>{t('openingHours')}
                    </p>
                    <p className="phone-number">
                        <span><FiPhoneCall /></span> +374 (10) 286 320
                    </p>
                </div>
                <div className="address">
                    <p className="map-text">
                        <span><BiMap /></span>{t('address')}
                    </p>
                </div>
            </div>
            <nav ref={navRef} className={`navbar ${isFixed ? "fixed" : ""}`}>
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    {isOpen && (
                        <div className="close-icon" onClick={() => setIsOpen(false)}>
                            <IoClose />
                        </div>
                    )}
                    <NavLink to="/" onClick={() => setIsOpen(false)}>{t('home')}</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>{t('about')}</NavLink>

                    <div className="dropdown">
                        <p className={(location.pathname.includes('/doctors')) ? 'active' : ''}>
                            {t('doctors')}<FaCaretDown />
                        </p>
                        <div className="dropdown-content">
                            <NavLink to="/doctors" onClick={() => setIsOpen(false)}>{t('doctors')}</NavLink>
                            <NavLink to="/doctors/specialists" onClick={() => setIsOpen(false)}>{t('specialists')}</NavLink>
                        </div>
                    </div>

                    <div className="dropdown">
                        <p className={(location.pathname.includes('/departments')) ? 'active' : ''}>
                            {t('departments')}<FaCaretDown />
                        </p>
                        <div className="dropdown-content">
                            <NavLink to="/departments" onClick={() => setIsOpen(false)}>{t('departments')}</NavLink>
                            <NavLink to="/departments/cardiology" onClick={() => setIsOpen(false)}>{t('cardiology')}</NavLink>
                            <NavLink to="/departments/neurology" onClick={() => setIsOpen(false)}>{t('neurology')}</NavLink>
                            <NavLink to="/departments/urology" onClick={() => setIsOpen(false)}>{t('urology')}</NavLink>
                            <NavLink to="/departments/pediatric" onClick={() => setIsOpen(false)}>{t('pediatric')}</NavLink>
                            <NavLink to="/departments/laboratory" onClick={() => setIsOpen(false)}>{t('laboratory')}</NavLink>
                        </div>
                    </div>

                    <NavLink to="/services" onClick={() => setIsOpen(false)}>{t('services')}</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>{t('contact')}</NavLink>
                    <LanguageSwitcher setIsOpen={setIsOpen} />
                </div>
                {!isOpen && (
                    <div className="new-toggle" onClick={() => setIsOpen(true)}>
                        <FaBars />
                    </div>
                )}
            </nav>
        </>
    );
};
