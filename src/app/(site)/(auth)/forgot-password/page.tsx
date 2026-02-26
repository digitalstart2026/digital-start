import React from "react";
import ForgotPassword from "@/components/Auth/ForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Awake Agency Next.js",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
