import * as React from 'react';
import Models from './Models';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './images/aimplslogo_l.png';
import './App.css';
import FullScreenDialog from './Dialog';
import SuggeCard from './loads';




const defaultTheme = createTheme();

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://aimpls.com/">
        Ai.Mpls
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function App() {
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          <img src={logo} className="App-logo" alt="logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">

         

            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
           Minneapolis Sculpture Garden
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Beloved destination that brings together art and nature. A must-see experience that combines cultural enrichment with the beauty of the city's park system.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" target="_blank" href="http://walkerart.org/visit/garden">Official Website</Button>
              <Button variant="outlined" target="_blank" href="https://www.google.com/maps/dir//Minneapolis+Sculpture+Garden/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x52b332c2959a5a09:0x53cb0d9c6c288d6f?sa=X&ved=2ahUKEwiN_YWiiOX_AhWFlYkEHVnHBbkQ9Rd6BAhxEAA&ved=2ahUKEwiN_YWiiOX_AhWFlYkEHVnHBbkQ9Rd6BAh7EAU">How to get there</Button>
            </Stack>

          </Container>
        </Box>
        <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
          3D Models viewer
            </Typography>
        <Container sx={{ py: 8 }} maxWidth="md">

          {/* End hero unit */}
          <Grid container spacing={4}>
            {Models.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                        {card.content}
                    </Typography>
                    </CardContent>

                  <CardActions>        
                    <FullScreenDialog model={card}/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <h2 className="whatToDo MuiTypography-h2 css-10759ka-MuiTypography-root">
          What to do In Minneapolis
            </h2>
          <SuggeCard/>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          w/&#60;3 by Csar!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    
    </ThemeProvider>
  );

  


}





export default App;
