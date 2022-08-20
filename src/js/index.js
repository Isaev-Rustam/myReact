// import '../scss/style.scss';
import React from "react";
import {render} from "react-dom";

function App() {
  const [text, changeText] = React.useState('Initial: ');
  return React.createElement("div", {
      className: "app"
    },React.createElement("input", {
      type: "text",
      value: text,
      onInput: e => changeText(e.target.value)
    }),React.createElement("span", null, text),
  );
}

render(React.createElement(App, null), document.getElementById('root'));