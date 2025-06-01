import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </>
  )
}

export default App
