import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'; 

const rootElement = document.querySelector('#root');

createRoot(rootElement as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
