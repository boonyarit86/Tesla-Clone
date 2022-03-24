import { createContext, useState } from "react";

export const stateContext = createContext({
    isBackdropOpen: false,
    handleBackdrop: () => {}
});

export const useStateContext = () => {
    const [isBackdropOpen, setIsBackdropOpen] = useState(false);

    const handleBackdrop = () => {
        setIsBackdropOpen(prev => !prev);
    }

    return { isBackdropOpen, handleBackdrop }
}