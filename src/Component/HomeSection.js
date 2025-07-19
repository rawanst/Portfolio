import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
} from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import { useNavigate } from 'react-router-dom'
import MyDivider from './MyDivider'
import ListOfList from './ListOfList'
import RedirectLink from './RedirectLink'

const HomeSection = ({title, routh, desc, listOfList, isCV, summaries}) => {

  const navigate = useNavigate()

  return(
    <Box
      m= '0'
      px= '2vh'
      pt= '5vh'
    >
      <Container
        maxWidth='lg'
        sx={{
          p: '5%',
          diplay: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          bgcolor: '#823ccbff',
          borderRadius: '20px',
          paddingTop: '2vh',
          paddingBottom: '2vh',
        }}
      >
        <Grid 
          container 
          spacing={2}
        >
          <Button
            onClick={() => { navigate(routh) }}
            sx={{
              fontFamily: 'Melodrama-Regular',
              fontWeight: '600',
              fontSize: '2.8rem',
              color: '#c2cf69',
              textShadow: '1.5px 1px white',
              wordWrap: 'break-word',
              textTransform: 'none',
              letterSpacing : '-3px',
              mb: '-3vh',
              p: '0',
              paddingBottom: '0',
              zIndex: '10',
            }}
          >
            {title}
          </Button>
          <MyDivider />
          {
            desc &&
              <Typography
                variant= 'p'
                sx={{
                  fontFamily: "Melodrama-Light",
                  fontWeight: 'bolder',
                  fontWeight: '600',
                  fontSize: 'x-large',
                  color: 'rgb(221, 201, 237)',
                }}
              >
                {desc}
              </Typography>
          }
          {
            listOfList &&
            <ListOfList data={listOfList}/>
          }
          {
            isCV &&
            <Chip
              label='Curriculum vitae'
              icon={<NorthEastIcon style={{
                width: '15',
                color: 'rgb(171, 155, 185)',
                marginLeft: '9'
              }}/>}
              variant="outlined"
              size="large"
              sx={{
                width: '100%',
                bgcolor:'#c2cf69',
                fontFamily: "Melodrama",
                mb:'2vh',
                color: '#823ccbff',
                ':hover': {
                  color: '#e8e3edff'
                },
              }}
              onClick={
                () => {
                  window.open('../../CV.pdf')
              }}
            />
          }
          {
            summaries &&
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {summaries.map((item, key) => (
                <RedirectLink key={key} data={item} />
              ))}
            </Grid>
          }
        </Grid>
      </Container>
    </ Box>
  )
}

export default HomeSection