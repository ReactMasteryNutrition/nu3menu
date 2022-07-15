import './App.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Card from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Card/>
      </div>
    </ChakraProvider>
  );
}

export default App;
