import { AppBar, Typography, Toolbar,IconButton,Button, Box} from '@mui/material';
import LOGO from 'assets/images/logo.png';
import {PersonAdd,Person} from '@mui/icons-material';
import styled from "@emotion/styled";

const Img = styled.img`
width: 35px;
`







const Nav = () => {



 


  return (

   
    <>
      <AppBar position="sticky" sx={{
       
      }}>
        
          <Toolbar disableGutters sx={{
             display: "flex",
             backgroundColor: '#063970'
          }}>


            <Box flex={10} sx={{display: 'flex', alignItems: 'center'}}>
            <IconButton  sx={{  display: { xs: 'none', md: 'flex' }}}>
                <Img src={LOGO} alt="Logo" />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'cambria',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            
            >Kueentair</Typography>
            </Box>
             
            
          
           
            <Box flex={1} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <Button variant="contained" sx={{mr:1, fontSize: '0.6rem',backgroundColor:'white',color: '#063970'}} size="small" startIcon={<PersonAdd/>}>Register</Button>
           
            </Box>
            <Box flex={1} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
           
            <Button variant="contained" sx={{ fontSize: '0.6rem', backgroundColor:'white',color: '#063970'}} size="small" startIcon={<Person/>}>Login</Button>
            </Box>
            
          </Toolbar>
        
      </AppBar>
    </>
  );
};

export default Nav;
