import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.jsx'
import { ContextAllCalendar } from './context/ContextCalendar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAllCalendar>
      <App />
      <GlobalStyles />
    </ContextAllCalendar>
  </React.StrictMode>,
)
