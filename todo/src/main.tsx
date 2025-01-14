import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import { ToDoList } from './pages/ToDoList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>
)
