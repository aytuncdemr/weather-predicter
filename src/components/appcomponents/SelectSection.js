import { useContext, useEffect, useState } from "react";
import { Location_context } from "../context/LocationContext";
import Map from "./Map";
import SelectEvent from "./SelectEvent";

export default function SelectSection() {
    const { location, set_location } = useContext(Location_context);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                set_location(position);
            });
        } else set_location(0);
    }, []);

    return (
        <section className="select-section  py-24 px-4">
            {location && (
                <div className="select-container ">
                    <div className="select-top-text text-center mb-12 sm:mb-24">
                        <h2 className="text-2xl font-bold mb-2 sm:mb-6 sm:text-3xl md:text-4xl">
                            Your Location
                        </h2>
                        <p className="text-green-400 text-xl mb-4 sm:mb-12 sm:text-2xl md:text-3xl ">
                            {`${location.coords.latitude}, ${location.coords.longitude}`}
                        </p>{" "}
                        <p className="text-lg text-center sm:text-xl md:text-2xl xl:text-3xl">
                            Your results will be dependent on your location
                        </p>
                    </div>

                    <div className="select-map mb-24">
                        <Map location={location}></Map>
                    </div>

                    <div className="select-event">
                        <SelectEvent></SelectEvent>
                    </div>
                </div>
            )}
            {!location && (
                <p className="text-center text-red-500 text-3xl py-52">
                    You need to allow geolocation in order to use this website
                </p>
            )}
        </section>
    );
}
