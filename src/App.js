import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { MainPage } from './pages/MainPage';
import {Contact} from './pages/ContactPage';
import { LandingPage } from './pages/LandingPage'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Projects' element={<MainPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>    
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
