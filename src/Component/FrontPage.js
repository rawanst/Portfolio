import {
  Box,
  Container,
  Typography,
  Divider,
  Chip,
  Grid,
} from '@mui/material'
import ItemLink from './ItemLink'

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
    >
      <Container
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
        <Grid container spacing={2}>
          <Grid 
            size={{
              xs: 12,
              sm: 12,
              md: 7,
              lg: 7,
            }}
          >
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
            
            {titleDeux && 
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

            <Divider sx={{bgcolor:'#c2cf69', opacity: '0.4'}}/>
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
            {isHomePage && links && links.map(link => 
              <ItemLink link={link}/>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default FrontPage