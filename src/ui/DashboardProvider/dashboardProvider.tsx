'use client'

import ThemeProvider from "@/lib/provider/themeProvider";
import Header from "../Header/header";

function DashboardProvider( {children} : any) {
    return ( 
        <div>
            <ThemeProvider >
                <Header />
                {children}
            </ThemeProvider>
        </div>
     );
}

export default DashboardProvider;