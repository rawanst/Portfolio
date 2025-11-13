import {
  Button,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import data from '../data'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children ?? <div />}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
}

const Header = (props) => {

  const navigate = useNavigate()

  return(
    <HideOnScroll {...props}>
      <AppBar
        sx={{
          borderRadius: '0.7em 0.7em 0.7em 0.7em',
          width: '90%',
          marginRight: '5%',
          marginTop: '2vh',
          backgroundColor: '#5e2d94ff',
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          boxShadow: '0 0 50px #9A8FBF',
        }}
      >
        <Button
          size='large'
          onClick={() => { navigate('/') }}
          sx={{
            padding: 0,
            fontFamily: 'Melodrama-Regular',
            fontWeight: 'bolder',
            color: '#D5DC7B',
            fontSize: '1.8rem',
            textTransform: 'none',
            letterSpacing : '-3px',
            ':hover': {
              textShadow: '0.5px 0px 1px #b9cb3c',
              color: '#b9cb3c',
              transitionProperty: 'none'
            }
          }}
        >
          RT
        </Button>
        <Toolbar>
          {data.menu.map(item =>
            <Button
              key={item.id}
              size= 'large'
              onClick={() => { navigate(item.url) }}
              sx={{
                padding: 0,
                color: '#d5dc7bff',
                textShadow: '0.5px 0px 1px #e8e3ed',
                fontFamily: 'Melodrama-Regular',
                letterSpacing : '-1px',
                ':hover': {
                  textShadow: '0.5px 0px 1px #b9cb3c',
                  color: '#b9cb3c',
                  transitionProperty: 'none'
                }
              }}
            >
              {item.name}
            </Button>)}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header