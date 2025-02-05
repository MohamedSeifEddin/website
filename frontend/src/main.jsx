// src/main.jsx
import { createRoot } from 'react-dom/client'; // Gebruik react-dom/client voor React 18
import { StrictMode } from 'react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
