import {
  Box,
  Container,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'
import RedirectLink from '../Component/RedirectLink'

const Project = () => {

  window.scrollTo(0, 0)

  const data = [
    {
      id: 1,
      routh:'/projects',
      title: 'Projet 1',
      resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 2,
      routh:'/projects',
      title: 'Projet 2',
      resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 3,
      routh:'/projects',
      title: 'Projet 3',
      resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
  ]

  return(
    <Box>
      <FrontPage 
        height='55vh'
        title='Projets'
        content='Passionné par la tech, je transforme les défis en solutions innovantes. Découvrez mon parcours et mes réalisations.'
      />
      <Container sx={{p: '2.5%', pb: '0'}}>
        {data.map((item) => (
          <RedirectLink key={item.id} data={item} />
        ))}
      </Container>
    </Box>
  )
}

export default Project