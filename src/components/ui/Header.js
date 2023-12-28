import { useState } from "react";
import weather_logo from "../../assets/img/weather-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [is_menu_open, set_menu_open] = useState(false);

    function toggle_menu() {
        set_menu_open((prev_state) => {
            if (!prev_state) {
                // mobile nav opening
                window.scrollTo(0, 0);
                document.body.style.overflow = "hidden";
            } else document.body.style.overflow = "initial";

            return !prev_state;
        });
    }

    return (
        <header className="py-4 px-2 sm:px-6">
            <div className="header-container  flex justify-between items-center">
                <a href="#">
                    <img
                        src={weather_logo}
                        alt="Weather Logo"
                        className="w-[60px] "
                    />
                </a>

                <button
                    className="mobile-nav-toggle z-20 md:hidden"
                    onClick={toggle_menu}
                >
                    {is_menu_open ? (
                        <FontAwesomeIcon className="text-2xl" icon={faClose} />
                    ) : (
                        <FontAwesomeIcon className="text-2xl" icon={faBars} />
                    )}
                </button>

                {is_menu_open && (
                    <nav className="mobile-nav absolute top-0 left-0 w-full min-h-screen bg-red-500 flex items-center justify-center z-10">
                        <ul className="flex flex-col gap-4 text-center text-2xl text-white">
                            <li>
                                <a
                                    href="https://github.com/aytuncdemr/weather-predicter"
                                    target="_blank"
                                    onClick={toggle_menu}
                                >
                                    Source Code
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/aytuncdemr/weather-predicter/blob/main/README.md"
                                    target="_blank"
                                    onClick={toggle_menu}
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#contact-footer" onClick={toggle_menu}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                )}

                <nav className="desktop-nav hidden md:block ">
                    <ul className="flex items-center gap-4 text-xl xl:text-2xl ">
                        <li>
                            <a
                                href="https://github.com/aytuncdemr/weather-predicter"
                                target="_blank"
                            >
                                Source Code
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/aytuncdemr/weather-predicter/blob/main/README.md"
                                target="_blank"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#contact-footer">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
