import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import '../styles/Todos.css'

function Todo({ id, text, completed, completeTodo, deleteTodo }) {

  return (
    <div
      className={completed ? 'flex p-5 mb-2 line-through text-slate-300 bg-[#5a01a7] border border-white items-center justify-between min-h-16 cursor-pointer w-full gap-8 rounded-lg' : 'p-5 mb-2 flex w-full justify-between items-center min-h-16 gap-8 cursor-pointer border border-white rounded-lg bg-[#1b1b32]'}
    >
      <div>
        <AiOutlineCheckCircle className={completed ? ' text-yellow-500 size-6' : 'size-6 text-teal-300 hover:text-slate-500 hover:cursor-pointer'} />
      </div>
      <div className="w-full h-full flex items-center flex-wrap text-wrap p-1" onClick={() => completeTodo(id)}>
        {text}
      </div>
      <div onClick={() => deleteTodo(id)}>
        <AiOutlineCloseCircle className='w-6 h-6 hover:text-red-500 hover:cursor-pointer' />
      </div>
    </div>
  )
}
Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string
};
export { Todo }