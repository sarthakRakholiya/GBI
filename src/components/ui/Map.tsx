import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Replace with your actual Mapbox access token
mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

interface MapProps {
  mainOffice: {
    name: string;
    coordinates: [number, number];
  };
  salesOffice: {
    name: string;
    coordinates: [number, number];
  };
}

const Map: React.FC<MapProps> = ({ mainOffice, salesOffice }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [
        (mainOffice.coordinates[0] + salesOffice.coordinates[0]) / 2,
        (mainOffice.coordinates[1] + salesOffice.coordinates[1]) / 2,
      ],
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add markers for both locations
    const mainOfficeMarker = new mapboxgl.Marker({ color: "#E53E3E" })
      .setLngLat(mainOffice.coordinates)
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${mainOffice.name}</h3>`))
      .addTo(map.current);

    const salesOfficeMarker = new mapboxgl.Marker({ color: "#3182CE" })
      .setLngLat(salesOffice.coordinates)
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${salesOffice.name}</h3>`))
      .addTo(map.current);

    // Fit bounds to include both markers
    const bounds = new mapboxgl.LngLatBounds()
      .extend(mainOffice.coordinates)
      .extend(salesOffice.coordinates);

    map.current.fitBounds(bounds, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
    });

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mainOffice, salesOffice]);

  return (
    <div
      ref={mapContainer}
      className="w-[400px] h-[400px] rounded-lg overflow-hidden"
    />
  );
};

export default Map;
