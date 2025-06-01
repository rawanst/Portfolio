import './App.css'
import { Outlet } from 'react-router-dom'
import {
  Box
} from "@mui/material"
import Header from './Component/Header'

const App = () => {
  return (
    <>
      <Header />
      <Box
        mt= '8.5vh'
        mx= '-0.9vh'
        sx={{ border : '1px solid red' }}
      >
        <Outlet />
      </Box>
      <h1>Footer</h1>
    </>
  )
}

export default App