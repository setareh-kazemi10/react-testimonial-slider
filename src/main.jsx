import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Avatar from './Avatar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Avatar />
  </StrictMode>,
)
