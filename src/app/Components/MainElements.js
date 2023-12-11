'use client'

import Headers from "@/app/Components/Headers";
import {ThemeProvider} from "next-themes";

const MainElements = ({children}) => {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className="max-w-6xl mx-auto">
                <Headers/>
                {children}
            </div>
        </ThemeProvider>


    );
};

export default MainElements;