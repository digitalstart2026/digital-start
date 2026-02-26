
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Home/Faq";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Awake Agency",
};

export default function Page() {
    return (
        <main>
            <ContactForm/>
            <Faq/>
        </main>
    );
};
