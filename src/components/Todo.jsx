import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import '../styles/Todos.css'

function Todo({ id, text, completed, completeTodo, deleteTodo }) {

  return (
    <div
      className={completed ? 'todo-container completed' : 'todo-container'}
    >
      <div >
        <AiOutlineCheckCircle className={completed ? 'todo-icon-check completed' : 'todo-icon-check w-6 h-6 hover:text-gray-200 hover:cursor-pointer'} />
      </div>
      <div className="w-full h-full flex items-center flex-wrap text-wrap" onClick={() => completeTodo(id)}>
        {text}
      </div>
      <div onClick={() => deleteTodo(id)}>
        <AiOutlineCloseCircle className='w-6 h-6 hover:text-red-500 hover:cursor-pointer' />
      </div>
    </div>
  )
}

export { Todo }