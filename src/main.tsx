import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '../clases/string.ts'
import '../clases/objetos.ts'
import '../clases/array.ts'
import '../clases/funciones.ts'
import '../clases/deconst.ts'
import '../clases/import.ts'

import '../banos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1></h1>
  </StrictMode>,
)
