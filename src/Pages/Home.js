import {
  Container,
  Box,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'

const Home = () => {

  const data = {
    frontData: {
      title:'Rawan Tabaja',
      titleDeux:'Développeuse Full-Stack',
      content:'Passionné par la tech, je transforme les défis en solutions innovantes. Découvrez mon parcours et mes réalisations.',
    },
    links: [
      {
        id: 1,
        name: 'LinkedIn',
        shortName: 'LN',
        url: 'https://www.linkedin.com/in/rawan-t-5ba1bb170/'
      },
      {
        id: 2,
        name: 'GitHub',
        shortName: 'GH',
        url: 'https://github.com/rawanst'
      },
      {
        id: 3,
        name: 'rawantabaja12@gmail.com',
        shortName: '@',
        url: 'mailto:rawantabaja12@gmail.com?cc=&subject=Hello world !&body=Bonjour Rawan,'
      },
    ],
  }

  return(
    <Box>
      <FrontPage
        height='90vh'
        title={data.frontData.title}
        titleDeux={data.frontData.titleDeux}
        content={data.frontData.content}
        isHomePage={1}
        links={data.links}
      />
    </Box>
  )
}

export default Home