// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// // import SideMenu from '@mui/material/SideMenu'
// // import {Paper,FormControl,FormGroup,CardContent,CardMedia,CardActions } from '@mui/material'
// import TenderForm from './components/TenderPost';
// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
  
//   <TenderForm/>
//   )};
// export default ResponsiveAppBar;
// import Sidebar from "./components/supplier/Dashboard/Sidebar";
import styled from 'styled-components'
import MainContent from './components/supplier/Dashboard/MainContent';
import Sidebar from './components/supplier/Dashboard/Sidebar';
const App=()=>{
  return (
    <Container>
        <Sidebar/>
        <MainContent/>
    </Container>
  )
}

const Container=styled.div`
display: flex;
height: 97vh;
background: linear-gradient(to bottom right,white 0% #e6e4ff 70%);
border-radus:2rem ;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
export default App