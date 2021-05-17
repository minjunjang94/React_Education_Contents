/*------------------------------------------------------------------------------*/


import React from 'react';
import Button from './Button1';
import Box from './Box4Dynamic';

export default function App() {
  return (
    <div> 
      <Button size = "big" />
      <Button size = "small" />
      <Box size = "big" />
      <Box size = "small" />
    </div>
  );
}
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
/* 
import React from 'react';
import style from './Button2.module.css';

function Button({ size }) {
  if (size == 'big') {
    return <button className = {`${style.button} ${style.big}`}>큰 버튼</button>;
  }
  else {
    return(
      <button className= {`${style.button} ${style.small}`}>작은 버튼</button>
    );
  }
}
export default Button;
console.log(style);
*/
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
/* Button1.js, Box1.js 사용

import React from 'react';
import Button from './Button1';
import Box from './Box1';

export default function App() {
  return (
    <div>
      <Button size = "big" />
      <Button size = "small" />
      <Box size = "big" />
      <Box size = "small" />
    </div>
  );
}
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
/* TodoList.js, Todo.js 사용 

import TodoList from './TodoList';

import './App.css';
import './Button1.css';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
*/
/*------------------------------------------------------------------------------*/