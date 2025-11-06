import {
  Box,
  Container,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'
import RedirectLink from '../Component/RedirectLink'
import data from '../data'

const Blog = () => {

  window.scrollTo(0, 0)
  
  let articles = data.blog.summaries
  
  return(
    <Box>
      <FrontPage 
        title='Blog'
        content='Passionné par la tech, je transforme les défis en solutions innovantes. Découvrez mon parcours et mes réalisations.'
        sx={{
          paddingBottom: '10vh'
        }}
      />
      <Container sx={{p: '5vh', pb: '0'}}>
        {articles.map((item, id) => (
          <RedirectLink key={id} data={item} />
        ))}
      </Container>
    </Box>
  )
}

export default Blog