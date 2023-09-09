import React from "react";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

export default function MainLayout(): React.ReactNode {
    return (
        <>
            <Navbar />
            <Footer />
        </>
    )
}