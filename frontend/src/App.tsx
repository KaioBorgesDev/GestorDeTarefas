import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateTask from './pages/CreateTask'
import NotFound from './pages/NotFound'
import ListTask from './pages/ListTask'

function App() {
  return (
    <Routes>
        <Route path='/' element={<CreateTask></CreateTask>}></Route>
        <Route path='/listar' element={<ListTask></ListTask>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
    </Routes>
  )
}

export default App