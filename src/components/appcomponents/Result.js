import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import {memo} from "react";

export default memo(function Result(props) {
    const [days, set_days] = useState([]);

    const activity = props.title.toLowerCase();
    const weather_data = props.weather_data;

    function calculate_day_score(
        avg_temp,
        max_temp,
        min_temp,
        max_wind,
        condition
    ) {
        for (const day of weather_data.forecast.forecastday) {
            let bad_score = 0;

            bad_score += Math.abs(avg_temp - day.day.avgtemp_c);
            bad_score += Math.abs(max_temp - day.day.maxtemp_c);
            bad_score += Math.abs(min_temp - day.day.mintemp_c);
            bad_score += Math.abs(max_wind - day.day.maxwind_kph);
            bad_score += day.day.condition.text !== condition ? 25 : 0;
            bad_score += day.day.daily_chance_of_rain ? 50 : 0;
            bad_score += day.day.daily_chance_of_snow ? 50 : 0;

            bad_score = bad_score.toFixed(2);

            set_days((prev_state) => {
                return [
                    ...prev_state,
                    {
                        avg_temp: day.day.avgtemp_c,
                        max_temp: day.day.maxtemp_c,
                        min_temp: day.day.mintemp_c,
                        max_wind: day.day.maxwind_kph,
                        weather:day.day.condition.icon,
                        score: bad_score,
                        date: day.date,
                    },
                ];
            });
        }
        sort_days();
    }

    function sort_days() {
        days.sort((elem1, elem2) => {
            return elem1.score > elem2.score;
        });
    }

    useEffect(() => {
        switch (activity) {
            case "football":
                calculate_day_score(26, 38, 16, 12, "Partly Cloud");

                break;
            case "picnic":
                calculate_day_score(30, 40, 10, 12, "Sunny");

                break;

            case "tennis":
                calculate_day_score(26, 38, 16, 12, "Sunny");

                break;

            case "jogging":
                calculate_day_score(25, 36, 18, 12, "Partly Cloud");
                break;

            case "fishing":
                calculate_day_score(25, 40, 18, 12, "Parlty Cloud");
                break;
            case "gardening":
                calculate_day_score(25, 32, 12, 8, "Sunny");
                break;
            case "cycling":
                calculate_day_score(20, 28, 14, 12, "Partly Cloud");
                break;
            case "surfing":
                calculate_day_score(30, 40, 26, 8, "Sunny");
                break;
            case "camping":
                calculate_day_score(30, 40, 26, 8, "Partly Cloud");
                break;
            case "swimming":
                calculate_day_score(30, 40, 26, 8, "Sunny");
                break;
            case "parachuting":
                calculate_day_score(30, 40, 26, 6, "Partly Cloud");
                break;
            case "skateboarding":
                calculate_day_score(26, 36, 20, 12, "Sunny");
                break;

            default:
                break;
        }
    }, []);

    return (
        <div className="result">
            <div className="result-top-text text-left mb-8">
                <h3 className="text-xl font-bold activity-title inline-block md:text-3xl sm:text-2xl">{props.title}</h3>
            </div>

            <div className="result-cards flex flex-col gap-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6">
                    {days.map((elem, index,array) => {
                        return (
                            <li key={index}>
                                <div className={`result-card border-2 max-w-[24rem] ${index === 0 && "best-day"} ${index === array.length - 1 && "worst-day"} border-gray-300 py-4 px-4 rounded-lg`}>
                                    <h2 className="text-center font-bold text-2xl mb-4 text-gray-400">{elem.date}</h2>

                                    <div className="flex justify-center mb-4 ">
                                    <img src={`${elem.weather}`} alt="Weather Logo"  />
                                    </div>
                                    <div className="font-bold text-md flex flex-col gap-3 sm:gap-6 md:gap-8 sm:text-lg md:text-xl  day-information">
                                    <p>Score: {elem.score}</p>
                                    <p>Average temperature: {elem.avg_temp}</p>
                                    <p>Maximum temperature: {elem.max_temp}</p>
                                    <p>Minimum temperature: {elem.min_temp}</p>
                                    <p>Wind: {elem.max_wind}</p>
                                    </div>
                                    
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
});
