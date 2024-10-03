import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaGlobeEurope } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ContactContent = () => {
    const { t } = useTranslation();
    const form = useRef("");
    const [phone, setPhone] = useState("");

    const contactInfo = [
        {
            icon: <FaGlobeEurope />,
            title: t("contact-info.addressTitle"),
            content: t("contact-info.address"),
        },
        {
            icon: <IoIosPhonePortrait />,
            title: t("contact-info.phoneTitle"),
            content: "+374 10 286 320",
        },
        {
            icon: <IoIosMail />,
            title: t("contact-info.emailTitle"),
            content: "poliklinika.yesayan@yerevan.am",
        },
    ];

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_avjh2ws',
            'template_3sxoptj',
            form.current,
            'G_GFIiShl_BuU3IBw')
            .then(() => {
                toast.success(t('contact-info.success_message'), {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }, () => {
                toast.error(t('contact-info.error_message'), {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
        e.target.reset();
    };



    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setPhone(value);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.contact-content');
            elements.forEach(e => {
                const rect = e.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    if (e.classList.contains('contact-content')) {
                        e.classList.add('in_view4');
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="contact-content">
                <h2>{t("contact")}</h2>
                <div className="contact-info">
                    {contactInfo.map((info, index) => (
                        <div className="contact-info-content" key={index}>
                            <div className="contact-icon">{info.icon}</div>
                            <h2>{info.title}</h2>
                            <p>{info.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="contact-user">
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <h2 className="messeg-title">{t('contact-info.sendMessage')}</h2>
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" name="user_fristname" placeholder={t('contact-info.userFristName')} required />
                        </div>

                        <div className="input-field">
                            <input type="text" name="user_lastname" placeholder={t('contact-info.userLastName')} required />
                        </div>
                        <div className="input-field">
                            <input
                                type="text"
                                name="user_phone"
                                placeholder={t('contact-info.userPhone')}
                                value={phone}
                                onChange={handlePhoneChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <input type="email" placeholder={t('contact-info.userEmail')} name="user_email" required />
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder={t('contact-info.userTema')} name="user_tema" required />
                        </div>
                    </div>


                    <div className="textarea-field">
                        <textarea
                            name="user_message"
                            cols="30"
                            rows="10"
                            placeholder={t('contact-info.userMessage')}
                            required
                        />
                        <span className="focus"></span>
                    </div>
                    <div>
                        <button type="submit" className="contact-btn">{t('contact-info.send')}</button>
                    </div>

                    <ToastContainer
                        position="bottom-center"
                        autoClose={4000}
                        limit={1}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </form>
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.44938077759224!2d44.53155728476201!3d40.20483427117198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2d2b7333edd%3A0xb4c9db1109b82ea5!2zwqvUv9Wh1bzVrNWl1bYg1LXVvdWh1bXVodW21asg1LHVttW-1aHVtiDVitW41azVq9Wv1azVq9W21avVr9Whwrsg1ZPUstS4!5e0!3m2!1sru!2sam!4v1727798083600!5m2!1sru!2sam"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};
