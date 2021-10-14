import React from "react";
import "./Loader.css";

const Loader = (props) => (
  <div className='center'>
    <div class='lds-spinner'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
