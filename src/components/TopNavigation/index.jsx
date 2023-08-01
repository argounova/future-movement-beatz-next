import * as React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { TopNavigationStyles } from './style'
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Fab,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'


const pages = [
    {
        page: 'Services',
        linkTo: '/services/all',
    },
    {
        page: 'About',
        linkTo: '/#about',
    },
    {
        page: 'Contact',
        linkTo: '/#contact',
    },
]

function ScrollTop(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }
  
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 25, right: 25, zIndex: 100 }}
      >
        {children}
      </Box>
    </Fade>
  )
}
  
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired
}

function TopNavigation(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <TopNavigationStyles>
      <CssBaseline />
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'var(--black)' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters id="back-to-top-anchor" sx={{ mt: 1, mb: 1 }}>
                <Link href="/">
                    <Image 
                        src='/logov2.png'
                        width={90}
                        height={80}
                        alt='future movement beatz logo'
                    />
                </Link>
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                    ml: 5,
                    display: { xs: 'none', md: 'flex' },
                    letterSpacing: '.3rem',
                    color: 'var(--fmbPurple4)',
                    }}
                >
                    Future Movement Beatz
                </Typography>
              
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ color: 'var(--fmbPurple4)' }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                }}
                >
                {pages.map((each) => (
                  <MenuItem key={each.index} onClick={handleCloseNavMenu}>
                    <Link href={`${each.linkTo}`} style={{ textDecoration: 'none' }}>
                        <Typography textAlign="center" sx={{ fontWeight: 'bold', color: 'var(--fmbPurple1)', letterSpacing: '.1rem' }}>{each.page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                {pages.map((each) => (
                  <Button
                    key={each.index}
                    sx={{ my: 2, color: 'var(--fmbPurple4)', display: 'flex', fontWeight: 'bold', letterSpacing: '.1rem' }}
                    href={`${each.linkTo}`}
                  >
                    {each.page}
                  </Button>
                  ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <ScrollTop {...props}>
          <Fab size="large" aria-label="scroll back to top" className='scroll-top-fab'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
    </TopNavigationStyles>
  )
}

export default TopNavigation