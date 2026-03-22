"use client";
import Image from "next/image";
import { innovationList } from "@/app/api/data";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; 

const ringByBg: Record<string, string> = {
    "bg-purple": "group-hover:ring-purple/35 dark:group-hover:ring-purple/25",
    "bg-blue": "group-hover:ring-blue/35 dark:group-hover:ring-blue/25",
    "bg-orange": "group-hover:ring-orange/35 dark:group-hover:ring-orange/25",
    "bg-green": "group-hover:ring-green/35 dark:group-hover:ring-green/25",
    "bg-pink": "group-hover:ring-pink/35 dark:group-hover:ring-pink/25",
};

function Innovation() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-12%" });

    const headerAnimation = {
        initial: { y: 24, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    };

    const cardAnimation = (index: number) => ({
        initial: { y: 28, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 },
        transition: {
            duration: 0.45,
            delay: 0.12 + index * 0.08,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    });

    const ctaAnimation = {
        initial: { y: 20, opacity: 0 },
        animate: inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 },
        transition: { duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    };

    return (
        <section id="services" className="relative overflow-hidden">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(186,129,238,0.16),transparent_55%),radial-gradient(ellipse_70%_45%_at_100%_50%,rgba(112,181,255,0.12),transparent_50%),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(244,136,154,0.1),transparent_45%)] dark:bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(186,129,238,0.12),transparent_55%),radial-gradient(ellipse_70%_45%_at_100%_50%,rgba(112,181,255,0.08),transparent_50%)]"
            />
            <div ref={ref} className="2xl:py-20 py-11">
                <div className="container">
                    <div className="flex flex-col gap-12 lg:gap-14">
                        <div className="flex flex-col justify-center items-center gap-10 lg:gap-14">
                            <motion.div
                                {...headerAnimation}
                                className="flex flex-col items-center gap-4 max-w-screen-Xsm text-center"
                            >
                                <span className="inline-flex items-center rounded-full border border-dark_black/[0.08] bg-surface_elevated/95 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink_muted shadow-soft backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:shadow-none">
                                    Services
                                </span>
                                <h2 className="text-balance">
                                    Where innovation meets{" "}
                                    <span className="instrument-font italic font-normal dark:opacity-70">
                                        aesthetics
                                    </span>
                                </h2>
                                <p className="max-w-lg text-base text-dark_black/65 dark:text-white/55 md:text-lg">
                                    Strategy, design, and growth—crafted as one cohesive experience for brands that want to stand out.
                                </p>
                            </motion.div>
                            <div className="grid auto-rows-max grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-5 md:gap-6 w-full">
                                {innovationList.map((items, index) => {
                                    const ringClass = ringByBg[items.bg_color] ?? "";
                                    return (
                                        <motion.div
                                            key={index}
                                            {...cardAnimation(index)}
                                            className={`group relative ${items.bg_color} bg-opacity-20 dark:opacity-100 flex flex-col p-7 sm:p-8 rounded-2xl gap-6 lg:gap-8 border border-dark_black/[0.07] dark:border-white/[0.08] shadow-soft transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft-md hover:shadow-dark_black/8 dark:hover:shadow-black/30 dark:shadow-none ring-2 ring-transparent ${ringClass}`}
                                        >
                                            <div className="relative">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dark_black/[0.05] bg-surface_elevated/95 shadow-soft backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-110 group-hover:shadow-soft-md dark:border-transparent dark:bg-white/10 dark:shadow-none">
                                                    <Image
                                                        src={items.image}
                                                        alt={items.title}
                                                        height={40}
                                                        width={40}
                                                        className="transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h5
                                                    className={`${items.txt_color} text-balance transition-colors duration-200 group-hover:opacity-100`}
                                                >
                                                    {items.title.split("\n").map((line, i) => (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            <br />
                                                        </React.Fragment>
                                                    ))}
                                                </h5>
                                            </div>
                                            <div
                                                className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${items.bg_color} opacity-[0.12] blur-2xl transition-opacity duration-500 group-hover:opacity-25`}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                        <motion.div
                            {...ctaAnimation}
                            className="flex flex-col gap-5 xl:flex xl:flex-row bg-dark_black items-center justify-between dark:bg-white dark:bg-opacity-[0.07] py-9 px-7 sm:px-12 rounded-3xl w-full border border-white/10 shadow-xl shadow-dark_black/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-dark_black/25 dark:border-white/10 dark:shadow-black/40"
                        >
                            <h4 className="text-white text-center xl:text-left text-balance">
                                See Our Work in Action.
                                <br /> Start Your Creative Journey with Us!
                            </h4>
                            <div className="flex flex-col sm:flex-row gap-3 items-center shrink-0">
                                <Link
                                    href="/contact"
                                    className="group gap-2 text-dark_black font-medium bg-white rounded-full flex items-center lg:gap-4 py-2 pl-5 pr-2 border border-white dark:border-opacity-50 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                                >
                                    <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                                        Let’s Collaborate
                                    </span>
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:-translate-x-36 transition-all duration-200 ease-in-out"
                                    >
                                        <rect
                                            width="32"
                                            height="32"
                                            rx="16"
                                            fill="#1B1D1E"
                                            className=" transition-colors duration-200 ease-in-out group-hover:fill-white"
                                        />
                                        <path
                                            d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
                                            stroke="white"
                                            strokeWidth="1.42857"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="group-hover:stroke-black"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="/#work"
                                    className="group border border-white dark:border-opacity-50 text-white font-medium bg-dark_black gap-2 rounded-full flex items-center justify-between lg:gap-4 py-2 pl-5 pr-2 hover:opacity-95 hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out"
                                >
                                    <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                                        View Portfolio
                                    </span>
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:-translate-x-[125px] transition-all duration-200 ease-in-out "
                                    >
                                        <rect width="32" height="32" rx="16" fill="white" />
                                        <path
                                            d="M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668"
                                            stroke="#1B1D1E"
                                            strokeWidth="1.42857"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Innovation;
