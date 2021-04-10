import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

// simplar to the way we extends class

// interface ITodo2 extends ITodo {  
//   text: string
//   complete: boolean
// }

function TodoApp() {
  // | stand for or in typescript

  const [value, setvalue] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    setvalue('')
    addTodo(value)
    console.log(value)
  }

  //  Add Todos
  const addTodo: any = (text: string): void => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}]
    setTodos(newTodos)
  }

  // Complete Todos
  // const complete Todos
  const completeTodo: any = (index: number):void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
  }
  // remove Todo
  const removeTodo = (index: number):void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  

  const todoList: any = todos.length ? (
    todos.map((todo: ITodo, index: number) => (
      <div key={index} className='d-flex align-items-center justify-content-around py-3 mx-auto'>
          <div>{todo.text}</div>
          <div>
          <button type='button' onClick={() => completeTodo(index)} className="btn btn-secondary">
            {todo.complete ? "Incomplete" : "Complete"}
          </button>
          {' '}
          <button type='button' onClick={() => removeTodo(index)} className="btn btn-danger">
            remove
          </button>
          </div>
        </div>
    ))
  ) : (
    <div className="text-center">Loading...</div>
  )
  

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
       <div className="d-flex justify-content-center align-items-center">
        <input type="text" value={value} onChange={e => {setvalue(e.target.value)}} required/>
        <button type='submit' className="btn btn-dark">Add Todo</button>
       </div>
      </form>
      <section className='flex align-items-center justify-content-around'>
        {todoList} 
      </section>
    </div>
  );
}

export default TodoApp;

