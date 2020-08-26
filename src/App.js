import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      // const names = data.map(country => country.name)
      // console.log(data);
    })
    .catch(error => console.log(error))
  }, [])
    const handleAddCountry = (country) => {
      // console.log("country added", country)
      const newCart = [...cart, country];
      setCart(newCart);
    }
  return (
    <div className="App" style={{ textAlign: "center"}}>
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ol>
        {
          countries.map(country => <Country country = {country} handleAddCountry = {handleAddCountry} key={country.alpha3Code}> </Country>)
        }
      </ol>
    </div>
  );
}

export default App;
