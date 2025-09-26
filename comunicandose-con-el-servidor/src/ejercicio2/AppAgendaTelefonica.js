import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import ServicesAgendaTelefonica from "./services/ServicesAgendaTelefonica";

const AppAgendaTelefonica = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  console.log(`Rendering ${persons.length} persons`);

  useEffect(() => {
    console.log("The effect hook is being executed");
    getPersonsFromServer();
  }, []);

  const getPersonsFromServer = () => {
    ServicesAgendaTelefonica.getAll().then((returnedPersons) => {
      setPersons(returnedPersons);
      console.log(`Got ${returnedPersons.length} persons from server`);
    });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (newName.trim() !== "" && newNumber.trim() !== "") {
      if (persons.some((person) => person.name === newName)) {
        alert(`${newName} is already added to phonebook`);
      } else {
        ServicesAgendaTelefonica.create(personObject).then((createdPerson) => {
          setPersons([...persons, createdPerson]);
          setNewName("");
          setNewNumber("");
          console.log(`Added ${createdPerson.name} to phonebook`);
        });
      }
    } else {
      alert("Name and phone number cannot be empty");
    }
  };

  const removePerson = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      const personToRemove = persons.find((person) => person.id === id);
      ServicesAgendaTelefonica.remove(personToRemove.id);
      setPersons(persons.filter((person) => person.id !== id));
      console.log(`Removed ${personToRemove.name} from phonebook`);
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
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
        newNumber={newNumber}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} removePerson={removePerson} />
    </div>
  );
};

export default AppAgendaTelefonica;
