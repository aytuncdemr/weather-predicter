import { useState } from "react";

export default function Event(props){

    const [selected,set_selected] = useState(false);

    function toggle_selected(){

        set_selected((prev_state) => {

            if(!prev_state){ // adding event to set

                props.set_events((prev_state) =>{

                    return new Set([...prev_state,props.title]);
                });

            }
            else
                props.set_events((prev_state) =>{ // deleting the event from the set

                    const new_event_set = new Set([...prev_state]);

                    new_event_set.delete(props.title);

                    return new_event_set;
                })

            return !prev_state;
        });

    }

    return (

        <button onClick={toggle_selected} className={`${selected ? "bg-green-500 text-white" : ""} rounded-full border-2 w-[60%] max-w-[16rem]  border-gray-500 py-4 px-8 text-lg font-bold`}>{props.title}</button>

    );
}