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
      bgcolor= '#823ccbff'
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
            fontFamily: "Meloriac-Regular",
            color: '#b9cb3c',
            textShadow: '1.8px 0px white',
            wordWrap: 'break-word',
            paddingTop: '2vh',
          }}
        >
          {title}
        </Typography>
        {
          titleDeux && 
          <Typography
            variant= 'h2'
            sx={{
              fontFamily: 'Melodrama-Light', 
              color: '#b9cb3c',
              wordWrap: 'break-word'
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
            color: '#c2cf69',
            wordWrap: 'break-word'
          }}
        >
          {content}
        </Typography>
        {
          isHomePage && 
          links && 
          links.map(link => 
            <ItemLink link={link}/>
          )
        }
      </Container>
    </Box>
  )
}

export default FrontPage