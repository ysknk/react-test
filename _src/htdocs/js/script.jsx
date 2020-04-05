import React, { useState } from 'react';
import ReactDOM from 'react-dom';

((win, doc) => {
  'use strict';
  console.log(React)
  console.log(ReactDOM)

  // const element = <h1>Hello, world</h1>;


  doc.addEventListener('DOMContentLoaded', (e) => {
    ReactDOM.render(
      // element,
      <div>Hello world!</div>,
      document.querySelector('#app')
    );
  }, false);

})(window, document);

