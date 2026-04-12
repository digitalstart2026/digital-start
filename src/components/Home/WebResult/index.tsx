"use client";
import Image from "next/image";
import { WebResultTagList } from "@/app/api/data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function WebResult() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section id="aboutus">
            <div className="2xl:py-28 py-16">
                <div className="container">
                    <div className="flex flex-col lg:gap-28 gap-16">

                        {/* Top Label */}
                        <div className="flex justify-center">
                            <span className="text-xs uppercase tracking-[0.3em] font-semibold px-6 py-2.5 rounded-full border border-dark_black border-opacity-10 dark:border-white dark:border-opacity-10 text-ink_muted dark:text-white/40">
                                Who We Are
                            </span>
                        </div>

                        {/* Main Heading Block */}
                        <div className="flex flex-col items-center justify-center text-center gap-10 max-w-5xl mx-auto">

                            {/* Big Cinematic Headline */}
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-5xl md:text-6xl 2xl:text-7xl leading-tight tracking-tight dark:text-white">
                                    We Help New Businesses
                                </h1>
                                <h1 className="instrument-font italic font-normal text-5xl md:text-6xl 2xl:text-7xl leading-tight dark:text-white/70">
                                    Compete with Big Brands.
                                </h1>
                            </div>

                            {/* Subtext */}
                            <p className="text-base md:text-xl text-ink_muted dark:text-white/40 max-w-2xl leading-relaxed font-light">
                                Digital Start was created with a mission — to help startups and new
                                businesses grow using powerful, performance-driven digital marketing
                                strategies that actually move the needle.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {WebResultTagList.map((items, index) => (
                                    <span
                                        key={index}
                                        className={`inline-flex py-2.5 px-7 gap-3 rounded-full ${items.bg_color} bg-opacity-20 dark:bg-opacity-10 ${items.txt_color} items-center`}
                                    >
                                        <Image
                                            src={items.image}
                                            alt={items.name}
                                            width={20}
                                            height={20}
                                            style={{ width: "auto", height: "auto" }}
                                        />
                                        <span className="instrument-font italic font-normal text-lg">
                                            {items.name}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Our Approach Block */}
                        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
                            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-ink_muted dark:text-white/30">
                                Our Approach
                            </span>

                            {/* Approach Headline — Big & Cinematic */}
                            <div className="flex flex-col gap-1">
                                <p className="text-3xl md:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight dark:text-white">
                                <span className="instrument-font italic font-normal dark:text-white/60">Research</span>{" "} First.{" "}
                                    <span className="instrument-font italic font-normal dark:text-white/60">
                                        Strategy
                                    </span>{" "}
                                    Second.
                                </p>
                                <p className="text-3xl md:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tight dark:text-white">
                                    <span className="instrument-font italic font-normal dark:text-white/60">
                                        Execution
                                    </span>{" "}
                                    Third.{" "}
                                    <span className="instrument-font italic font-normal dark:text-white/60">
                                        Optimize
                                    </span>{" "}
                                    Always.
                                </p>
                            </div>

                            <p className="text-base md:text-lg text-ink_muted dark:text-white/30 font-light tracking-wide">
                                We treat your business like our own.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-dark_black bg-opacity-5 dark:bg-white dark:bg-opacity-5" />

                        {/* Stats */}
                        <div
                            ref={ref}
                            className="flex flex-col md:flex-row justify-center items-center text-center"
                        >
                            {/* Stat 1 */}
                            <div className="relative 2xl:px-24 px-16 md:py-8 py-6 group">
                                <p className="text-xs uppercase tracking-[0.25em] text-ink_muted dark:text-white/30 mb-4">
                                    Projects Completed
                                </p>
                                <h2 className="2xl:text-9xl md:text-8xl text-6xl font-bold tracking-tighter dark:text-white">
                                    <sup className="text-3xl md:text-4xl align-top mt-4 inline-block opacity-50">+</sup>
                                    {inView ? <CountUp start={0} end={40} duration={3} /> : "0"}
                                </h2>
                                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-px bg-dark_black bg-opacity-10 dark:bg-white dark:bg-opacity-10" />
                            </div>

                            {/* Stat 2 */}
                            <div className="relative 2xl:px-24 px-16 md:py-8 py-6 group">
                                <p className="text-xs uppercase tracking-[0.25em] text-ink_muted dark:text-white/30 mb-4">
                                    Years of Experience
                                </p>
                                <h2 className="2xl:text-9xl md:text-8xl text-6xl font-bold tracking-tighter dark:text-white">
                                    <sup className="text-3xl md:text-4xl align-top mt-4 inline-block opacity-50">+</sup>
                                    {inView ? <CountUp start={0} end={15} duration={3} /> : "0"}
                                </h2>
                                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-20 w-px bg-dark_black bg-opacity-10 dark:bg-white dark:bg-opacity-10" />
                            </div>

                            {/* Stat 3 */}
                            <div className="relative 2xl:px-24 px-16 md:py-8 py-6 group">
                                <p className="text-xs uppercase tracking-[0.25em] text-ink_muted dark:text-white/30 mb-4">
                                    Happy Clients
                                </p>
                                <h2 className="2xl:text-9xl md:text-8xl text-6xl font-bold tracking-tighter dark:text-white">
                                    <sup className="text-3xl md:text-4xl align-top mt-4 inline-block opacity-50">+</sup>
                                    {inView ? <CountUp start={0} end={12} duration={3} /> : "0"}
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default WebResult;