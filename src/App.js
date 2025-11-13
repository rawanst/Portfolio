import './App.css'
import { Outlet } from 'react-router-dom'
import {
  Box
} from '@mui/material'
import Header from './Component/Header'
import Footer from './Component/Footer'
import DotGrid from './Component/Reactbits/DotGrid'

const App = () => {
  return (
    <>
      <Header />
      <Box 
        sx={{
          position: 'relative',
          left: '-7.62px',
          marginRight: '-16.012px',
          marginBottom: '0',
        }}
      >
        <Box 
          style={{ 
            width: '99.98%', 
            height: '100%', 
            position: 'absolute',
            zIndex: '-100',
          }}
        >
          <DotGrid
            dotSize={3}
            gap={10}
            baseColor='#d6dc7b'
            activeColor='#823ccb'
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </Box>
        <Outlet />
        <Footer />
      </Box>
    </>
  )
}

export default App