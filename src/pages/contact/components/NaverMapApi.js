import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
  InfoWindow,
} from "react-naver-maps";
import { useState } from "react";

const NaverMapApi = () => {
  const navermaps = useNavermaps();
  const LatLng = new navermaps.LatLng(37.4717, 126.8835);
  const contentString = '<div style="padding:5px;">Hello World!</div>';

  const [minZoom, setMinZoom] = useState(7);
  const [scaleControl, setScaleControl] = useState(true);

  const normalBtnStyle = {
    backgroundColor: "#fff",
    border: "solid 1px #333",
    outline: "0 none",
    borderRadius: "5px",
    boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.5)",
    margin: "0 5px 5px 0",
  };

  const selectedBtnStyle = {
    ...normalBtnStyle,
    backgroundColor: "#2780E3",
    color: "white",
  };

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <button
        onClick={() => {
          setMinZoom((prev) => (prev === 10 ? 7 : 10));
        }}
      >
        최소/최대 줌 레벨: {minZoom} ~ 21
      </button>
      <button
        style={scaleControl ? selectedBtnStyle : normalBtnStyle}
        onClick={() => {
          setScaleControl((prev) => !prev);
        }}
      ></button>
      <NaverMap
        defaultCenter={LatLng}
        defaultZoom={15}
        mapTypeControl={scaleControl}
        zoomControl
        zoomControlOptions={{
          position: navermaps.Position.TOP_LEFT,
        }}
      >
        <Marker position={LatLng} />
        <InfoWindow content={contentString} />
        {/* <InfoWindow/> */}
      </NaverMap>
    </MapDiv>
  );
};

export default NaverMapApi;
