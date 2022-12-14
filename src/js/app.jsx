import '../scss/style.scss';
import React from 'react';
import ReactDOM from "react-dom";


const onClickEvent = (e) => {
  e.preventDefault();
  alert('You Clicked Me!')
}

const Index = () => {
  return (
    <div className={'content'}>
      <div className={'label'}>
        Create React App Without CRAπ
      </div>
      <button className={'btn'} onClick={onClickEvent}>Click Me π</button>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById("root"));
