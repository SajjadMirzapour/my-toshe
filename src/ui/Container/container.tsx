'use client'

import { useState } from "react";
import Header from "../Header/header";
import DAshboard from "../Dashboard/dashboard";

function Container({ children }: any) {
    const [showDashboard, setShowDashboard] = useState(false)
    return (
        <div>
            <Header setShowDashboard={setShowDashboard} />
            <DAshboard showDashboard={showDashboard} setShowDashboard={setShowDashboard} />
            {children}
        </div>
    );
}

export default Container;