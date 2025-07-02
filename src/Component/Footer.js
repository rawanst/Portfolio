import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material"
import ItemLink from './ItemLink'

const Footer = () => {

  const links = [
    {
      id: 1,
      name: 'LinkedIn',
      shortName: 'LN',
      url: 'https://www.linkedin.com/in/rawan-t-5ba1bb170/'
    },
    {
      id: 2,
      name: 'GitHub',
      shortName: 'GH',
      url: 'https://github.com/rawanst'
    },
    {
      id: 3,
      name: 'rawantabaja12@gmail.com',
      shortName: '@',
      url: 'mailto:rawantabaja12@gmail.com?cc=&body=Bonjour Rawan,'
    },
  ]

  return(
    <Box
      bgcolor= '#823ccbff'
      borderRadius= '1em 1em 0 0'
      mt='5vh'
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
                fontFamily: "Meloriac-Regular",
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
            {links && links.map(link =>
              <ItemLink link={link} shortName='true'/>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer