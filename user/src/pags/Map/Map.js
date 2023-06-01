import React, { useEffect, Component } from "react";
import { Link, useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import "./Map.css";
import ReactDOMServer from "react-dom/server";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { Map } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { FaMapMarkerAlt } from "react-icons/fa";

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

class MyMap extends Component {
  state = {
    lat: 32.6546,
    lng: 51.6674,
    zoom: 12,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div >
        <div className="map">
          <MapContainer
            className="map leaflet-left "
            center={position}
            zoom={this.state.zoom}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>  contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <createLeafletElement />

            <Marker position={position} icon={MarkerIcon()}>
              <Popup> popup text</Popup>
            </Marker>
            <Search provider={new OpenStreetMapProvider()} />
          </MapContainer>
          <div style={{ marginTop: "15px" }}>
            {/* <Link to="/main">
               <Button value="ثبت" /> 
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}
export default MyMap;
