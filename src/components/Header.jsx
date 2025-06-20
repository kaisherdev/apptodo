const altLogo = "Logo de freeCodeCamp"
import freeCodeCampLogo from '../assets/freecodecamp-logo.png'

function Header() {
  return (
    <header className="text-[#1b1b32] ">
       <div className="w-full flex justify-center items-center m-5 mx-auto">
          <a href="https://freecodecamp.org" target="_blank">
            <img src={freeCodeCampLogo} className="h-12" alt={altLogo} />
          </a>
        </div>
      <nav className="text-center pb-4">
        <h1 className="text-2xl font-semibold pb-2">My tasks</h1>
        <p ><strong>All my tasks in one place</strong></p>
      </nav>
    </header>
  )
}

export { Header }