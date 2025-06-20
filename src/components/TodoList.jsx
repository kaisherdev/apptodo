import { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [totalTodos, setTotalTodos] = useState(0)

  const addTodo = (todo) => {
    if (todo.text.trim() && !todos.find(t => t.text.trim() === todo.text.trim())) {
      todo.text = todo.text.trim()
      const updatedTodos = [todo, ...todos]
      setTodos(updatedTodos)
      setTotalTodos(updatedTodos.length)
    }
  }

  const deleteTodo = (id) => {
    if (todos.find(t => t.id === id)) {
      const updatedTodos = todos.filter(todo => todo.id !== id)
      setTodos(updatedTodos)
      setTotalTodos(updatedTodos.length)
    }
  }

  const completeTodo = (id) => {
    if (todos.find(t => t.id == id)) {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      setTodos(updatedTodos)
      setTotalTodos(updatedTodos.length)
    }
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <div className="w-full flex flex-wrap justify-center items-center pt-4">
        {todos.length > 0 ? (
          todos.map((todo) =>
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          )
        ) : (
          <div>
            <p className='text-lg text-slate-500'>No tasks</p>
          </div>
        )}
      </div>
      <div className="text-black p-4 flex justify-center space-x-4">
        <span>Total: {totalTodos}</span>
        <ul className="flex gap-4 justify-center">
          <li>
            <a href="#" className="hover:underline">All</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Pending</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Completed</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export { TodoList }