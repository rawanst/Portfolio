import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material'
import ItemLink from './ItemLink'
import data from '../data'

const Footer = () => {
  
  return(
    <Box
      bgcolor= '#5e2d94ff'
      borderRadius= '0.7em 0.7em 0 0'
      mb='-10vh'
    >
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            diplay: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Grid
            size={7}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Typography
              variant= 'p'
              sx={{
                fontFamily: 'Meloriac-Regular',
                fontWeight: '400',
                color: '#b9cb3c',
              }}
            >
              Rawan Tabaja © Copyright 2025
            </Typography>
          </Grid>
          <Grid
            size={3}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'flex-end',
              alignItems: 'center',

            }}
          >
            {
              data.links && 
              data.links.map((link, key) =>
                <ItemLink key={key} link={link} shortName='true'/>
              )
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer