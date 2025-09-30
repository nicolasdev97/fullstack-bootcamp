import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import ServicesAgendaTelefonica from "./services/ServicesAgendaTelefonica";
import NotificationAgendaTelefonica from "./NotificationAgendaTelefonica";
import "./AppAgendaTelefonica.css";

const AppAgendaTelefonica = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("correct");

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
      const personToUpdate = persons.find((person) => person.name === newName);
      if (personToUpdate) {
        if (
          window.confirm(
            `${newName} already has a number added to phonebook, replace with a new one?`
          )
        ) {
          const personToUpdateWithNewNumber = {
            ...personToUpdate,
            number: newNumber,
          };
          ServicesAgendaTelefonica.update(personToUpdateWithNewNumber).then(
            (updatedPerson) => {
              setMessage(`Updated ${updatedPerson.name} to phonebook`);
              setTimeout(() => {
                setMessage("");
              }, 5000);
              setPersons(
                persons.map((person) =>
                  person.id !== updatedPerson.id ? person : updatedPerson
                )
              );
              setNewName("");
              setNewNumber("");
              console.log(`Updated ${updatedPerson.name} to phonebook`);
            }
          );
          // .catch((error) => {
          //   setMessage(
          //     `The error: '${error.response.data.error}' ocurred while updating '${personObject.name}'`
          //   );
          //   setTimeout(() => {
          //     setMessage("");
          //   }, 5000);
          // });
        }
      } else {
        ServicesAgendaTelefonica.create(personObject).then((createdPerson) => {
          setMessage(`Added '${createdPerson.name}' to phonebook`);
          setTimeout(() => {
            setMessage("");
          }, 5000);
          setPersons([...persons, createdPerson]);
          setNewName("");
          setNewNumber("");
          console.log(`Added ${createdPerson.name} to phonebook`);
        });
        // .catch((error) => {
        //   setMessage(
        //     `The error: '${error.response.data.error}' ocurred while creating '${personObject.name}'`
        //   );
        //   setTimeout(() => {
        //     setMessage("");
        //   }, 5000);
        // });
      }
    } else {
      alert("Name and phone number cannot be empty");
    }
  };

  const removePerson = (id) => {
    const personToRemove = persons.find((person) => person.id === id);
    if (window.confirm("Are you sure you want to delete this person?")) {
      ServicesAgendaTelefonica.remove(personToRemove.id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          console.log(`Removed ${personToRemove.name} from phonebook`);
        })
        .catch((error) => {
          setMessage(
            `Error: '${error.message}', something ocurred when trying to remove '${personToRemove.name}'`
          );
          setType("error");
          setTimeout(() => {
            setMessage("");
            setType("correct");
          }, 5000);
        });
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
      <NotificationAgendaTelefonica message={message} type={type} />
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
