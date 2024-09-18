import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useCartStore } from "../../stores/useCartStore"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@emotion/react';
import { useEffect } from "react";
import toast from "react-hot-toast";
import "../../index.css"
const CartPage = () => {
    const {cart, removeFromCart, updateQuantity, subtotal, total, calculateTotals} = useCartStore()
    const theme = useTheme()

    return (
    <Container sx={{  mt:"5%",mb:80 }}>

        <Container>
        {cart.length === 0 ? <EmptyCartItemSlot/> : 
    <Container sx={{ display: "flex", flexDirection: "row", gap: 1 }} >
        <Container sx={{ display: "flex", flexDirection: "column", gap: 1 }} >
    
    {cart.map((item) => (

        <Box  key={item._id}  >
            <CartItems item={item}/>
</Box>
    ))}

    </Container>
    <OrderSummary></OrderSummary>
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
    const {cart, removeFromCart, updateQuantity, total, subtotal} = useCartStore()
    const theme = useTheme()
    return (
        <Stack direction={"row"} gap = {1} sx={{flexWrap: "nowrap", display:"flex", }}>
        <Stack className="Dgradient" alignItems={"center"}   direction={"row"} sx={{ml:0, my:2, borderRadius: "10px", p: 0,
            maxHeight: "200px",
            minWidth: "900px",
         }} >
                
        <Box sx={{mx: 0, mt:0.7, p:0}}>
            <img width={"200px"} height={"200px"} src={item.image} alt="" />
            </Box>
            <Typography fontWeight={"bold"} fontSize={30} color = {theme.palette.text.primary} sx={{mx: 4, mb:9}}>{item.name}</Typography>
                <Stack alignContent={"center"}  flexGrow={1} direction={"column"} sx={{mx:0, my:0,  borderRadius: "10px", p: 0 }} >

            
            <Button sx={{maxWidth: 100}} color="error" onClick={() => removeFromCart(item._id)}>
            <DeleteIcon/>
            </Button>


        </Stack>
        <Typography color="success"  sx={{ml:9, my:9}} >Price: </Typography>

            <Typography color="warning" sx={{mx: 4, my:9, width: 100}} >$ {item.price}</Typography>


        </Stack>
      
                </Stack>
    )
}


const OrderSummary = () => {
const {cart, removeFromCart, updateQuantity, total, subtotal, clearCart} = useCartStore()
const theme = useTheme()
const discounted = total - subtotal
    return (
        <Stack className="gradient"  sx={{ml: 5, my:2,  borderRadius: "10px", p: 0,
            maxHeight: "300px",
            minWidth: "400px",
         }} >
        <Typography width={300} fontWeight={"bold"} fontSize={35} color = {theme.palette.text.primary} sx={{mx: 4, my:2}}>
            Order Summary
        </Typography>

        <Typography width={300} fontWeight={"bold"} fontSize={20} color = {theme.palette.text.secondary} sx={{mx: 4, my:0}}>
            Original price: ${total.toFixed(2)} 
        </Typography>
        <Typography width={300} fontWeight={"bold"} fontSize={20} color = "#9F0510" sx={{mx: 4, mb:5}}>
            final price: ${total.toFixed(2) - discounted.toFixed(2)} 
        </Typography>

        <Button
        onClick={() => (
            toast.success("Order Placed"),
            clearCart()
        )}
        
        color="success" variant="contained" sx={{maxWidth: 200, ml: 12,}} size="large">
            Buy NOW
        </Button>
                </Stack>
    )
}
export default CartPage