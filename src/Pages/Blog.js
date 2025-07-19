import {
  Box,
  Container,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'
import RedirectLink from '../Component/RedirectLink'

const Blog = () => {

  window.scrollTo(0, 0)
  
  const articles = [
          { 
            id: 1, 
            routh: '/blog', 
            title: 'React server composant', 
            resume: "Réinventez vos applications web avec les composants serveur React : performance, rapidité et efficacité au cœur de Next.js !"
          },
          { 
            id: 2, 
            routh: '/blog', 
            title: 'Advent of code', 
            resume: "Plongez dans l’Advent of Code, le défi ultime des développeurs pour allier logique, algorithmes et esprit de Noël !"
          },
        ]

  return(
    <Box>
      <FrontPage 
        height='55vh'
        title='Blog'
        content='Passionné par la tech, je transforme les défis en solutions innovantes. Découvrez mon parcours et mes réalisations.'
        sx={{
          paddingBottom: '10vh'
        }}
      />
      <Container sx={{p: '2.5%', pb: '0'}}>
        {articles.map((item, id) => (
          <RedirectLink key={id} data={item} />
        ))}
      </Container>
    </Box>
  )
}

export default Blog