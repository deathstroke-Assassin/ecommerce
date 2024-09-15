import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
export default function Scroll() {
  return (
    <Zoom in={useScrollTrigger({threshold: 600})}>
        <Fab 
        onClick={(params) => {
            window.scrollTo(0, 0)
            transi
        }}
        sx={{
            position:"fixed", bottom: 40, right: 20
        }}
         variant="extended">
    <NavigationIcon sx={{  }} />

  </Fab>
  </Zoom>
  )
}
