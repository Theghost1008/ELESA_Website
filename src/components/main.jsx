import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Electrovert from './Electrovert'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Electrovert></Electrovert>
  </StrictMode>,
)
