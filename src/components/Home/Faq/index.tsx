'use client';
import { faqList } from "@/app/api/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function Faq() {
    return (
        <section>
            <div className="2xl:py-20 py-11">
                <div className="container">
                    <div className="flex flex-col gap-10 md:gap-20">
                        <div className="max-w-md text-center mx-auto">
                            <h2>Got questions? We’ve got <span className="instrument-font italic font-normal dark:opacity-70">answers</span></h2>
                        </div>
                        <div className="flex flex-col">
                            <Accordion type="single" collapsible className="flex flex-col gap-4">
                                {faqList.map((item, index) => (
                                    <AccordionItem 
                                        key={index} 
                                        value={`item-${index}`}
                                        className="p-6 border border-dark_black/10 dark:border-white/50"
                                    >
                                        <AccordionTrigger>
                                            <h4 className="text-dark_black dark:text-white dark:text-opacity-80">{item.faq_que}</h4>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p>{item.faq_ans}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
