import toast from "react-hot-toast"
import { Box, Button, IconButton, Modal,
        Rating, Stack, Typography, } from "@mui/material";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";


const ProductCard =  ({ product }) => {

    const {  products, isLoading } = useProductStore();


    const {fetchProductsByCategory} = useProductStore()
    const {category} = useParams()
    useEffect(() => {
        fetchProductsByCategory(category)
    }, [fetchProductsByCategory, category])
    

    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


if (isLoading) {
    <div>Loading...</div>
}

    if (product) {
        return (
            <Stack direction={"row"} justifyContent={"center"} sx={{display:"flex", alignItems:"center", gap: 6 ,  flexDirection:{xs: "column", sm: "row"}}}>
                
                                <Card
                                    component={motion.section}
                                    layout
                                    initial={{transform: "scale(0.5)" }}
                                    animate={{transform: "scale(1)" }}
                                    transition={{ duration: 1.5, type:"spring",stiffness: 50}}
                                    key={product} sx={{
                                        maxWidth: 345, mt: 6,
                                        maxHeight: 550,
                                        minHeight: 550,
                                        ":hover .MuiCardMedia-root": { rotate: "-1deg", transition: ".4s", scale: "1.1" },
                                    }}
                                >
                                    <CardMedia
                                        sx={{ height: 270 }}
                                        // @ts-ignore
                                        image={`${product.image}`}
                                        title={product.name}
                                    />
                                    <CardContent sx={{ position: "relative" }}>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                            alignItems={"center"}
                                        >
                                            <Typography sx={{ fontWeight: "bold", }} gutterBottom variant="h5" component="div">
                                                {product.name}
                                            </Typography>
                                            <Typography gutterBottom variant="subtitle1" component="p">
                                                ${product.price}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="body2" sx={{ color: "text.secondary", maxHeight: 50 }}>{product.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "space-between" }}>
                                        <Button  onClick={() => {
                                            handleOpen()
                                            setClickedProduct(product)
                                        }}
                                            sx={{ textTransform: "capitalize",position: "absolute", bottom: "10px" }} size="large">
                                            <AddShoppingCartRoundedIcon sx={{ mr: 2 }} />
                                            add to cart
                                        </Button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={{}}>
                                                <IconButton onClick={handleClose} sx={{
                                                    position: "fixed", right: "8px", top: "8px",
                                                    ":hover": { rotate: "180deg", transition: "0.3s", color: "#f00" }
                                                }}>
                                                    <Close>
                                                    </Close>
                                                </IconButton>
                                            </Box>
                                        </Modal>
                                        <Button sx={{ textTransform: "capitalize", position: "absolute", bottom: "10px", right: "10px" }} size="large">
                                            <Rating precision={0.5} name="read-only" value={product.rating} readOnly />
                                        </Button>
                                    </CardActions>
                                </Card>
        
        
            </Stack>
          )
    }

}

export default ProductCard