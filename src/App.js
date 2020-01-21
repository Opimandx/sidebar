import React from 'react';
import './Sidebar.scss';
import PeopleSlider from './components/PeopleSlider'
import PriceSlider from './components/PriceSlider'
import IncludedServices from './components/IncludedServices'
import AutoTags from './components/AutoTags'
import CarcassChoice from './components/CarcassChoice/CarcassChoice'
import Complectation from './components/Complectation'
import Companies from './components/Companies'



const price = {
  min: 50,
  max: 12000,
}

function App() {
  const [valuePeople, setValuePeople] = React.useState(1);
  const [valuePrice, setValuePrice] = React.useState([price.min, price.max]);
  const [valueTags, setValueTags] = React.useState({});
  const [includedServices, setIncludedServices] = React.useState([]);
  const [autoTags, setAutoTags] = React.useState([]);
  const [complectation, setComplectation] = React.useState({});
  const [companies, setCompanies] = React.useState({});

  return (

    <div className="sidebar">
      <PeopleSlider 
        setValuePeople={setValuePeople}
      />
      <PriceSlider 
        price={price}
        setValuePrice={setValuePrice}
      />
      <IncludedServices
        setIncludedServices={setIncludedServices}
      />
      <AutoTags
        setAutoTags={setAutoTags}
      />
      <CarcassChoice  
        setValueTags={setValueTags}
      />
      <Complectation 
        setComplectation={setComplectation}
      /> 
      <Companies 
        setCompanies={setCompanies}
      />
    </div>
  );
}

export default App;
