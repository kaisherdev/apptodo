import freeCodeCampLogo from './assets/freecodecamp-logo.png'
import { TodoList } from './components/TodoList'
import './App.css'

const altLogo = "Logo de freeCodeCamp"

function App() {

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex justify-center items-center w-full m-5">
          <a href="https://freecodecamp.org" target="_blank">
            <img src={freeCodeCampLogo} className="w-[400px] h-[50px]" alt={altLogo} />
          </a>
        </div>
        <div className="bg-primary w-[600px] min-h-[500px] rounded-3xl p-6 m-2">
          <h1 className="text-secondary text-2xl font-semibold text-center mt-5 mb-5">My Tasks</h1>
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
