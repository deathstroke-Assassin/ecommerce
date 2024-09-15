/* eslint-disable react/prop-types */
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useState } from "react";

export default function ProductDetials({ClickedProduct}) {
  const [selectedImg, setselectedImg] = useState(0)
  const [setAlignment] = useState('left');
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Stack direction={"row"} sx={{display:"flex", flexDirection:{xs: "column", sm: "row"}}}>
        
        
            <Box sx={{display:"flex",mr: 5}} >
                <img width={350} src={`${ClickedProduct.attributes.productImg.data[selectedImg].attributes.url}`} alt=""  />
            </Box>
            <Box>
        <Typography variant="h5">
        {ClickedProduct.attributes.productTitle}
        
        </Typography>
        <Typography color="#a90101"fontWeight={600} fontSize={"20px"} variant="h6">
      
        ${ClickedProduct.attributes.productPrice}
        </Typography>

        
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {ClickedProduct.attributes.productDescription}
          </Typography>

        <Stack direction={"row"} gap={3} marginTop={3}>

        <ToggleButtonGroup
      value={selectedImg}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        
        ".Mui-selected": {
          border: "1px solid  !important",
          color: "limegreen",
          opacity:"1"
      }}}
    >

{ClickedProduct.attributes.productImg.data.map((item, index) => {
    return (
      <ToggleButton key={item.id}
      value={index}
      sx={{
        width:"150px",
        height:"200px",
        mx:2,
        p:0,
        opacity:"0.5"
      }}
      >


      <img
        width={"100%"}
        height={"100%"}
        src={`${item.attributes.url}`}
        onClick={() => {
          setselectedImg(index)
        }}
        />

    </ToggleButton>
        
    )
})}


</ToggleButtonGroup>
        </Stack>

        <Button variant="contained"
        sx={{mb: {xs: 3, md: 0}, mt: 6, textTransform:"capitalize", fontSize:"20px",
            fontWeight: 700, bottom: {xs: "40px", sm: "0"},
        }}>
        <AddShoppingCartRoundedIcon sx={{mr: 2}}/>
        Buy Now
        </Button>
            </Box>
            
    </Stack>
    
  )
}
