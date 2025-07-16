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
        sx={{
          position: 'relative',
          left: '-7.62px',
          marginRight: '-16.012px',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}

export default App