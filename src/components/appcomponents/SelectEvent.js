import { useContext } from "react";
import Events from "./Events";
import Selected_events from "../context/EventsContext";

export default function SelectEvent() {
    const { set_show_results,set_result_events,events } = useContext(Selected_events);

    return (
        <div className="select-event-top-text text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl text-gray-800 mb-12 md:mb-16 xl:mb-24 font-bold">
                What would you like to do this week ?
            </h2>

            <Events></Events>

            <button
                onClick={() => {
                    set_show_results(true);
                    set_result_events(events);

                }}
                className="text-xl font-bold border-4 max-w-[18rem] hover:text-gray-400 hover:border-gray-400 border-black rounded-2xl w-2/3 py-4"
            >
               Show Me Results
            </button>
        </div>
    );
}
