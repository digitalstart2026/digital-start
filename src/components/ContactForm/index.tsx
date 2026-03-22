"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Design & Branding",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 👇 Replace with your WhatsApp number (with country code, no + or spaces)
        const whatsappNumber = "917375871283"; // e.g. 919876543210 for India

        const message =
`Hello, I came across your website and would like to discuss a project.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.service}
Details: ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, "_blank");
        setSubmitted(true);
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "Design & Branding",
            message: ""
        });
        setSubmitted(false);
    };

    return (
        <section>
            <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-blue_gradient before:via-surface before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
                <div className="container relative z-10">
                    <div className="flex flex-col gap-10 md:gap-20">

                        {/* Heading */}
                        <div className="relative flex flex-col text-center items-center">
                            <h2 className="font-medium w-full max-w-32">
                                Love to hear from you, Get in
                                <span className="instrument-font italic font-normal dark:opacity-70"> touch</span>
                            </h2>
                        </div>

                        {/* Success State */}
                        {submitted ? (
                            <div className="flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-8 rounded-2xl border border-dark_black/[0.06] bg-surface_elevated shadow-soft-lg dark:border-transparent dark:bg-white dark:bg-opacity-5 dark:shadow-none">
                                <div className="flex flex-col items-center gap-3 text-center">
    <Icon icon="ix:success-filled" width="40" height="40" style={{ color: "#a78bfa" }} />
    <h5 className="text-dark_black font-medium dark:text-white dark:opacity-90">
        Thank you for reaching out!
    </h5>
    <p className="text-sm text-dark_black/65 dark:text-white dark:opacity-50">
        Your message is ready on WhatsApp. We will get back to you within 24 hours.
    </p>
</div>
                                <p className="text-sm text-dark_black/55 dark:opacity-60">
                                    If WhatsApp didn't open, make sure it's installed or use WhatsApp Web.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="group w-fit text-black font-medium bg-transparent dark:bg-white dark:bg-opacity-20 dark:hover:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-dark_black"
                                >
                                    <span className="group-hover:translate-x-9 group-hover:text-dark_black dark:text-white transform transition-transform duration-200 ease-in-out">
                                        Send Another
                                    </span>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out group-hover:rotate-45">
                                        <rect width="32" height="32" rx="16" fill="white" className="transition-colors duration-200 ease-in-out fill-black" />
                                        <path d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668" stroke="#1B1D1E" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-200 ease-in-out stroke-white" />
                                    </svg>
                                </button>
                            </div>
                        ) : (

                            /* Form */
                            <form onSubmit={handleSubmit} className="flex flex-col rounded-2xl border border-dark_black/[0.07] bg-surface_elevated p-8 gap-8 shadow-soft-lg dark:border-transparent dark:bg-dark_black dark:shadow-none">

                                {/* Row 1 - Name & Email */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-full">
                                        <label htmlFor="name">Your Name <span className="text-red-500">*</span></label>
                                        <input
                                            className="w-full mt-2 rounded-full border border-dark_black/[0.12] bg-white px-5 py-3 outline-none transition shadow-[inset_0_1px_2px_rgba(27,29,30,0.04)] dark:border-white dark:border-opacity-20 dark:bg-transparent dark:shadow-none focus:border-dark_black dark:focus:border-white focus:border-opacity-50 dark:focus:border-opacity-50"
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="email">Your Email <span className="text-red-500">*</span></label>
                                        <input
                                            className="w-full mt-2 rounded-full border border-dark_black/[0.12] bg-white px-5 py-3 outline-none transition shadow-[inset_0_1px_2px_rgba(27,29,30,0.04)] dark:border-white dark:border-opacity-20 dark:bg-transparent dark:shadow-none focus:border-dark_black dark:focus:border-white focus:border-opacity-50 dark:focus:border-opacity-50"
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Row 2 - Phone & Service */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-full">
                                        <label htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
                                        <input
                                            className="w-full mt-2 rounded-full border border-dark_black/[0.12] bg-white px-5 py-3 outline-none transition shadow-[inset_0_1px_2px_rgba(27,29,30,0.04)] dark:border-white dark:border-opacity-20 dark:bg-transparent dark:shadow-none focus:border-dark_black dark:focus:border-white focus:border-opacity-50 dark:focus:border-opacity-50"
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="service">Service Required <span className="text-red-500">*</span></label>
                                        <select
                                            className="w-full mt-2 text-base px-4 rounded-full border border-dark_black/[0.12] bg-white py-3 shadow-[inset_0_1px_2px_rgba(27,29,30,0.04)] transition-all duration-500 dark:border-white dark:border-opacity-20 dark:bg-dark_black dark:shadow-none focus:outline-0 dark:text-white"
                                            name="service"
                                            id="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="Design & Branding">Design & Branding</option>
                                            <option value="SEO & Content Marketing">SEO & Content Marketing</option>
                                            <option value="Social Media Marketing">Social Media Marketing</option>
                                            <option value="Pay-Per-Click Ads">Pay-Per-Click Ads (PPC)</option>
                                            <option value="Website Development">Website Development</option>
                                            <option value="Ecommerce Solutions">Ecommerce Solutions</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3 - Message */}
                                <div className="w-full">
                                    <label htmlFor="message">Message <span className="text-red-500">*</span></label>
                                    <textarea
                                        className="w-full mt-2 rounded-3xl border border-dark_black/[0.12] bg-white px-5 py-3 outline-none transition shadow-[inset_0_1px_2px_rgba(27,29,30,0.04)] dark:border-white dark:border-opacity-20 dark:bg-transparent dark:shadow-none focus:border-dark_black dark:focus:border-white focus:border-opacity-50 dark:focus:border-opacity-50"
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="group w-fit text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out hover:bg-transparent border hover:text-dark_black border-dark_black"
                                    >
                                        <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-10 flex items-center gap-2">
                                            <Icon icon="logos:whatsapp-icon" width="20" height="20" />
                                            Send via WhatsApp
                                        </span>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-200 ease-in-out group-hover:-translate-x-40 group-hover:rotate-45">
                                            <rect width="32" height="32" rx="16" fill="white" className="fill-white dark:fill-black transition-colors duration-200 ease-in-out group-hover:fill-black" />
                                            <path d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668" stroke="#1B1D1E" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" className="stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white" />
                                        </svg>
                                    </button>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;