import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeEmailJS } from './lib/emailjs-init'

// Initialize EmailJS before rendering the app
initializeEmailJS();

createRoot(document.getElementById("root")!).render(<App />);
