'use client';

import React from "react";
import dynamic from "next/dynamic";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const Menu = dynamic(
    () => import("@/widgets/menu").then((module) => module.Menu),
    { ssr: false }
);

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const DefaultLayout: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={className}>
            <Header />
            <Menu />
            {children}
            <Footer />
        </div>
    );
};
