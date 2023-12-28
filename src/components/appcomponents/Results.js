import Result from "./Result";
import React, { useEffect, useState } from "react";

export default function Results(props) {
    const [results_rendered, set_results_rendered] = useState(true);

    useEffect(() => {
        document
            .querySelector("#results-section")
            .scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <React.Fragment>
            <div className="results-top-text text-center mb-16 md:mb-20">
                <h2 className="text-4xl md:text-5xl">Results</h2>
            </div>

            <ul className="flex flex-col gap-16">
                {new Array(...props.events).map((elem, index) => {
                    return (
                        <li key={index}>
                            <Result
                                title={elem}
                                weather_data={props.weather_data}
                            ></Result>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
}
