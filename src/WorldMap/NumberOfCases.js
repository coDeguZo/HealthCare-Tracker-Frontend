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
import {connect} from 'react-redux'

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
        if(data[i].country === "USA"){
          data[i].country = "United States of America"
        }
        if(data[i].country === "UK"){
          data[i].country = "United Kingdom"
        }
        if(data[i].country === "UAE"){
          data[i].country = "United Arab Emirates"
        }
        if(data[i].country === "S. Korea"){
          data[i].country = "South Korea"
        }
        if(data[i].country === "Ivory Coast"){
          data[i].country = "Côte d'Ivoire"
        }
        if(data[i].country === "DRC"){
          data[i].country = "Dem. Rep. Congo"
        }
        if(data[i].country === "North Macedonia"){
          data[i].country = "Macedonia"
        }
        if(data[i].country === "CAR"){
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
    <div className="map-chart-div">
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
      className="world-map"
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5}/>
      {data.length > 0 && (
        <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) => 
            geographies.map(geo => {
              const d = data.find(s => s.country === geo.properties.NAME || s.country === geo.properties.ISO_A3 || s.country === geo.properties.NAME_LONG || s.country === geo.properties.FORMAL_EN);
              // debugger
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  // change here depending on state
                  fill={d ? colorScale(d["cases"]) : "#F5F4F6"}
                  // fill={d ? colorScale(d[props.currentMapButton]) : "#F5F4F6"}
                />
              );
            })
          }
        </Geographies>
        </ZoomableGroup>
      )}
    </ComposableMap>
    </div>
  );
};

const mapStateToProps = (state) => {
  // debugger
  return {
    currentMapButton: state.currentMapButton.toLowerCase()
  }
}

export default connect(mapStateToProps, null)(NumberOfCases);