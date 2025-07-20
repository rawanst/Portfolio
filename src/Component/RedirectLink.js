import {
  Grid,
  Typography,
} from '@mui/material'
import { useNavigate } from "react-router-dom"

const RedirectLink = ({data}) => {

  const navigate = useNavigate()

  return(
    <Grid
      key={data.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minWidth: '1vw',
        p: 3,
        pl: 2,
        mb: 1,
        cursor: 'pointer',
        color: '#823ccb',
        bgcolor: 'rgb(221, 201, 237)',
        border: '1.6px solid #e8e3ed',
        borderRadius: '20px',
        ':hover': {
          color: '#e8e3ed',
          bgcolor: '#823ccb',
          transitionProperty: 'none'
        },
      }}
      onClick={() => { navigate(`${data.routh}/${data.id}`) }}
    >
      <Typography
        variant= 'h4'
        sx={{
        fontFamily: "Meloriac",
        fontWeight: '600',
        wordWrap: 'break-word',
        }}
      >
        {data.title}
      </Typography>
      <Typography 
        variant= 'p'
        sx={{
          fontFamily: "Melodrama-Light", 
          wordWrap: 'break-word'
        }}
      >
        {data.resume}
      </Typography>
    </Grid>
  )
}

export default RedirectLink