import { createContext } from "react";

export const showDashboardContext = createContext(null)

export default function DashboardProvider({ children }) {
    const value = useState(null);
    return <showDashboardContext.Provider>{children}</showDashboardContext.Provider>;
}