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

import Banos from '../lab1/Banos.tsx';
import Var from '../lab1/Var.tsx';
import Hello from '../lab1/Hello.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <Banos/>
    </div>
    <div>
      <Var/>
    </div>
    <div>
      <Hello/>
    </div>
  </StrictMode>,
)
