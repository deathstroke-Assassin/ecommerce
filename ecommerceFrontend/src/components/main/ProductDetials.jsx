/* eslint-disable react/prop-types */
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useState } from "react";
import { useCartStore } from "../../stores/useCartStore";
import { useUserStore } from "../../stores/useUserStore";
import toast from "react-hot-toast";



export default function ProductDetials({ClickedProduct}) {
  const [selectedImg, setselectedImg] = useState(0)
  const [setAlignment] = useState(ClickedProduct.image);
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setselectedImg(value)
    }
  };
  const { addToCart } = useCartStore()

  const {user} = useUserStore()

  const handleAddtoCart = () => {
    if (!user) {
        toast.error("Please login to add product to cart", {id: "login"})
        return;
    } else {
      addToCart(ClickedProduct)
        
}}

  return (
    <Stack direction={"row"} sx={{display:"flex", flexDirection:{xs: "column", sm: "row"}}}>
        
        
            <Box sx={{display:"flex",mr: 5}} >
                <img width={350} src={`${ClickedProduct.image}`} alt=""  />
            </Box>
            <Box>
        <Typography variant="h5">
        {ClickedProduct.name}
        
        </Typography>
        <Typography color="#a90101"fontWeight={600} fontSize={"20px"} variant="h6">
      
        ${ClickedProduct.price}
        </Typography>

        
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {ClickedProduct.description}
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



      <ToggleButton 
      value={ClickedProduct.image}
      
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
        src={`${ClickedProduct.image}`}/>
        


    </ToggleButton>
   

</ToggleButtonGroup>
        </Stack>

        <Button variant="contained"
        sx={{mb: {xs: 3, md: 0}, mt: 6, textTransform:"capitalize", fontSize:"20px",
            fontWeight: 700, bottom: {xs: "40px", sm: "0"},
        }}
        onClick={() => {
          handleAddtoCart()
          
      }}>
        <AddShoppingCartRoundedIcon sx={{mr: 2}}/>
        Buy Now
        </Button>
            </Box>
            
    </Stack>
    
  )
}
