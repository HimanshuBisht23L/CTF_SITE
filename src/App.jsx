import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar.jsx"
import Main from "./components/Main.jsx"
import Task1 from "./components/Tasks/Task1.jsx"
import Task2 from "./components/Tasks/Task2.jsx"
import Task3 from "./components/Tasks/Task3.jsx"
import Task4 from "./components/Tasks/Task4.jsx"
import Task5 from "./components/Tasks/Task5.jsx"
import './styles/App.css'

function HomePage(){
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

function Taskone(){
  return (
    <>
      <Task1/>
    </>
  )
}

function TaskTwo(){
  return (
    <>
      <Task2/>
    </>
  )
}
function TaskThree(){
  return (
    <>
      <Task3/>
    </>
  )
}
function TaskFour(){
  return (
    <>
      <Task4/>
    </>
  )
}
function TaskFive(){
  return (
    <>
      <Task5/>
    </>
  )
}


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Task1" element={<Taskone/>} />
        <Route path="/Task2" element={<TaskTwo/>} />
        <Route path="/Task3" element={<TaskThree/>} />
        <Route path="/Task4" element={<TaskFour/>} />
        <Route path="/Task5" element={<TaskFive/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
