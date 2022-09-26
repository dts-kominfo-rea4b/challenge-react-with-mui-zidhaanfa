import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Box from '@mui/material/Box';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  const [data, setData] = useState(contactsJSON);
  const handleClick = (name, phone, email, url) => {
    setData(data => [...data,
    {
      name: name,
      phone: phone,
      email: email,
      photo: url
    }
    ]);
  };

  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header />
      <Box
      style={{
        mt: 10,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <ContactForm handleClick={handleClick} />
        <Contact data={data}/>
      </Box>

    </div>
  );
};

export default App;
