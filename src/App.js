import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>My App</h1>
      <Outlet />
      <h1>Footer</h1>
    </>
  )
}

export default App
