import './App.css';
import * as React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import UserApp from './userApp';



const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.800"
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
  fonts: {
    body: "Poppins, sans-serif",
  },
  /* fontWeights: {
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  } */
})

function App() {
  return (
      <ChakraProvider theme={theme}>
        <UserApp />
      </ChakraProvider>
  );
}

export default App;
