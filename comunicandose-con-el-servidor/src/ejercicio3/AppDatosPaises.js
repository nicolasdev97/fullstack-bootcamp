import axios from "axios";
import { useEffect, useState } from "react";

const AppDatosPaises = () => {
  const countryAPI = `https://studies.cs.helsinki.fi/restcountries/api/all`; // API de los paises
  const [countries, setCountries] = useState([]); // Todos los países
  const [filter, setFilter] = useState(""); // Valor del buscador
  const [filteredCountries, setFilteredCountries] = useState([]); // Paises filtrados

  // Obtener todos los paises de la API al inicio
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching countries: ${error}`);
      });
  }, []);

  // Filtrar los paises de acuerdo al input
  useEffect(() => {
    if (filter.trim() === "") {
      // Si el input está vacío
      setFilteredCountries([]); // Deja el filteredCountries vacío
    } else {
      const result = countries.filter(
        (country) =>
          country.name.common.toLowerCase().includes(filter.toLowerCase()) // Si no está vacío, filtra por nombre
      );
      setFilteredCountries(result); // Y los asigna a filteredCountries
    }
  }, [filter, countries]); // Cada vez que cambia filter y countries se vuelve a ejecutar

  // Actualiza el valor de filter en tiempo real
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      find countries: <input value={filter} onChange={handleChange} />
      {filteredCountries.length >= 10 && (
        <p>Too many matches, specify another filter</p>
      )}
      {filteredCountries.length > 1 && filteredCountries.length < 10 && (
        <>
          {filteredCountries.map((filteredCountry) => (
            <p key={filteredCountry.cca3}>{filteredCountry.name.common}</p>
          ))}
        </>
      )}
      {filteredCountries.length === 1 && (
        <div>
          <h3>{filteredCountries[0].name.common}</h3>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Area: {filteredCountries[0].area}</p>
          <p>Languages:</p>
          <div>
            {filteredCountries[0].languages &&
              Object.values(filteredCountries[0].languages).map(
                (language, index) => <p key={index}>{language}</p>
              )}
          </div>
          <p>Flag:</p>
          <img
            src={filteredCountries[0].flags.png}
            alt={`Flag of ${filteredCountries[0].name.common}`}
            width="150"
          />
        </div>
      )}
    </div>
  );
};

export default AppDatosPaises;
