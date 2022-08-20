export const render = function render(element, container) {
  const node =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)

  const isProperty = key => key !== "children";

  Object.keys(element.props)
    .filter(isProperty)
    .forEach(key => {
      node[key] = element.props[key]
    })

  element.props.children.forEach(child =>
    render(child, node)
  )


  container.appendChild(node)
}

// const element = (
//   <section id="welcome">
//     <h1 title="hello" className="title">Hello from MyReact!</h1>
//     <p style="color: green;">React from scratch</p>
//   </section>
// )
//
const element = {
  type: "section",
  props: {
    id: "welcome",
    children: [
      {type: "h1", props: {title: 'hello', className: 'title', children:[
            {type: "TEXT_ELEMENT", props: {nodeValue: 'Hello from MyReact!', children: Array(0)}}
          ]
      }},
      {type: "p", props: {style: 'color: green;', children:[
            {type: "TEXT_ELEMENT", props: {nodeValue: 'React from scratch', children: Array(0)}}
          ]}},
    ]
  }
}

const container = document.getElementById("root")
render(element, container)