import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import ItemLink from './ItemLink'
import MyDivider from './MyDivider'

const FrontPage = ({
  title, 
  titleDeux, 
  content, 
  isHomePage, 
  links, 
  height
}) => {
  return(
    <Box
      bgcolor= '#823ccb'
      sx={{
        height: {height},
        diplay: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <Container>
        <Typography
          variant= 'h2'
          sx={{
            fontFamily: "Meloriac",
            fontWeight: 'bold',
            color: '#B9CB3C',
            textShadow: '1.5px 0px #e8e3ed',
            wordWrap: 'break-word',
            paddingTop: '2vh',
          }}
        >
          {title}
        </Typography>
        {
          titleDeux && 
          <Typography
            variant= 'h3'
            sx={{
              fontFamily: 'Melodrama',
              color: '#e8e3ed',
              wordWrap: 'break-word',
            }}
          >
            {titleDeux}
          </Typography>
        }
        <MyDivider/>
        <Typography 
          variant= 'h5'
          sx={{
            fontFamily: "Melodrama-Light", 
            color: '#e8e3ed',
            wordWrap: 'break-word'
          }}
        >
          {content}
        </Typography>
        {
          isHomePage && 
          links && 
          links.map(link => 
            <ItemLink key={link.id} link={link}/>
          )
        }
      </Container>
    </Box>
  )
}

export default FrontPage