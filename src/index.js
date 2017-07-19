import React from 'react';
import ReactDOM from 'react-dom';
import containers from './containers';

const component = window.__REACT_COMPONENT__;
console.log(component);
ReactDOM.render(
    React.createElement(containers[component], null, null),
    document.getElementById("react-body")
);
