import {
  Box,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'

const NotFound = () => {

  window.scrollTo(0, 0)
  
  return(
    <Box>
      <FrontPage 
        height='55vh'
        title='Not Found'
        content="Cette page n'existe pas"
      />
      <Box 
        sx={{
          width: '10%',
          height: '34vh',
        }}
      />
    </Box>
  )
}

export default NotFound