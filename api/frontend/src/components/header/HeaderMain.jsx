import { Typography,Box, Stack} from '@mui/material';
import {Hotel,Flight,BeachAccess,Tour,CreditScore,Luggage} from '@mui/icons-material';

const HeaderMain = () => {
  return (
    <Stack  
         
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 2, sm: 2, md: 4 }}
    justifyContent='space-evenly' p={2}
    alignItems="center"
    sx={{
      backgroundColor: '#063970',
      color:'white',
      pb:2
     }}>


    <Box sx={{display: 'flex', border: '1px solid white', borderRadius:'20px', p:1, cursor:'pointer'}} >
    <Hotel sx={{mr: 1}}/> <Typography component="span">Stays</Typography>
    </Box>
    <Box sx={{display: 'flex' , cursor:'pointer'}} >
    <Flight sx={{mr: 1}}/> <Typography component="span">Flights</Typography>
    </Box>
    
    <Box sx={{display: 'flex' , cursor:'pointer'}} >
    <Tour sx={{mr: 1}}/> <Typography component="span">Tour</Typography>
    </Box>
    <Box sx={{display: 'flex' , cursor:'pointer'}} >
    <CreditScore sx={{mr: 1}}/> <Typography component="span">Visa</Typography>
    </Box>
    <Box sx={{display: 'flex' , cursor:'pointer'}} >
    <Luggage sx={{mr: 1}}/> <Typography component="span">Cargo</Typography>
    </Box>
    <Box sx={{display: 'flex' , cursor:'pointer'}} >
    <BeachAccess sx={{mr: 1}}/> <Typography component="span">Vacations</Typography>
    </Box>
    </Stack>

  )
}

export default HeaderMain