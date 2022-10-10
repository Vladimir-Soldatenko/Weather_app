// @ts-nocheck
import { createContext, useState } from "react";

export const AppContext = createContext();

// ============= Provider ==================================
export const AppContextProvider = ({ children }) => {
    const [cityName, setCityName] = useState("Kiev");


    const value = { cityName, setCityName }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};



