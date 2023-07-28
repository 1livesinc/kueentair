import {  Box } from '@mui/material';
import Nav from "components/navbar/Nav";
import HeaderMain from "components/header/HeaderMain";
import Feed from "components/feed/Feed";
import FeaturedCity from "components/city/FeaturedCity";
import Property from "components/propertyList/Property";
import MailList from "components/mailList/MailList";
import Footer from "components/footer/Footer";



const Home = () => {

  return (
    <Box>
        <Nav />
       <HeaderMain/>
       <Feed />
       <FeaturedCity />
       <Property/>
       <MailList />
       <Footer />
       

    </Box>
     
     
   
  )
}

export default Home;