import './App.css'
import { Outlet } from 'react-router-dom'
import {
  Box
} from '@mui/material'
import Header from './Component/Header'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Box
        mt= '5vh'
        mx= '-1vh'
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}

export default App