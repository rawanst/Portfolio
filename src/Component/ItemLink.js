import {
  Chip,
} from '@mui/material'

const ItemLink = ({link, shortName}) => {
  return(
    <Chip 
      key={link.id}
      label={shortName ? link.shortName : link.name} 
      variant="outlined" 
      sx={{
        m: 0.5,
        bgcolor:'#c2cf69',
        fontFamily: "Melodrama", 
        color: '#823ccbff',
        ':hover': { 
          color: '#e8e3edff'
        },
      }}
      onClick={
        () => {
        window.open(link.url, '_blank')
      }}
    />
  )
}

export default ItemLink