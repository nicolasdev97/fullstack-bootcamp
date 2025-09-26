import axios from "axios";

const baseUrl = "http://localhost:3002/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (createdPerson) => {
  const request = axios.post(baseUrl, createdPerson);
  return request.then((response) => response.data);
};

const update = (updatedPerson) => {
  const request = axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const ServicesAgendaTelefonica = { getAll, create, update, remove };

export default ServicesAgendaTelefonica;
