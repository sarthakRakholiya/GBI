
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {}; // Create a context object for Helmet

createRoot(document.getElementById("root")!).render(
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
);
