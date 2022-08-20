/** @jsx MyReact.createElement */
import {MyReact} from "./myReact.js";
import {render} from "./myReactDOM.js";

import {Didact} from "./Didact.jsx";


const element = (
  <section id="welcome">
    <h1 title="hello" className="title">Hello from MyReact!</h1>
{/*    <h2 onClick={() => setState(c => c + 1)}>
      Count: { state }
    </h2>*/}
    <p style="color: green;">React from scratch</p>
  </section>
)

const container = document.getElementById("root")
render(element, container)


// console.log(element)

