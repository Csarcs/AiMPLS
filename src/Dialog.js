import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AllOutIcon from '@mui/icons-material/AllOut';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function FullScreenDialog({model}) {

    console.log(model.model_url);
  
    const [open, setOpen] = React.useState(0);
    


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        
      <React.Fragment>

        <Button variant="outlined" size="small" onClick={handleClickOpen}>
        <AllOutIcon/>Expand View
        </Button>

        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
           {model.name}
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>

                
            <model-viewer id="lazy-load" auto-rotate loading="eager" ar camera-controls touch-action="pan-y" src={model.modelurl} shadow-intensity="1" alt={model.name}>
             <button id="ar-failure">
                AR is not tracking!
             </button>
             
             <button slot="ar-button" id="ar-button">
               View in your space
             </button>
             <div className="model-description"></div>
              </model-viewer>   


            </ListItem>
            <Divider />

            
            <ListItem button>

    
        

              <ListItemText
                primary={model.name}
                secondary={model.artist}
            
              />
            </ListItem>
          </List>
        </Dialog>


      </React.Fragment>
    );
  }
 


  export default FullScreenDialog;
