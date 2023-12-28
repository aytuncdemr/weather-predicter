import { createContext } from "react";

const Selected_events = createContext({
    events: new Set(),
    set_events: () => {},
    show_results: false,
    set_show_results: () => {},
    set_result_events: () => {},
    result_events: new Set(),
});

export default Selected_events;
