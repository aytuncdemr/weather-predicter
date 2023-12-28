import { createContext } from "react";

export const Location_context = createContext({
    location: null,
    set_location: () => {},
});
