import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 Page | Awake Agency ",
};

const ErrorPage = () => {
    return (
        <NotFound />
    );
};

export default ErrorPage;
