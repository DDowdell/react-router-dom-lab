import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import React, { useState } from "react";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: 1,
      boxSize: 'Small',
      boxOwner: 'Alex',
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (

  );

};

export default App;
