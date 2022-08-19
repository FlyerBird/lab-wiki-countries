import React from 'react';
import {Link} from 'react-router-dom';

export default function CountriesList(props) {
    const {countries} = props;
  return (
    <div>
        {countries.map((country) => {
            //console.log(country)
            return (
                <div className="list-group" key={country.alpha3Code}>
                    <Link to={country.alpha3Code}> {country.name.official} </Link>
                </div>
            )
        })}
    </div>
  )
}
