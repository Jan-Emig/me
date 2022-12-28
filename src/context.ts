import { createContext } from "react";

interface MouseContext {
    visible: boolean;
    toggleVisibility?: () => void;
}

const defaultState = {
    visible: true,
}

const MouseContext = createContext<MouseContext>(defaultState);

export default MouseContext;