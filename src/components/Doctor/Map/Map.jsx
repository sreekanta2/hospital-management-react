import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { listData } from "../../../dummaydata";
import Pin from "./Pin";
export default function Map() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={5}
      scrollWheelZoom={true}
      className=" w-full  h-[600px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listData.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}
