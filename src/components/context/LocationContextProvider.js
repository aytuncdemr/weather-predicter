import { useEffect, useState } from "react";
import { Location_context } from "./LocationContext";

export default function LocationContextProvider(props) {
    
    const [location, set_location] = useState(null);

    return (
        <Location_context.Provider
            value={{ location, set_location }}
            
        >{props.children}</Location_context.Provider>
    );
}
