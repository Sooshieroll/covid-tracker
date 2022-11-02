import React from React,
import "./map.css";
import { Map as LeafletMap, TileLayer } from "react"

function Map({ countries, center, zoom }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer>
                    url="https://{s}.tile.openstreetmap.org
                    attribution='&copy; <a href=""></a>
                    />
                {/* Loop through countries and draw circles on the screen */}
            </LeafletMap>
        </div>
    );
}

export default Map;