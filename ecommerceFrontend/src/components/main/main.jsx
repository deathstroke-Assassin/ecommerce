import {
    Box,
    Button,
    CircularProgress,
    Container,
    IconButton,
    Modal,
    Rating,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Category, Close } from "@mui/icons-material";
import ProductDetials from "./ProductDetials";
import { AnimatePresence, motion } from "framer-motion";
import { useProductStore } from "../../stores/useProductStore";
import { useUserStore } from "../../stores/useUserStore";



export default function Main() {

    const { fetchAllProducts, fetchProductsByCategory, products, isLoading, error } = useProductStore();
    const { user, } = useUserStore();

    useEffect(() => {
        fetchAllProducts()
          },[fetchAllProducts])
        
        
    // const theme = useTheme();
    // const handleAlignment = (event, newValue) => {
    //     if (newValue !== null) {
    //     }
    // };
    const [ClickedProduct, setClickedProduct] = useState({})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: { xs: "100%", md: "60%" },
        minHeight: { xs: "100%", md: "60%" },
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        // Check if the page has already been reloaded
        if (!sessionStorage.getItem('reloaded')) {
            window.location.reload();
          sessionStorage.setItem('reloaded', 'true');
        }
      }, []);
    

    if (isLoading) {
        return <div>Loading...</div>;
    }

 return (


    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"} sx={{ display: "flex", alignItems: "center", gap: 12, flexDirection: { xs: "column", sm: "row" } }}>



                    
                    {(products.length > 0) && products.map((product) => {
                        return (
                            <Card
                                component={motion.section}
                                layout
                                initial={{ transform: "scale(0.5)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
                                key={product.name} sx={{
                                    maxWidth: 345, mt: 6,
                                    minWidth: 345,
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
                                <CardContent>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                    >
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>

                                        <Typography gutterBottom variant="subtitle1" component="p">
                                            ${product.price}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>{product.description}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Button onClick={() => {
                                        handleOpen()
                                        setClickedProduct(product)
                                    
                                    }}
                                        sx={{ textTransform: "capitalize" }} size="large">
                                        <AddShoppingCartRoundedIcon sx={{ mr: 2 }} />
                                        add to cart
                                    </Button>

                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <IconButton onClick={handleClose} sx={{
                                                position: "fixed", right: "8px", top: "8px",
                                                ":hover": { rotate: "180deg", transition: "0.3s", color: "#f00" }
                                            }}>
                                                <Close>

                                                </Close>
                                            </IconButton>


                                            <ProductDetials ClickedProduct={ClickedProduct} />


                                        </Box>
                                    </Modal>

                                    <Button sx={{ textTransform: "capitalize" }} size="large">
                                        <Rating precision={0.5} name="read-only" value={product.rating} readOnly />
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })}
                



            </Stack>
    )

// if (products) {
//     return (
        
    
//             <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"} sx={{ display: "flex", alignItems: "center", gap: 12, flexDirection: { xs: "column", sm: "row" } }}>


//                 <AnimatePresence>

                    
//                     {(products.length > 0) && products.map((product) => {
//                         return (
//                             <Card
//                                 component={motion.section}
//                                 layout
//                                 initial={{ transform: "scale(0.5)" }}
//                                 animate={{ transform: "scale(1)" }}
//                                 transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
//                                 key={product.name} sx={{
//                                     maxWidth: 345, mt: 6,
//                                     minWidth: 345,
//                                     minHeight: 550,
//                                     ":hover .MuiCardMedia-root": { rotate: "-1deg", transition: ".4s", scale: "1.1" },
//                                 }}
//                             >
//                                 <CardMedia
//                                     sx={{ height: 270 }}
//                                     // @ts-ignore
//                                     image={`${product.image}`}
//                                     title={product.name}
//                                 />
//                                 <CardContent>
//                                     <Stack
//                                         direction={"row"}
//                                         justifyContent={"space-between"}
//                                         alignItems={"center"}
//                                     >
//                                         <Typography gutterBottom variant="h5" component="div">
//                                             {product.name}
//                                         </Typography>

//                                         <Typography gutterBottom variant="subtitle1" component="p">
//                                             ${product.price}
//                                         </Typography>
//                                     </Stack>
//                                     <Typography variant="body2" sx={{ color: "text.secondary" }}>{product.description}
//                                     </Typography>
//                                 </CardContent>

//                                 <CardActions sx={{ justifyContent: "space-between" }}>
//                                     <Button onClick={() => {
//                                         handleOpen()
//                                         setClickedProduct(product)
//                                     }}
//                                         sx={{ textTransform: "capitalize" }} size="large">
//                                         <AddShoppingCartRoundedIcon sx={{ mr: 2 }} />
//                                         add to cart
//                                     </Button>

//                                     <Modal
//                                         open={open}
//                                         onClose={handleClose}
//                                         aria-labelledby="modal-modal-title"
//                                         aria-describedby="modal-modal-description"
//                                     >
//                                         <Box sx={style}>

//                                             <IconButton onClick={handleClose} sx={{
//                                                 position: "fixed", right: "8px", top: "8px",
//                                                 ":hover": { rotate: "180deg", transition: "0.3s", color: "#f00" }
//                                             }}>
//                                                 <Close>

//                                                 </Close>
//                                             </IconButton>


//                                             <ProductDetials ClickedProduct={ClickedProduct} />


//                                         </Box>
//                                     </Modal>

//                                     <Button sx={{ textTransform: "capitalize" }} size="large">
//                                         <Rating precision={0.5} name="read-only" value={product.rating} readOnly />
//                                     </Button>
//                                 </CardActions>
//                             </Card>
//                         )
//                     })}
//                 </AnimatePresence>



//             </Stack>
//             )
// }


// if (isLoading) { 
//     return (

//          <Container>
//             <Button> loadin ainsndian sdas
//                 AddShoppingCartRoundedasd
//             </Button>
//          </Container>
//     )
// }








} 

