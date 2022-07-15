import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom'
import PageHome from './component/pageHome';
import NutriFooter from './component/nutriFooter';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<PageHome/>} />
    </Routes>
    <NutriFooter/>
    </ChakraProvider>
  );
}

export default App;
