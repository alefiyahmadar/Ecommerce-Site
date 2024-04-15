import React from "react";

import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"

import { ContextProvider } from "./contexts/contextProvider";


// Call make Server
makeServer();


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Router>
  <ContextProvider>
    
    
<App/>

  </ContextProvider>


</Router>);

