// import React, { useEffect, Component } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import "leaflet/dist/leaflet.css";
// import L, { Icon } from "leaflet";
// import "./Map.css";
// import ReactDOMServer from "react-dom/server";
// import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
// import { Map } from "react-leaflet";
// import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import Img from "../../img/coffee.jpg";
// const MarkerIcon = () => {
//   const iconMarkup = ReactDOMServer.renderToString(
//     <FaMapMarkerAlt size={40} color="#846046" />
//   );
//   return L.divIcon({
//     html: iconMarkup,
//     className: "my-custom-icon",
//   });
// };
// const Search = (props) => {
//   const map = useMap();
//   const { provider } = props;
//   const popupContent = "Click the image to display it in full size:<br>";
//   useEffect(() => {
//     const searchControl = new GeoSearchControl({
//       provider,
//     });

//     map.addControl(searchControl); 
//     return () => map.removeControl(searchControl);
//   }, [props]);

//   return <div></div>;
// };

//  const cafes = [
//       { id: 1, name: "کافه لوتوس", lat: 32.7000, lng: 51.6674 },
//       { id: 2, name: "کافه دلپذیر", lat: 32.6538, lng: 51.7065 },
//       { id: 3, name: "کافه نگار", lat: 32.6552, lng: 51.6683 },
//     ];
// class MyMap extends Component {
//   state = {
//     lat: 32.6546,
//     lng: 51.6674,
//     zoom: 12,
//     cafes: cafes,
//     // cafes: [],
//   };
//   handleCafeLocationClick = () => {
//     navigate(`/home/cafepage/${cafe.id}`);
//   }

//   componentDidMount() {
//     fetch("URL_OF_YOUR_API_ENDPOINT")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ cafes: data });
//       })
//       .catch((error) => {
//         console.error("Error fetching cafes:", error);
//       });
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     const { cafes } = this.state; 
//     const navigate= useNavigate()
 
//     return (
//       <div>
//         <div className="map">
//           <MapContainer
//             className="map leaflet-left"
//             center={position}
//             zoom={this.state.zoom}
//             scrollWheelZoom={true}
//           >
//             <TileLayer
//               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>  contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />

//             {cafes.map((cafe) => (
//               <Marker
//                 key={cafe.id}
//                 position={[cafe.lat, cafe.lng]}
//                 icon={MarkerIcon()}
//               >
//                 <Popup>
//                   <div  style={{ display: "flex", flexDirection: "row-reverse" }} onClick={this.handleCafeLocationClick}>
//                     <img
//                       src={Img}
//                       style={{ width: "40px", height: "40px", borderRadius: "20px" }}
//                       alt="کافه"
//                     />
//                     <p style={{ fontSize: "15px", fontFamily:"IRANSSansXLight"}}>{cafe.name}</p>
//                   </div>
//                 </Popup>
//               </Marker>
//             ))}

//             <Search provider={new OpenStreetMapProvider()} />
//           </MapContainer>
//         </div>
//       </div>
//     );
//   }
// }
// export default MyMap;
import React, { useEffect, Component } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import "./Map.css";
import ReactDOMServer from "react-dom/server";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { Map } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { FaMapMarkerAlt } from "react-icons/fa";
import Img from "../../img/coffee.jpg";

const MarkerIcon = () => {
  const iconMarkup = ReactDOMServer.renderToString(
    <FaMapMarkerAlt size={40} color="#846046" />
  );
  return L.divIcon({
    html: iconMarkup,
    className: "my-custom-icon",
  });
};

const Search = (props) => {
  const map = useMap();
  const { provider } = props;
  const popupContent = "Click the image to display it in full size:<br>";
  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider,
    });

    map.addControl(searchControl); 
    return () => map.removeControl(searchControl);
  }, [props]);

  return <div></div>;
};

const cafes = [
  { id: 1, name: "کافه لوتوس", lat: 32.7000, lng: 51.6674 },
  { id: 2, name: "کافه دلپذیر", lat: 32.6538, lng: 51.7065 },
  { id: 3, name: "کافه نگار", lat: 32.6552, lng: 51.6683 },
];

class MyMap extends Component {
  state = {
    lat: 32.6546,
    lng: 51.6674,
    zoom: 12,
    cafes: cafes,
    // cafes: [],
  };

  componentDidMount() {
    fetch("URL_OF_YOUR_API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cafes: data });
      })
      .catch((error) => {
        console.error("Error fetching cafes:", error);
      });
  }

  handleCafeLocationClick = (cafeId) => {
    useNavigate(`/home/cafepage/${cafeId}`);
    // Implement your navigation logic here
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const { cafes } = this.state;

    return (
      <div>
        <div className="map">
          <MapContainer
            className="map leaflet-left"
            center={position}
            zoom={this.state.zoom}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>  contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {cafes.map((cafe) => (
              <Marker
                key={cafe.id}
                position={[cafe.lat, cafe.lng]}
                icon={MarkerIcon()}
              >
                <Popup>
                  <div
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                    onClick={() => this.handleCafeLocationClick(cafe.id)}
                  >
                    <img
                      src={Img}
                      style={{ width: "40px", height: "40px", borderRadius: "20px" }}
                      alt="کافه"
                    />
                    <p style={{ fontSize: "15px", fontFamily: "IRANSSansXLight" }}>{cafe.name}</p>
                  </div>
                </Popup>
              </Marker>
            ))}

            <Search provider={new OpenStreetMapProvider()} />
          </MapContainer>
        </div>
      </div>
    );
  }
}

export default MyMap;
