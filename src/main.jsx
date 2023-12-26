import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
))
