import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import ItemLink from './ItemLink'
import MyDivider from './MyDivider'
import Iridescence from './Reactbits/Iridescence'

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
        <MyDivider />
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
      <Box
        style={{
          position: 'absolute',
          top: '0',
          width: '100%',
          height: '90vh',
          zIndex: '-100'
        }}
      >
        <Iridescence
          color={[0.4, 0.4, 0.6]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
          >
        </Iridescence>
      </Box>
    </Box>
  )
}

export default FrontPage