import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <>
    <Header />
    <Box m={'20px'}>
    <Outlet />
    </Box>
    </>
  );
}

export default App;
