import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import { Container } from '@chakra-ui/react';
import React, { useState } from 'react';


function App(props) {
  const [data, setData] = useState([
    { date: "11", todo: "Make Todo App", location: "Jakarta", note: "Prepare VS Code", status: "Done" },
    { date: "22", todo: "Make Todo App", location: "Jakarta", note: "Prepare VS Code", status: "Done" },
    { date: "33", todo: "Make Todo App", location: "Jakarta", note: "Prepare VS Code", status: "Done" },
    { date: "44", todo: "Make Todo App", location: "Jakarta", note: "Prepare VS Code", status: "Done" },
  ]);

  return (

    <Container maxW='96em'>
      <Navbar data={data} setData={setData} />
      <Landing data={data} setData={setData} />
    </Container>

  );
}

export default App;
