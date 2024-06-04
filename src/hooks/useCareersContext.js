import { useContext } from "react";
import { CareersContext } from "../context/CareersContext";

 export const useCareersContext = () => {
    const context = useContext(CareersContext);

    if(!context) {
        throw Error('CareersContext cannot be found')
    }

    return context;
 }