import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const AppAgendaTelefonica = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

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
        setPersons([...persons, personObject]);
        setNewName("");
        setNewPhone("");
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

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.includes(filter)
  );

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
      <Persons filteredPersons={filteredPersons} persons={persons} />
    </div>
  );
};

export default AppAgendaTelefonica;
