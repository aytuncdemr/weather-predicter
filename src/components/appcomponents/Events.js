import { useContext } from "react";
import Selected_events from "../context/EventsContext";
import Event from "./Event";
export default function Events() {

    const { events, set_events } = useContext(Selected_events);

    const events_options = [
        "Football",
        "Picnic",
        "Tennis",
        "Jogging",
        "Fishing",
        "Gardening",
        "Cycling",
        "Surfing",
        "Camping",
        "Swimming",
        "Parachuting",
        "Skateboarding",
    ];

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-24">
            {events_options.map((elem, index) => {
                return (
                    <li key={index}>
                        <Event title={elem} set_events={set_events} ></Event>
                    </li>
                );
            })}
        </ul>
    );
}
