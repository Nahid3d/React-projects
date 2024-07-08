import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    console.log(country)
    const {name,flags,capital,area,continents, population,region
        
    } = country;

    const [visited,setVisited] = useState(false);

    const handleclick = () => {
        setVisited(!visited)
    } 

    return (
        <div className={`country ${visited ? 'visited' : 'none-visited'}`}>
            <h3>Name : {name.common} </h3>
            <img className='img' src={flags.png} alt="" />
            <h3>capital  {capital} </h3>
            <h3>area {area} </h3>
            <p>continents {continents} </p>
          <h3>population {population}</h3>
           <h3>region {region} </h3>
        <button onClick={handleclick}>{visited ? 'visited' : 'going'}</button><br />
        {visited? 'i have visited this countriy' : 'i went to visited country'}
        <button onClick={() =>handleVisitedCountries(country)}>
            Mark this country
        </button><br />
        <button onClick={() =>handleVisitedFlags(country.flags.png)}>
            Add flags
        </button>
        </div>
    );
};

export default Country;