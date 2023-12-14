'use client'

import Headers from "@/app/Components/Headers";
import {ThemeProvider} from "next-themes";
import Navbar from "@/app/Components/Navbar";

const MainElements = ({children}) => {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className="">
                <Headers/>
                <Navbar/>
                <div className="max-w-7xl px-2 mx-auto ">
                    {children}
                </div>

            </div>
        </ThemeProvider>


    );
};

export default MainElements;