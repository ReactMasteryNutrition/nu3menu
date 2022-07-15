import './App.css';
import * as React from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Card from './components/Card/Card';
import NutriNavDesktop from './components/NutriNavDesktop/NutriNavDesktop';
import NutriNavMobile from './components/NutriNavMobile/NutriNavMobile';

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
     {/*  <div className="App">
        <Card/>
      </div> */}
      <NutriNavDesktop />
      <div style={{ color: 'white' }}>
        <p>
          Mauris sed magna tempor, pellentesque odio non, facilisis ligula.
          Nunc porta iaculis sem ut pulvinar. Maecenas lobortis ornare ligula,
          id fermentum elit. Proin ac malesuada lectus. Vestibulum ut nunc sed
          leo suscipit faucibus. In hac habitasse platea dictumst. Morbi rutrum
          ex in mi ullamcorper, non dignissim odio blandit. Nam rutrum pulvinar aliquam.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Integer blandit a justo eu lobortis. Vestibulum dignissim nisi dui, at
          tincidunt felis scelerisque vitae. Pellentesque iaculis augue turpis, vitae
          eleifend elit efficitur a. Fusce quis dignissim magna. Praesent ullamcorper at
          felis a sagittis. Phasellus justo risus, tincidunt et tortor eu, vulputate fermentum
          erat. Cras ac mi turpis.
        </p>
        <p>
          Mauris sed magna tempor, pellentesque odio non, facilisis ligula.
          Nunc porta iaculis sem ut pulvinar. Maecenas lobortis ornare ligula,
          id fermentum elit. Proin ac malesuada lectus. Vestibulum ut nunc sed
          leo suscipit faucibus. In hac habitasse platea dictumst. Morbi rutrum
          ex in mi ullamcorper, non dignissim odio blandit. Nam rutrum pulvinar aliquam.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Integer blandit a justo eu lobortis. Vestibulum dignissim nisi dui, at
          tincidunt felis scelerisque vitae. Pellentesque iaculis augue turpis, vitae
          eleifend elit efficitur a. Fusce quis dignissim magna. Praesent ullamcorper at
          felis a sagittis. Phasellus justo risus, tincidunt et tortor eu, vulputate fermentum
          erat. Cras ac mi turpis.
        </p>
        <p>
          Mauris sed magna tempor, pellentesque odio non, facilisis ligula.
          Nunc porta iaculis sem ut pulvinar. Maecenas lobortis ornare ligula,
          id fermentum elit. Proin ac malesuada lectus. Vestibulum ut nunc sed
          leo suscipit faucibus. In hac habitasse platea dictumst. Morbi rutrum
          ex in mi ullamcorper, non dignissim odio blandit. Nam rutrum pulvinar aliquam.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Integer blandit a justo eu lobortis. Vestibulum dignissim nisi dui, at
          tincidunt felis scelerisque vitae. Pellentesque iaculis augue turpis, vitae
          eleifend elit efficitur a. Fusce quis dignissim magna. Praesent ullamcorper at
          felis a sagittis. Phasellus justo risus, tincidunt et tortor eu, vulputate fermentum
          erat. Cras ac mi turpis.
        </p>
        <p>
          Mauris sed magna tempor, pellentesque odio non, facilisis ligula.
          Nunc porta iaculis sem ut pulvinar. Maecenas lobortis ornare ligula,
          id fermentum elit. Proin ac malesuada lectus. Vestibulum ut nunc sed
          leo suscipit faucibus. In hac habitasse platea dictumst. Morbi rutrum
          ex in mi ullamcorper, non dignissim odio blandit. Nam rutrum pulvinar aliquam.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Integer blandit a justo eu lobortis. Vestibulum dignissim nisi dui, at
          tincidunt felis scelerisque vitae. Pellentesque iaculis augue turpis, vitae
          eleifend elit efficitur a. Fusce quis dignissim magna. Praesent ullamcorper at
          felis a sagittis. Phasellus justo risus, tincidunt et tortor eu, vulputate fermentum
          erat. Cras ac mi turpis.
        </p>
      </div>
      <NutriNavMobile />
    </ChakraProvider>
  );
}

export default App;
