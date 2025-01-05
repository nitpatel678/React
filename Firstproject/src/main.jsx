import React from 'react'; // Import React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';


/*
function Random(){   // Name should be Upper Case letter ! IMPORTANT:
  return (<div>
    <h1>
      Hello,this is react playlist
    </h1>
  </div>
  )
}

*/


// TO CREATE SELF REACT COMPONENT BY Itself:


const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click ME Please !'
);



createRoot(document.getElementById('root')).render(

  reactElement
 
)
