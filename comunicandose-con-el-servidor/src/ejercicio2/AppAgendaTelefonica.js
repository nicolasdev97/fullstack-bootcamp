import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";

const AppAgendaTelefonica = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3002/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const addPerson = (event) => {
    console.log("Name added");
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newPhone,
    };
    if (newName.trim() !== "" && newPhone.trim() !== "") {
      if (persons.some((person) => person.name === newName)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        axios
          .post("http://localhost:3002/persons", personObject)
          .then((response) => {
            setPersons([...persons, response.data]);
            setNewName("");
            setNewPhone("");
          });
      }
    } else {
      alert("Name and phone number cannot be empty");
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  const personsToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default AppAgendaTelefonica;
