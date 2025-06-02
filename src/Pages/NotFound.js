import {
  Box,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'

const NotFound = () => {
  return(
    <Box>
      <FrontPage 
        height='55vh'
        title='Not Found'
        content="Cette page n'existe pas"
      />
    </Box>
  )
}

export default NotFound