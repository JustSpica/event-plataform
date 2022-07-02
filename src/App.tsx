import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';


import { client } from 'lib/apollo';

import { Event } from 'pages'

import { Router } from 'routes';

import './styles/global.css';

function App() {
  return(
    <BrowserRouter>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
