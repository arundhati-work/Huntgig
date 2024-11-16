import React, { useContext, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { AuthContext } from '../AuthContext';
import './Navbar.css';

const useStyles = makeStyles({
  linkButton: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '1rem',
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const isDesktop = useMediaQuery('(min-width:768px)');

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      logout();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    ...(isLoggedIn ? [
      { label: 'Jobs', path: '/jobs' },
      { label: 'Companies', path: '/companies' },
      { label: 'Contact', path: '/contact' },
    ] : []),
    { label: isLoggedIn ? 'Logout' : 'Login / Signup', action: handleLoginLogout },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight*0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position={isSticky ? 'fixed' : 'static'} className='navbar' style={{ backgroundColor: '#1da9b1', borderRadius: isSticky ? '0' : '0 0 30px 30px' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontFamily: 'Plaster, sans-serif', fontWeight: 400, fontSize: '2rem', color: '#cae9eb', padding: '0 1rem' }}
          className="logo"
        >
          HUNTGIG
        </Typography>

        {isDesktop ? (
          <>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                className={classes.linkButton}
                onClick={item.action}
                component={item.action ? undefined : Link}
                to={item.action ? undefined : item.path}
              >
                {item.label}
              </Button>
            ))}
          </>
        ) : (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)} className="mobile-menu-icon">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                style: {
                  width: '66%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100vh',
                },
              }}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => {
                      if (item.action) item.action();
                      toggleDrawer(false)();
                    }}
                    component={item.action ? undefined : Link}
                    to={item.action ? undefined : item.path}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '2rem 0'
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        color: '#12767C'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
