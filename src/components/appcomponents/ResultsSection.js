import Selected_events from "../context/EventsContext";
import { useContext, useEffect, useState } from "react";
import Results from "./Results";
import { Location_context } from "../context/LocationContext";
import { memo } from "react";
export default memo(function ResultsSection() {
    const { result_events, show_results, set_show_results } =
        useContext(Selected_events);
    const { location } = useContext(Location_context);
    const [weather_data,set_weather_data] = useState(null);

    useEffect(() => {
        if (result_events.size > 0 && location && show_results) {

            (async function get_weather_data() {
                const response = await fetch(
                    `http://api.weatherapi.com/v1/forecast.json?key=dbb3e6491001489c929103407231605&days=7&q=${location.coords.latitude},${location.coords.longitude}`
                );

                const data = await response.json();

                set_weather_data(data);

            })();

        }
    }, [result_events, location,show_results]);

    return (
        
        <section className="results-section  py-24 px-4" id="results-section">
            {show_results && (
                <div className="results-container  px-4 py-4">

                    {weather_data && <Results events={result_events} weather_data={weather_data}></Results>}

                </div>
            )}
        </section>
    );
})
