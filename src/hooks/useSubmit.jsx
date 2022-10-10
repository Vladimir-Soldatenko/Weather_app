import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useSubmit = () => {
    const { setCityName } = useContext(AppContext);
    return (text) => setCityName(text)
}