import {
  Box,
  Container,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'
import RedirectLink from '../Component/RedirectLink'
import data from '../data'

const Project = () => {

  window.scrollTo(0, 0)

  return(
    <Box>
      <FrontPage 
        title='Projets'
        content='Passionné par la tech, je transforme les défis en solutions innovantes. Découvrez mon parcours et mes réalisations.'
      />
      <Container sx={{p: '5vh', pb: '0'}}>
        {data.projets.summaries.map((item) => (
          <RedirectLink key={item.id} data={item} />
        ))}
      </Container>
    </Box>
  )
}

export default Project