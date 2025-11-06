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
  data.blog.summaries.forEach((a) => {
    if(a.id === Number.parseInt(id)){
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
        {article.contenu.map(item => {
          console.log(item)
          if( item.type === 'markdown' ){ return <ReactMarkdown key={item.order}>{item.data}</ReactMarkdown> }
          return <img key={item.order} src={item.src} height={item.height} width={item.width} />
        })}
      </Container>
    </Box>
  )
}

export default Article