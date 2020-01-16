import React from 'react';
import './Sidebar.scss';
import PeopleSlider from './components/PeopleSlider'
import PriceSlider from './components/PriceSlider'
import IncludedServices from './components/IncludedServices'
import AutoTags from './components/AutoTags'
import CarcassChoice from './components/CarcassChoice/CarcassChoice'

const price = {
  min: 50,
  max: 12000,
}

function App() {
  return (

    <div className="sidebar">
      <PeopleSlider/>
      <PriceSlider 
      price = {price}
      />
      <IncludedServices/>
      <AutoTags/>
      <CarcassChoice/>
    </div>
  );
}

export default App;
