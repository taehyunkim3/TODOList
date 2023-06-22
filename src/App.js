
import { useCallback, useRef, useState, useEffect } from 'react';
import './App.scss';
import TodoTemplates from './components/TodoTemplates';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList';
import useLocalStorage from './components/useLocalStorage';


const App = () => {

  const [darkMode, setDarkMode] = useLocalStorage('dark', 'false');

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode === 'true' ? "dark" : "light");
  }, [darkMode]);

  // useEffect(() => {
  //   const checkTheme = () => {
  //     localStorage.getItem('dark') === 'true' ?
  //       document.documentElement.setAttribute("data-theme", "dark") :
  //       document.documentElement.setAttribute("data-theme", "light");
  //   };


  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '예제입니다.',
      added: "2023.00.20",
      checked: false
    }
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const date = new Date();
      const year = date.getFullYear();
      const day = date.getDate();
      const month = date.getMonth();
      const hour = date.getHours();
      const min = date.getMinutes();
      const all = `${year} / ${month} / ${day}  ${hour}시 ${min}분`


      const todo = {
        id: nextId.current,
        text,
        checked: false,
        added: String(all)
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,)
      )
    }, [todos]
  )



  return (
    <TodoTemplates>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
      <TodoInsert onInsert={onInsert}></TodoInsert>
    </TodoTemplates>

  )
}

export default App;
