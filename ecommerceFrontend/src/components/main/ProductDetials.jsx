import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { useGetproductByNameQuery } from "../../Redux/product";

export default function ProductDetials() {
  const { data, error, isLoading } = useGetproductByNameQuery('products?populate=*')
  return (
    <Stack direction={"row"} sx={{display:"flex", flexDirection:{xs: "column", sm: "row"}}}>
        
        
            <Box sx={{display:"flex",mr: 5}} >
                <img width={350} src={`${import.meta.env.VITE_BASE_URL}${data.data[0].attributes.productImg.data[0].attributes.url}`} alt=""  />
            </Box>
            <Box>
        <Typography variant="h5">
        Men's Fashion
        
        </Typography>
        <Typography color="#a90101"fontWeight={600} fontSize={"20px"} variant="h6">
       
        $23.59
        </Typography>

        
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Cotton Flap Pocket Drawstring Waist Cargo Jeans
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Baggy Long Washed Denim Joggers Jean Plain Black Party Punk Rock Friends
          </Typography>

        <Stack direction={"row"} gap={3} marginTop={3}>
{import.meta.env.VITE_BASE_URL}${data.data[0].attributes.productImg.data.map((item) => {
    return (
        
        <img  width={150} key={item} src={`${item}`} />
        
    )
})}
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
