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
        title={article.title}
        content={article.resume}
      />
      <Container
        sx={{
          width: '80%',
          my:'5vh',
          mx: '10%',
          color: '#59288a',
          fontFamily: "Melodrama", 
          border: '1px solid #59288a',
          bgcolor: 'white',
          borderRadius: '0.7em 0.7em 0.7em 0.7em',
        }}
      >
        <ReactMarkdown>
          {article.contenu}
        </ReactMarkdown>
      </Container>
    </Box>
  )
}

export default Article