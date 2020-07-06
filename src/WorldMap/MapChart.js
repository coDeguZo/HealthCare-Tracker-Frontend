import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([1, 100000])
  .range(["#ffedea", "#ff5233"]);

const MapChart = () => {
  const [data, setData] = useState([]);

   useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
    .then(resp => resp.json())
    .then(data => {
      for(let i = 0; i < data.length; i++){
        // data[i].cases = data[i].cases * 0.01
        // if(data[i].cases){
          debugger
        // }
      }
      setData(data)})
  }, []);

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
      className="world-map"
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data.length > 0 && (
        <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = data.find(s => s.country === geo.properties.NAME || s.country === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["cases"]) : "#F5F4F6"}
                />
              );
            })
          }
        </Geographies>
        </ZoomableGroup>
      )}
    </ComposableMap>
  );
};

export default MapChart;