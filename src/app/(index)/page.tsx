"use client";
import PageFooter from "@/components/layouts/PageFooter";
import PageHeader from "@/components/layouts/PageHeader";
import CanvasBubbleFly from "@/components/modules/canvas-bubble-fly";
import React from "react";

const page = () => {
    return (
        <div className="home-page">
            <div className="container">
                <PageHeader />
                <div id="canvas-print">
                    <CanvasBubbleFly />
                </div>
                <PageFooter />
            </div>
        </div>
    );
};

export default page;
