import TermsAndCondition from "@/components/TermsAndCondition";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Terms & Condition | Awake Agency",
};

export default function Page() {
    return (
        <main>
            <TermsAndCondition/>
        </main>
    );
};
