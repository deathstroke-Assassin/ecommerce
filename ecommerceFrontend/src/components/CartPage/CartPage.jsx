import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useCartStore } from "../../stores/useCartStore"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
    const {cart, removeFromCart, updateQuantity} = useCartStore()


    return (
    <Container sx={{  mt:"5%",mb:80 }}>

        <Container>
        {cart.length === 0 ? <EmptyCartItemSlot/> : 
    <Container >
    {cart.map((item) => (

        <Box  key={item._id}  >
            <CartItems item={item}/>
</Box>
    ))}
    </Container>
    
    }
            

        </Container>
    </Container>
            )

}


const EmptyCartItemSlot = () => {
return (
    <Stack >
        <ShoppingCartIcon sx={{ml: 4, fontSize: '140px'}}  />
            
    <Typography sx={{ fontSize: '24px', mb: 90 }}>Your cart is empty</Typography>
    </Stack>
)
}

const CartItems = ({item}) => {
    const {cart, removeFromCart, updateQuantity} = useCartStore()

    return (
        <Stack alignItems={"center"} display={"flex"}   direction={"row"} sx={{mx:0, my:2,backgroundColor: "#1F3947", borderRadius: "10px", p: 0 }} >
                
        
            <img width={"200px"} height={"200px"} src={item.image} alt="" />
        
            <Typography color="success" sx={{mx: 4, my:9}}>{item.name}</Typography>
                <Stack alignContent={"center"}  flexGrow={1} direction={"column"} sx={{mx:0, my:0,  borderRadius: "10px", p: 0 }} >

            
            <Button sx={{maxWidth: 100}} color="error" onClick={() => removeFromCart(item._id)}>
            <DeleteIcon/>
            </Button>
 

        </Stack>
        <Typography color="success"  sx={{mx:0, my:9}} >Price </Typography>

            <Typography color="warning" sx={{mx: 4, my:9}} >$ {item.price}</Typography>


        </Stack>
    )
}
export default CartPage