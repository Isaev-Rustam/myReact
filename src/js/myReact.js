let workingFiber = {}
let hookIndex = {}
export const MyReact = {
  createTextElement(nodeValue) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue,
        children: []
      }
    }
  },
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        // ! - здесь и далее так будут отмечены вносимые в код изменения
        children: children.map(child =>
          typeof child === "object"
            ? child
            : this.createTextElement(child)
        )
      }
    }
  },
}


const element = MyReact.createElement("section", {id: "welcome"},
  MyReact.createElement("h1", {
    title: "hello",
    className: "title"
  }, "Hello from MyReact!"),
  MyReact.createElement("p", {style: "color: green;"},
    "React from scratch")
);

console.log(element)

// function bar(type, props, ...children) {
//   return ({
//     type,
//     props: {...props},
//     children:children.map(i => i)
//   })
// }
//
// console.log(
//   bar("div", {id: "welcome"},
//     bar("h1", {id: "txt1"}),
//     bar("h2", {id: "txt2"})
//   )
// )





























