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
  .domain([1, 15])
  // .range(["#ffedea", "#ab0e03"])
  .range(["#ffedea", "#DC143C "]);

const NumberOfCases = () => {
  const [data, setData] = useState([]);

   useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
    .then(resp => resp.json())
    .then(data => {
      // debugger
      for(let i = 0; i < data.length; i++){
        if(data[i] === "USA"){
          data[i].country = "United States of America"
        }
        if(data[i] === "UK"){
          data[i].country = "United Kingdom"
        }
        if(data[i] === "UAE"){
          data[i].country = "United Arab Emirates"
        }
        if(data[i] === "S. Korea"){
          data[i].country = "South Korea"
        }
        if(data[i] === "Ivory Coast"){
          data[i].country = "Côte d'Ivoire"
        }
        if(data[i] === "DCR"){
          data[i].country = "Dem. Rep. Congo"
        }
        if(data[i] === "North Macedonia"){
          data[i].country = "Macedonia"
        }
        if(data[i] === "CAR"){
          data[i].country = "Central African Rep."
        }
        data[i].cases = Math.log(data[i].cases)
      }
      // debugger
      // data[1].country = "United States of America"
      // data[8].country = "United Kingdom"
      // data[30].country = "United Arab Emirates"
      // data[63].country = "South Korea"
      // data[66].country = "Côte d'Ivoire"
      // data[77].country = "Dem. Rep. Congo"
      // data[78].country = "Macedonia"
      // data[94].country = "Central African Rep."
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
              const d = data.find(s => s.country === geo.properties.NAME || s.country === geo.properties.ISO_A3 || s.country === geo.properties.NAME_LONG || s.country === geo.properties.FORMAL_EN);
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

export default NumberOfCases;