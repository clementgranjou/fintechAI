// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  // )
  
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import { Auth0Provider } from '@auth0/auth0-react';
  import App from './App';
  import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-atpagpwke0y71rcy.eu.auth0.com"
    clientId="6z0oJjaLnuH0q8hdVn9nVVej27Jui4fF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);