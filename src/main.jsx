import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routers from './routes/Index.jsx';
import './styles/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
)
