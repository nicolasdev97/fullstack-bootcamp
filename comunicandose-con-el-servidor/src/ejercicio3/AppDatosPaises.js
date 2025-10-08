import axios from "axios";
import { useEffect, useState } from "react";

const PaisesFiltrados = ({
  filteredCountries,
  handleShowDetails,
  selectedCountry,
}) => {
  // Si hay más de 10 países
  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  // Si hay más de 1 país
  if (filteredCountries.length > 1) {
    return (
      <>
        {filteredCountries.map((filteredCountry) => (
          <div key={filteredCountry.cca3}>
            {filteredCountry.name.common}
            <button onClick={() => handleShowDetails(filteredCountry)}>
              {selectedCountry?.cca3 === filteredCountry.cca3 ? "Hide" : "Show"}
            </button>
            {selectedCountry?.cca3 === filteredCountry.cca3 && (
              <>
                <p>Capital : {filteredCountry.capital}</p>
                <p>Area: {filteredCountry.area}</p>
                <p>Languages:</p>
                <div>
                  {filteredCountry.languages &&
                    Object.values(filteredCountry.languages).map(
                      (language, index) => {
                        <p key={index}>{language}</p>;
                      }
                    )}
                </div>
                <p>Flag:</p>
                <img
                  src={filteredCountry.flags.png}
                  alt={`Flag of ${filteredCountry.name.common}`}
                  width="150"
                />
              </>
            )}
          </div>
        ))}
      </>
    );
  }

  // Si hay solamente 1 país
  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return (
      <div>
        <h3>{country.name.common}</h3>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>Languages:</p>
        <div>
          {country.languages &&
            Object.values(country.languages).map((language, index) => (
              <p key={index}>{language}</p>
            ))}
        </div>
        <p>Flag:</p>
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          width="150"
        />
      </div>
    );
  }
};

const AppDatosPaises = () => {
  const countryAPI = `https://studies.cs.helsinki.fi/restcountries/api/all`; // API de los paises
  const [countries, setCountries] = useState([]); // Todos los países
  const [filter, setFilter] = useState(""); // Valor del buscador
  const [selectedCountry, setSelectedCountry] = useState(null); // Mostrar detalles del país

  // Obtener todos los paises de la API al inicio
  useEffect(() => {
    axios
      .get(countryAPI)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching countries: ${error}`);
      });
  }, [countryAPI]);

  // Filtrar los paises
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  // Actualiza el valor de filter en tiempo real
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  // Selecciona el país al que se va a mostrar el detalle
  const handleShowDetails = (country) => {
    if (selectedCountry && selectedCountry.cca3 === country.cca3) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
    }
  };

  return (
    <div>
      find countries: <input value={filter} onChange={handleChangeFilter} />
      <PaisesFiltrados
        filteredCountries={filteredCountries}
        handleShowDetails={handleShowDetails}
        selectedCountry={selectedCountry}
      />
    </div>
  );
};

export default AppDatosPaises;
