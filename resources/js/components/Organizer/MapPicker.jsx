// // components/MapPicker.jsx
// import L from "leaflet";
// import { useState } from "react";
// import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

// // Default marker icon fix (otherwise marker won't show properly in some setups)
// import "leaflet/dist/leaflet.css";
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// const LocationMarker = ({ onSelect }) => {
//   const [position, setPosition] = useState(null);

//   useMapEvents({
//     click(e) {
//       const { lat, lng } = e.latlng;
//       setPosition([lat, lng]);
//       onSelect({ lat, lng });
//     },
//   });

//   return position ? <Marker position={position} /> : null;
// };

// export default function MapPicker({ onSelect }) {
//   return (
//     <MapContainer
//       center={[27.7172, 85.3240]} // Default center Kathmandu
//       zoom={13}
//       style={{ height: "400px", width: "100%", borderRadius: "10px" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LocationMarker onSelect={onSelect} />
//     </MapContainer>
//   );
// }

import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { reverseGeocode } from "../../utils/geocode"; // the helper we created earlier

const LocationMarker = ({ onSelect }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      // fetch address
      const address = await reverseGeocode(lat, lng);

      console.log("📍 Selected Address:", address);

      // pass back to parent
      onSelect({ lat, lng, address });
    },
  });

  return position ? <Marker position={position} /> : null;
};

export default function MapPicker({ onSelect }) {
  return (
    <MapContainer
      center={[27.7172, 85.3240]} // Kathmandu default
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <LocationMarker onSelect={onSelect} />
    </MapContainer>
  );
}
