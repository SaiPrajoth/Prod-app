import { Route, Routes } from 'react-router-dom'
import './App.css'
// import logo from './logo.png'
import Register from './Register'
import Login from './Login'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path='/register' Component={Register}/>
    <Route path='/login' Component={Login}/>
    </Routes>
  )
}

export default App
