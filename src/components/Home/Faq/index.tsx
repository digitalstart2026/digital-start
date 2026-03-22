'use client';
import { faqSections } from "@/app/api/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function Faq() {
    return (
        <section>
            <div className="2xl:py-20 py-11">
                <div className="container">
                    <div className="flex flex-col gap-10 md:gap-16">
                        <div className="max-w-xl text-center mx-auto">
                            <h2>Got questions? We’ve got <span className="instrument-font italic font-normal dark:opacity-70">answers</span></h2>
                            <p className="mt-4 text-ink_muted dark:text-white/60 text-base md:text-lg">
                                Local SEO, website SEO, and social media—clear answers for Jaipur businesses.
                            </p>
                        </div>
                        <div className="flex flex-col gap-12 md:gap-14 max-w-3xl mx-auto w-full">
                            {faqSections.map((section, sectionIndex) => (
                                <div key={section.title} className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-1 border-b border-dark_black/[0.08] dark:border-white/15 pb-4">
                                        {/* <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink_muted dark:text-white/50">
                                            {String(sectionIndex + 1).padStart(2, "0")}
                                        </p> */}
                                        <h3 className="text-lg md:text-xl font-medium text-dark_black dark:text-white">
                                            {section.title}
                                        </h3>
                                    </div>
                                    <Accordion type="single" collapsible className="flex flex-col gap-3">
                                        {section.items.map((item, itemIndex) => {
                                            const value = `section-${sectionIndex}-item-${itemIndex}`;
                                            return (
                                                <AccordionItem
                                                    key={value}
                                                    value={value}
                                                    className="p-5 md:p-6 rounded-2xl border border-dark_black/[0.07] bg-surface_elevated/95 shadow-soft backdrop-blur-sm dark:border-white/50 dark:bg-transparent dark:shadow-none dark:backdrop-blur-none"
                                                >
                                                    <AccordionTrigger className="hover:no-underline [&>svg]:text-dark_black/50 dark:[&>svg]:text-white/50">
                                                        <h4 className="text-left text-base md:text-lg font-medium text-dark_black dark:text-white pr-4">
                                                            {item.faq_que}
                                                        </h4>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="!opacity-100 text-dark_black/85 dark:text-white/80 leading-relaxed">
                                                        <p>{item.faq_ans}</p>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
