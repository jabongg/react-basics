import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18

import App from './App.jsx'
import Writer from './Writer.jsx'
import Counter from './Counter.jsx'
import Designer from './Designer.jsx';
import BackgroundChanger from './BackgroundChanger.jsx';
import PasswordGenerator from './PasswordGenerator.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* { <App /> } */}
    {/* <Writer /> */}
    {/* <Counter /> */}
    {/* <BackgroundChanger /> */}
    <PasswordGenerator />
  </StrictMode>
)
