import React from 'react'
import { Paper, Grid, Typography, Box, createTheme,ThemeProvider } from '@mui/material';
import {AccessTime} from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';


const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 13,
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        }
    }
})



const TourImg = styled('img')({
    width: '100%',
    verticalAlign: 'middle',
    objectFit: 'cover', 
    height: 200,
  });


const TourCard = ({tour}) => {
  return (
    <Grid item xs = {3}  sx={{ height: 400 }}>
        <ThemeProvider theme={theme}>
        <Paper elevation = {3}  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
        <TourImg src={tour.image} alt='' />
        <Box paddingX={1} flexGrow={1}>
            <Typography variant='subtitle1' component="h2">
                {tour.name}
            </Typography>
            <Box
            sx={{
                display: "flex",
                alignItems: "center"
            }}
            >
            <AccessTime sx = {{width:12.5}}/>
            <Typography variant = "body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
            </Typography>
        </Box>
        <Box 
            sx={{
                display: "flex",
                alignItems: "center",   
            }}
            marginTop={3}
        >
            
            <Rating 
                name="read-only" 
                value={tour.rating} 
                precision={0.5} 
                size='small'
                readOnly 
            />
            <Typography variant = "body2" component="p" marginLeft={0.5}>
            {tour.rating} 
            </Typography>
            <Typography variant = "body2" component="p" marginLeft={0.5}>
                {tour.numberOfReviews} reviews
            </Typography>
        </Box>
        <Box>
            <Typography variant = "h6" component="h3" marginTop={0}>
                From C $ {tour.price}
            </Typography>
        </Box>
        </Box >
       
        </Paper>
        </ThemeProvider>
    </Grid>
  )
}

export default TourCard