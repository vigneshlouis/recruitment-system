import React from 'react';
import { RegBackground } from './regbackground';
import { Form } from './regform';
import NavBar from "./navbar";
const RegForm = () => {
  return (
    <div id="main">
      <NavBar/>
<RegBackground/>
      <Form/>
     
    </div>
  );
}

export default RegForm;
