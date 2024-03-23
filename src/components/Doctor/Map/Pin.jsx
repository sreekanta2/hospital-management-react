import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import image from "../../../assets/doctor-thumb-02.jpg";
import successImg from "../../../assets/success.png";
import StarRating from "../../../ui/StarRating";

export default function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="  bg-white w-44   ">
          <div>
            <div className="overflow-hidden">
              <img
                src={image}
                className="   cursor-pointer duration-500 hover:scale-125 transition-transform group-hover:opacity-50"
                alt="background image"
              />
            </div>
            <div>
              <div className="flex gap-4 mt-4">
                <Link
                  to={`/doctor/${item.id}/overview`}
                  className="font-semibold "
                >
                  Rubey Perrin
                </Link>
                <img
                  src={successImg}
                  width={15}
                  height={15}
                  alt="success image"
                />
              </div>
              <p className="text-[12px] text-gray-500 mt-3">
                BDS,MDS - Oral & Maxillofacial Surgery
              </p>
              <div>
                <StarRating rating={3} />
              </div>

              <div className="flex flex-col mt-2">
                <i className="ri-map-pin-fill text-gray-400">Florida,USA</i>

                <i className="ri-time-fill text-gray-400">
                  Available obn fir,22 Mar
                </i>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
