import {
  Typography,
  Grid,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

const ListOfList = ({data}) => {

  const matches = useMediaQuery('(min-width:550px)')

  return(
    <Grid
      size={{
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      }}
      sx={{
        display: 'flex',
        flexDirection: matches ? 'row' : 'column',
        justifyContent: 'space-around',
      }}
    >
      {data.map(i => (
        <
          Grid
          key={i.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            py: '0.5vh',
          }}
        >
          <Typography
            variant= 'h9'
            sx={{
              fontFamily: 'Meloriac',
              fontWeight: '600',
              textShadow: '0.4px 0px #b9cb3c',
              color: '#b9cb3c',
              wordWrap: 'break-word'
            }}
          >
            {i.name}
          </Typography>
          {i.list.map((x) => (
            <Typography
              key={x.id}
              variant= 'p'
              sx={{
                fontFamily: 'Meloriac',
                color: '#e8e3ed',
                wordWrap: 'break-word',
              }}
            >
              ¤ {x.name}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  )
}

export default ListOfList