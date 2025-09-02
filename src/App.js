import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Research from './components/Research';
import Products from './components/Products';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <Box minH="100vh">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Research />
          <Products />
          <Certifications />
          <Contact />
        </Box>
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default App;
