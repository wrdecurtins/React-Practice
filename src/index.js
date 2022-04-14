import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {Hello} from "./components/hello";
import {Parent, manyChildren} from "./components/parent-child";
import {Thebutton} from "./components/button";
import {Checkbox} from "./components/checkbox";
import {EffectBox, manyEffectboxes } from './components/useeffectbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Hello something="test" />
    {Hello({something: "prop"})}
    <Parent>
      {manyChildren(4)}
    </Parent>
    <Thebutton></Thebutton>
    <Checkbox />
    <Parent>
      {manyEffectboxes(3)}
    </Parent>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
