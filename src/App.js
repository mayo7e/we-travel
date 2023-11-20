
import React from 'react'

import Header from './components/header/Header'
import List from './components/list/List'
import Map from './components/map/Map'
import { Layout } from './components/layout/layout.styled'
// import Placedetails from './components/placeDetails/Placedetails'


const App = () => {
  return (
    <>
      <Header />
      <Layout>
          <List />
          <Map />
      </Layout>
    </>
  )
}

export default App
