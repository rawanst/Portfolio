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
        bgcolor: '#D5DC7B',
        textShadow: '0.5px 0.25px 1px #5e2d94ff',
        borderRadius: '0.7em',
        border: '1.6px solid #D5DC7B',
        fontFamily: "Melodrama", 
        color: '#5e2d94ff',
        ':hover': { 
          color:'#D5DC7B',
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