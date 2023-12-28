import EventsContextProvider from "./EventsContextProvider";
import LocationContextProvider from "./LocationContextProvider";

export default function GeneralProvider(props){

    return (

        <LocationContextProvider>

            <EventsContextProvider>

                {props.children}

            </EventsContextProvider>

        </LocationContextProvider>

    );
}