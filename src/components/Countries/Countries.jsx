import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountries,setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountries = country =>{
        console.log(country)
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)

    }

    // setVisitedFlags useState handle click 
    const handleVisitedFlags = flags =>{
        console.log('flags add')
        const newVisitedFlags = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h3>Countries : {countries.
            length} </h3>
                <div>
                    <h5>visited country : {visitedCountries.length} </h5>
                    <ul>
                        {
                            visitedCountries.map(country => <li>{country.name.common}</li>)
                        }
                    </ul>
                </div>
                        <div className="flags-container">
                        {
                            visitedFlags.map((flags,ind) => <img key={ind} src={flags}></img>)
                        }
                        </div>
                <div className="components">
                {
                 countries.map(country =><Country key={country.cca2} 
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country> )
                 }
                </div>

    
       

        </div>
    );
};

export default Countries;