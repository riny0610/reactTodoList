import React, { useState, useRef, useCallback } from 'react';
import Template from './components/Template';
import Insert from './components/Insert';
import List from './components/List';

const App = () =>{
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '1',
      checked: true,
    },
    {
      id: 2,
      text: '2',
      checked: true,
    },
    {
      id: 3,
      text: '3',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo ={
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },

    [todos],
  );
  
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );;
  
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
      );
    },
    [todos],
  )

  return (  
    <Template>
      <Insert onInsert={onInsert}/>
      <List todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </Template>
  );

}

export default App;
