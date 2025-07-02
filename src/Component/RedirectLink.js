import {
  Grid,
  Typography,
} from '@mui/material'
import { useNavigate } from "react-router-dom"

const RedirectLink = ({data, isShortCut}) => {

  const navigate = useNavigate()

  return(
    <Grid
      key={data.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        minWidth: isShortCut ? '1vw' : '90vw',
        p: 3,
        pl: 2,
        mb: '2%',
        bgcolor: 'rgb(221, 201, 237)',
        cursor: 'pointer',
        border: '0.2vh solid #823ccbff',
        borderRadius: '20px',
        color: '#823ccbff',
        ':hover': {
          color: '#823ccbff',
          bgcolor: '#b9cb3c',
          border: '0.2vh solid #b9cb3c',
          transitionProperty: 'none'
        },
      }}
      onClick={() => { navigate(`${data.routh}/${data.id}`) }}
    >
      <Typography
        variant= 'h4'
        sx={{
        fontFamily: "Meloriac-Regular",
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