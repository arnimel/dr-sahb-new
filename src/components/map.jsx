import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapObj, setMapObj] = useState(null);
  const [lng] = useState(72.89746376789275);
  const [lat] = useState(19.072311226431207);
  const [zoom] = useState(14);
  const [API_KEY] = useState("9MHKIU3Lqi6GpIQ0G0G6");

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    setMapObj(map.current);
  }, [API_KEY, lng, lat, zoom]);

  useEffect(() => {
    if (mapObj) {
      // Add geolocate control to the map.
      mapObj.addControl(
        new maplibregl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        }),
        "bottom-right"
      );
      const hospitalDataJson = {
        hospitals: [
          {
            name: "CritiCare Asia Hospital",
            rating: 4.5,
            reviews: 3280,
            address:
              "Building No 1, Kirol Road, Kirol Rd, off Lal Bahadur Shastri Marg, near Kohinoor International School",
            phone: "022 6755 6755",
            location: [72.88604588268747, 19.077775755279504],
          },
          {
            name: "Zen Multi Speciality Hospital",
            rating: 4.5,
            reviews: 2543,
            address: "Plot No, 425, 10th Rd, near Sandu Garden",
            phone: "022 3520 5600",
            location: [72.89703221059517, 19.05725200954277],
          },
          {
            name: "Rajawadi Hospital",
            rating: 3.8,
            reviews: 427,
            address: "3WH2+FFG",
            phone: "022 2511 5066",
            location: [72.90094924183673, 19.07939879519679],
          },
          {
            name: "Parakh Hospital",
            rating: 4.4,
            reviews: 754,
            address: "Khokani Lane, Opp. Ghatkopar Railway Station",
            phone: "022 6782 7000",
            location: [72.9079327078161, 19.086211656663732],
          },
          {
            name: "Paramount General Hospital & ICCU",
            rating: 4.2,
            reviews: 594,
            address:
              "Laxmi Commercial Premises, Near Sakinaka Junction, Andheri Kurla Road Andheri East, Magan Nathuram Rd",
            phone: "022 4609 7461",
            location: [72.88726902782298, 19.10615515508926],
          },
          {
            name: "City Hospital & Research Centre",
            rating: 2.8,
            reviews: 361,
            address: "Sagar Palace A, City, Sonapur Ln",
            phone: "099870 38888",
            location: [72.88250721411485, 19.08336570097959],
          },
          {
            name: "Nulife Hospital",
            rating: 3.8,
            reviews: 177,
            address:
              "A1, Harekrishna Building, 1st Floor, Near Telephone Exchange, A1, Harekrishna Bldg, Lal Bahadur Shastri Marg",
            phone: "Phone number here",
            location: [72.90482319267741, 19.08969245375228],
          },
          {
            name: "Sai Hospital",
            rating: 4.0,
            reviews: 269,
            address:
              "Shree Chambur, Vikas Building, Ganesh Co-operative Housing LTD, 566, Sion - Trombay Rd",
            phone: "022 2526 4201",
            location: [72.90001548921336, 19.05656272528722],
          },
          {
            name: "Sushrut Hospital & Research Centre",
            rating: 4.3,
            reviews: 1311,
            address: "365, Sant Vershaw Kakkaya Marg",
            phone: "093727 45480",
            location: [72.8776677971653, 19.059222632891224],
          },
          {
            name: "Dr. Chauhan's Sanjeevani Hospital",
            rating: 3.6,
            reviews: 25,
            address:
              "Dr. Chauhan's Sanjeevani Hospital, Police Station, Pestom Sagar Rd Number 4, near Holy Family School, opp. Pestom Sagar",
            phone: "093211 18884",
            location: [72.90614041221912, 19.07361668670732],
          },
        ],
      };
      // Assuming the JSON data is stored in a variable called 'hospitalsData'

      hospitalDataJson.hospitals.forEach((hospital) => {
        const stars = "★".repeat(Math.floor(hospital.rating));
        const ratingText = document.createElement("span");
        ratingText.classList.add("rating");
        ratingText.textContent = `(${hospital.rating})`;
        const popupContent = `
          <h2>${hospital.name}</h2>
          </br>
          <div>${stars} ${ratingText.outerHTML}</div>
          <div>Reviews: ${hospital.reviews}</div>
          <div class="address">Address: ${hospital.address}</div>
          <div class="phone">Phone: <a href="tel:${hospital.phone}">${hospital.phone}</a></div>
        `;

        const popup = new maplibregl.Popup({ offset: 25 })
          .setHTML(popupContent)
          .setMaxWidth("300px");

        new maplibregl.Marker()
          .setLngLat(hospital.location)
          .setPopup(popup)
          .addTo(mapObj);
      });
    }
  }, [mapObj]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
