const NotificationAgendaTelefonica = ({ message, type }) => {
  if (message === "") {
    return null;
  }

  return <div className={`message ${type}`}>{message}</div>;
};

export default NotificationAgendaTelefonica;
