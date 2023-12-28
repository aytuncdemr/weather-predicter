import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map(props) {
    const position = [
        props.location.coords.latitude,
        props.location.coords.longitude,
    ];

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-[300px] z-0"
            zoomControl={false}
            doubleClickZoom= {false} 
            closePopupOnClick= {false} 
            dragging= {false}
            zoomSnap= {false} 
            zoomDelta= {false} 
            trackResize= {false}
            touchZoom= {false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {" "}
                    <p className="font-bold text-lg text-green-500">
                        You're here
                    </p>{" "}
                </Popup>
            </Marker>
        </MapContainer>
    );
}
