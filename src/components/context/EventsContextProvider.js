import Selected_events from "./EventsContext";
import { useState } from "react";

export default function EventsContextProvider(props) {
    const [events, set_events] = useState(new Set());
    const [show_results,set_show_results] = useState(false);
    const [result_events,set_result_events] = useState(new Set());

    return (
        <Selected_events.Provider value={{ events, set_events,show_results,set_show_results,result_events,set_result_events }}>
            {props.children}
        </Selected_events.Provider>
    );
}
