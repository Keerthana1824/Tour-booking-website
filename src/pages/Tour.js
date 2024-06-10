import { Box, Container, Typography, Paper, BottomNavigation} from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordion'
import BasicModal from '../components/Modal'


const Tour = () => {
  return (
   <Container sx = {{width: 900}} >  
   <Typography variant = "h3" component = "h1" marginTop={4}> 
        Explore the world in Vegas
   </Typography>
   <Box marginTop={3} sx = {{display: "flex"}}>
        <img src = "https://cdn.pixabay.com/photo/2013/02/16/17/36/las-vegas-82319_640.jpg" alt = "" height={450} width = {540} />
        <ImageCollage />
   </Box>
   <Box>
        <Typography variant = "h6" component = "h4" marginTop={4}> 
            About this ticket
        </Typography>
        <Typography variant = "paragraph" component = "p" marginTop={4}> 
        Experience the vibrant energy of Las Vegas with our exclusive one-week 
        tour ticket package! Enjoy luxurious accommodation at a top hotel on the Strip, daily breakfast, and guided 
        tours of iconic landmarks such as the Bellagio Fountains, Fremont Street, and the Neon Museum. The package includes tickets to 
        a world-class show, a Grand Canyon day trip, and a VIP casino experience. Book now for an unforgettable adventure!
        </Typography>
   </Box>
   <Box marginBottom={10}>
   <Typography variant = "h6" component = "h4" marginTop={4} marginBottom={2}> 
       Frequently Asked Questions
   </Typography>
        <CustomizedAccordions />
   </Box>
   <Paper 
        sx={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0,
            right: 0 
        }} 
        elevation={3}>  
        <BottomNavigation >
            <BasicModal/>
        </BottomNavigation> 
      </Paper>
   </Container>
  )
}

export default Tour