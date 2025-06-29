import {
  Container,
  Box,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'
import HomeSection from '../Component/HomeSection'

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
      <HomeSection 
        title='Home Section'
        routh=''
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listOfList={[
          { id: 1, name: 'Programmation', list: ['React', 'C# .Net'] },
          { id: 2, name: 'Base de données', list: ['MSSMSQL'] },
          { id: 4, name: 'Langue', list: ['Français Native', 'Anglais TOEIC B2'] },
          { id: 3, name: 'Outils', list: ['GitHub', 'Fork', 'Postman'] },
        ]}
        isCV={true}
        summaries={[
          { id: 1, routh: '/projets', title: 'Titre', resume: 'une courte description'},
          { id: 2, routh: '/projets', title: 'Titre 2', resume: 'une autre courte description'},
        ]}
      />
    </Box>
  )
}

export default Home