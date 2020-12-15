import React from 'react';
import { NavLink } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import { useSearchInputStyles } from '@mui-treasury/styles/input/search';
import styled from "styled-components";
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useBulbNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/bulb';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

const BlogBox = styled(Box)`
  box-shadow:3px 1px 7px 0px rgba(80, 50, 50, 0.64);
`;

const BlogNavLink = styled(NavLink)`
   font-size: 24px;
   color: #5d5252;
   font-weight: 600;
`;


function Header() {
  const styles = useSearchInputStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (

    // <Container>
    <BlogBox height={100} display={'flex'} float={'right'}>
      <img src="/images/logo.png" alt="logo" style={{height:50,marginTop:20}}/>
  
      <NavMenu  useStyles={useBulbNavigationMenuStyles} style={{overflow:'hidden'}}>
        <NavItem style={{textDecoration: 'none'}}>
          <BlogNavLink to="/">Home</BlogNavLink>
        </NavItem>
        <NavItem style={{textDecoration: 'none'}}>
          <BlogNavLink to="/about">About</BlogNavLink>
        </NavItem >
        <NavItem style={{textDecoration: 'none'}}>
          <BlogNavLink to="/blogs">Blog</BlogNavLink>
        </NavItem >
        <NavItem style={{textDecoration: 'none'}}>
          <BlogNavLink to="/arts">Arts</BlogNavLink>
        </NavItem >
        <NavItem style={{textDecoration: 'none'}}>
          <BlogNavLink to="/faq">Faq</BlogNavLink>
        </NavItem >
        <NavItem style={{textDecoration: 'none'}}>
          <BlogNavLink to="/tags">Tags</BlogNavLink>
        </NavItem >
        <NavItem style={{textDecoration: 'none'}}>
          <BlogNavLink to="/contact">Contact Us</BlogNavLink>
        </NavItem>
      </NavMenu>
      {/* <div style={{marginLeft:300,marginTop:20}}> */}
      <NavMenu>
        <NavItem>
          <InputBase
          classes={styles}
          placeholder={'Search...'}
          startAdornment={<Search />}
          />
        </NavItem>
        <NavItem>
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </NavItem>
        <NavItem>
         <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {/* <AccountCircle /> */}
                <Avatar alt="Remy Sharp" src="/images/user1.jpg" />
              </IconButton>
              <Menu
                getContentAnchorEl={null}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </NavItem>
      </NavMenu>
      
      {/* </div> */}
    </BlogBox>
    // </Container>
    );
}

export default Header;






