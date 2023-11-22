


import React from 'react'

import GoogleMapReact from "google-map-react"

import {MapContainer} from "./styles"


const coordinates = {lat: 0, lng: 0}
const Map = () => {
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{key: ""}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom= {14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}

      >

      </GoogleMapReact>
    </MapContainer>
  )
}

export default Map
