import './App.css';
import * as React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import UserApp from './userApp';

const theme = extendTheme({
  styles: {
    global: {
      body: {
<<<<<<< HEAD
        bg: "gray.800",
=======
        bg: "gray.800"
>>>>>>> 68261297f19a9fe3056d46475b3cabcf2e2cbfa1
        fontFamily:"Poppins, sans-serif",
      }
    }
  },
  /*  colors: {
     green: {
       700: "#276749",
       400: "#48BB78",
       50: "#F0FFF4"
     },
     gray: {
       800: "#1A202C",
       400: "#A0AEC0"
     }
   }, */
<<<<<<< HEAD
=======
  
  /* fontWeights: {
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  } */
>>>>>>> 68261297f19a9fe3056d46475b3cabcf2e2cbfa1
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserApp />
    </ChakraProvider>
  );
}

export default App;