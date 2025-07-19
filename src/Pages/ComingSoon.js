import {
  Box,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'

const ComingSoon = () => {

  window.scrollTo(0, 0)
  
  return(
    <Box>
      <FrontPage 
        height='55vh'
        title='Coming Soon'
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

export default ComingSoon