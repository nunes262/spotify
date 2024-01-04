import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import { SideBar, CentralDisplay, Footer } from "@/components";
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
} from "lucide-react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 flex">
                <SideBar />
                <CentralDisplay />
            </div>
            <Footer />
        </div>
    );
}
