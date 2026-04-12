"use client";
import { Icon } from "@iconify/react";

import { innovationList } from "@/app/api/data";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const iconSurfaceByBg: Record<string, string> = {
  "bg-purple": "bg-purple/[0.12]",
  "bg-blue": "bg-blue/[0.12]",
  "bg-orange": "bg-orange/[0.12]",
  "bg-green": "bg-green/[0.12]",
  "bg-pink": "bg-pink/[0.12]",
  "bg-purple_blue": "bg-purple_blue/[0.14]",
  "bg-paleYellow": "bg-paleYellow/[0.2]",
};

const cardTopAccent: Record<string, string> = {
  "bg-purple":
    "bg-[linear-gradient(90deg,transparent_0%,rgba(186,129,238,0.95)_45%,rgba(73,40,253,0.55)_100%)]",
  "bg-blue":
    "bg-[linear-gradient(90deg,transparent_0%,rgba(112,181,255,0.95)_50%,rgba(73,40,253,0.35)_100%)]",
  "bg-orange":
    "bg-[linear-gradient(90deg,transparent_0%,rgba(255,175,104,0.95)_55%,rgba(244,136,154,0.45)_100%)]",
  "bg-green":
    "bg-[linear-gradient(90deg,transparent_0%,rgba(121,212,94,0.9)_50%,rgba(112,181,255,0.35)_100%)]",
  "bg-pink":
    "bg-[linear-gradient(90deg,transparent_0%,rgba(244,136,154,0.95)_48%,rgba(186,129,238,0.45)_100%)]",
  "bg-purple_blue":
    "bg-[linear-gradient(90deg,transparent_0%,rgba(73,40,253,0.92)_42%,rgba(186,129,238,0.55)_100%)]",
  "bg-paleYellow":
    "bg-[linear-gradient(90deg,transparent_0%,rgba(246,230,131,0.85)_50%,rgba(68,63,50,0.35)_100%)]",
};

/** Feature row marker: saturated fills read as premium chips */
const featureMarkerByBg: Record<string, string> = {
  "bg-purple": "bg-purple text-white",
  "bg-blue": "bg-blue text-white",
  "bg-orange": "bg-orange text-dark_black",
  "bg-green": "bg-green text-dark_black",
  "bg-pink": "bg-pink text-white",
  "bg-purple_blue": "bg-purple_blue text-white",
  "bg-paleYellow":
    "bg-paleYellow text-dark_yellow_gradient ring-1 ring-black/[0.08]",
};

function Innovation() {
  const ref = useRef<HTMLElement>(null);
  /** Relaxed root margin so intersection always fires (negative margin was often leaving content stuck at opacity: 0). */
  const inView = useInView(ref, {
    once: true,
    amount: 0.08,
    margin: "0px 0px 120px 0px",
  });

  const headerAnimation = {
    initial: { y: 24, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  };

  const cardAnimation = (index: number) => ({
    initial: { y: 30, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 },
    transition: {
      duration: 0.5,
      delay: 0.12 + index * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  const ctaAnimation = {
    initial: { y: 24, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 },
    transition: {
      duration: 0.55,
      delay: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <section
      ref={ref}
      id="services"
      className="relative z-[1] overflow-hidden py-14 2xl:py-24"
    >
      {/* Dark mode: minimal wash — matches page bg, one soft violet haze */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden dark:block"
      >
        <div className="absolute inset-0 bg-dark_black" />
        <div className="absolute left-1/2 top-0 h-[min(60vh,28rem)] w-[min(100vw,56rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgba(186,129,238,0.09),transparent_62%)]" />
      </div>

      <div className="container">
        <div className="flex flex-col gap-16 lg:gap-20">
          {/* Header */}
          <motion.div
            {...headerAnimation}
            className="relative flex flex-col items-center text-center gap-6 max-w-6xl mx-auto"
          >
            <div className="flex w-full max-w-2xl flex-col items-center gap-3">
              
                
              
              <div className="flex w-full items-center justify-center gap-3 sm:gap-6">
                <span
                  aria-hidden
                  className="h-px w-10 shrink-0 bg-gradient-to-r from-transparent to-black/28 dark:to-white/28 sm:hidden"
                />
                <span
                  aria-hidden
                  className="hidden h-px w-full max-w-[5rem] bg-gradient-to-r from-transparent via-black/28 to-black/10 sm:block sm:max-w-[7.5rem] dark:via-white/30 dark:to-white/12"
                />
                <div className="relative shrink-0 px-1">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple/[0.12] via-transparent to-purple_blue/[0.1] opacity-90 blur-xl dark:from-purple/20 dark:to-purple_blue/15 dark:opacity-50"
                  />
                  <span className="relative inline-flex items-center justify-center rounded-2xl border border-black/[0.09] bg-white/[0.92] px-8 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.34em] text-dark_black/88 shadow-[0_6px_28px_rgba(27,29,30,0.07),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl dark:border-white/[0.14] dark:bg-white/[0.08] dark:text-white/92 dark:shadow-[0_12px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-10 sm:py-4 sm:text-[0.9375rem] sm:tracking-[0.36em]">
                    Services
                  </span>
                </div>
                <span
                  aria-hidden
                  className="hidden h-px w-full max-w-[5rem] bg-gradient-to-l from-transparent via-black/28 to-black/10 sm:block sm:max-w-[7.5rem] dark:via-white/30 dark:to-white/12"
                />
                <span
                  aria-hidden
                  className="h-px w-10 shrink-0 bg-gradient-to-l from-transparent to-black/28 dark:to-white/28 sm:hidden"
                />
              </div>
            </div>

            <h2 className="max-w-5xl text-[44px] font-medium leading-[0.92] tracking-[-0.058em] text-black antialiased md:text-[68px] md:leading-[0.93] md:tracking-[-0.052em] lg:text-[80px] lg:leading-[0.92] dark:text-white">
              <span className="font-semibold tracking-[-0.06em] text-black dark:text-white">
                Where innovation
              </span>
              <br />
              <span className="font-normal tracking-[-0.048em] text-black dark:text-white">
                meets{" "}
                <span className="instrument-font text-[1.06em] italic font-normal text-black/88 dark:text-white/78">
                  aesthetics
                </span>
              </span>
            </h2>

            <p className="max-w-2xl text-[1.0625rem] font-light leading-[1.82] tracking-[0.02em] text-black/52 md:text-[1.125rem] md:leading-[1.88] md:tracking-[0.022em] dark:text-white/58">
              Strategy, design, and growth crafted into one seamless premium
              experience for brands that demand distinction.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {innovationList.map((items, index) => {
              const iconSurface =
                iconSurfaceByBg[items.bg_color] ?? "bg-white/80";
              const topAccent =
                cardTopAccent[items.bg_color] ??
                "bg-[linear-gradient(90deg,transparent,rgba(186,129,238,0.85),transparent)]";
              const featureMarker =
                featureMarkerByBg[items.bg_color] ?? "bg-purple text-white";

              return (
                <motion.div
                  key={index}
                  {...cardAnimation(index)}
                  className="group relative flex flex-col overflow-hidden rounded-[26px] border border-black/[0.07] bg-white/[0.88] shadow-[0_2px_8px_rgba(27,29,30,0.04),0_18px_48px_rgba(73,40,253,0.07),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[18px] transition-[transform,box-shadow,border-color] duration-500 ease-out dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:rounded-[30px] sm:p-0 md:hover:-translate-y-1.5 md:hover:border-black/[0.1] md:hover:shadow-[0_24px_64px_rgba(73,40,253,0.12),0_8px_24px_rgba(27,29,30,0.06)] dark:md:hover:border-white/[0.12] dark:md:hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
                >
                  <div
                    aria-hidden
                    className={`h-[3px] w-full shrink-0 ${topAccent} opacity-95 dark:opacity-90`}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-20%,rgba(255,255,255,0.55),transparent_55%)] dark:bg-[radial-gradient(ellipse_100%_50%_at_50%_0%,rgba(255,255,255,0.04),transparent_55%)]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 top-24 h-36 w-36 rounded-full bg-gradient-to-br from-purple/[0.07] to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-purple/10 dark:to-transparent"
                  />

                  <div className="relative flex flex-col gap-5 p-6 sm:gap-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-2xl border border-black/[0.06] ring-2 ring-white/80 shadow-[0_6px_20px_rgba(27,29,30,0.07)] transition-all duration-500 group-hover:-rotate-1 group-hover:shadow-[0_10px_28px_rgba(73,40,253,0.15)] dark:border-white/[0.1] dark:!bg-white/[0.06] dark:ring-1 dark:ring-white/[0.08] dark:shadow-none dark:group-hover:shadow-none sm:h-16 sm:w-16 sm:rounded-[22px] ${iconSurface}`}
                      >
                        <Icon
    icon={items.image}
    width={36}
    height={36}
    className={`transition-transform duration-500 group-hover:scale-[1.06] ${items.txt_color}`}
    style={{ color: 'currentColor' }}
/>
                      </div>
                      <span className="rounded-lg border border-black/[0.06] bg-black/[0.03] px-2 py-1 font-mono text-[11px] font-semibold tabular-nums tracking-[0.12em] text-black/45 dark:border-white/10 dark:bg-white/[0.05] dark:text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-3.5 sm:gap-4">
                      <div className="space-y-2">
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-[11px] ${items.txt_color} dark:opacity-90`}
                        >
                          Offering
                        </p>
                        <h5 className="text-balance text-[1.1875rem] font-semibold leading-[1.28] tracking-[-0.032em] text-dark_black antialiased dark:text-white sm:text-[1.3125rem] sm:leading-[1.3] sm:tracking-[-0.035em]">
                          {items.title.split("\n").map((line, i, arr) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < arr.length - 1 ? <br /> : null}
                            </React.Fragment>
                          ))}
                        </h5>
                      </div>

                      <p className="text-pretty text-[0.90625rem] font-normal leading-[1.72] tracking-[0.014em] text-black/[0.62] antialiased dark:text-white/[0.66] sm:text-[0.96875rem] sm:leading-[1.74] sm:tracking-[0.016em]">
                        {items.description}
                      </p>

                      {items.highlights && items.highlights.length > 0 ? (
                        <ul
                          className="space-y-2 rounded-2xl border border-black/[0.06] bg-gradient-to-b from-black/[0.02] to-transparent px-3.5 py-3 dark:border-white/[0.08] dark:bg-white/[0.03]"
                          aria-label="Key highlights"
                        >
                          {items.highlights.map((line) => (
                            <li
                              key={line}
                              className="relative pl-3 text-[0.8125rem] leading-relaxed text-black/[0.78] before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-dark_black/25 dark:text-white/80 dark:before:bg-white/35 sm:text-[14px]"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {items.features && items.features.length > 0 ? (
                        <div>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40 dark:text-white/45">
                            Includes
                          </p>
                          <ul
                            className="flex flex-col gap-2 sm:gap-2.5"
                            aria-label="Included services"
                          >
                            {items.features.map((f) => (
                              <li key={f}>
                                <span
                                  className="flex w-full items-start gap-2.5 rounded-xl border border-black/[0.06] bg-white/50 px-3 py-2.5 text-left text-[0.8125rem] leading-snug text-black/[0.78] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/80 dark:shadow-none sm:text-[14px]"
                                >
                                  <span
                                    className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-bold leading-none shadow-sm ${featureMarker}`}
                                    aria-hidden
                                  >
                                    ✓
                                  </span>
                                  {f}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            {...ctaAnimation}
            className="relative overflow-hidden rounded-[36px]
            border border-white/10
            bg-black/[0.94]
            px-10 py-10 md:px-14 md:py-12
            shadow-[0_30px_100px_rgba(0,0,0,0.28)]
            dark:border-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%)] dark:bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.06),transparent_35%)]"
            />

            <div className="relative flex flex-col gap-6 xl:flex-row items-center justify-between">
              <h4 className="max-w-xl text-center text-[1.625rem] font-medium leading-[1.22] tracking-[-0.038em] text-white antialiased md:text-[1.875rem] md:leading-[1.2] md:tracking-[-0.04em] xl:text-left">
                See Our Work in Action.
                <br />
                <span className="instrument-font text-[1.05em] font-normal italic tracking-[-0.02em] text-white/90">
                  Start Your Creative Journey with Us!
                </span>
              </h4>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105"
                >
                  Let’s Collaborate
                </Link>

                {/* <Link
                  href="/#work"
                  className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  View Portfolio
                </Link> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;