import {
  Box,
  Container,
} from '@mui/material'
import FrontPage from '../Component/FrontPage'
import { useParams } from 'react-router'
import ReactMarkdown from 'react-markdown'
import data from '../data'

const Article = () => {

  window.scrollTo(0, 0)

  const { id } = useParams()

  let article = null
  data.blog.summaries.map(a => {
    if(a.id === parseInt(id)){
      article = a
    }
  })

  return(
    <Box>
      <FrontPage 
        height='55vh'
        title={article.title}
        content={article.resume}
      />
      <Container
        maxWidth="lg"
        sx={{
          p:'5vh',
          color: '#59288a',
          fontFamily: "Melodrama", 
        }}
      >
        {article.contenu.map((item, index) => {
          if(item.type === 'markdown'){
            return <ReactMarkdown key={index}>{item.data}</ReactMarkdown>
          } else if (item.type === 'img'){
            return <img key={index} width={item.width} height={item.height} alt="image" src={item.src} />
          }
        })}
      </Container>
    </Box>
  )
}

export default Article