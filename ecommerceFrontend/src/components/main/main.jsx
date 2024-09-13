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
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Close } from "@mui/icons-material";
import ProductDetials from "./ProductDetials";
import { useGetproductByNameQuery } from "../../Redux/product";
import { AnimatePresence, motion } from "framer-motion";


export default function Main() {

    //API links to backend
    const allproductsAPI = 'products?populate=*'
    const MenproductsAPI = 'products?populate=*&filters[productCategory][$eq]=men'
    const WomenproductsAPI = 'products?populate=*&filters[productCategory][$eq]=women'


    // react useState to filter items by category
    const [myData, setmyData] = useState(allproductsAPI)

    const { data, error, isLoading } = useGetproductByNameQuery(myData)
    //




    const theme = useTheme();
    const handleAlignment = (event, newValue) => {
        if (newValue !== null) {
            setmyData(newValue);
        }

    };

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

    if (isLoading) {
        return (
            <Box>
                <CircularProgress sx={{ textAlign: "center", py: 11 }} />
            </Box>
        )
    }

    if (error) {
        <Container sx={{ textAlign: "center", py: 11 }}>
            <Typography>{error.
                // @ts-ignore
                error}</Typography>
            <Typography>Please try again later</Typography>
        </Container>
    }






    if (data) {
        return (
            <Container sx={{ mt: 3, paddingBottom: 6 }}>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    gap={3}
                >
                    <Box>
                        <Typography variant="h6"> Selected Products </Typography>
                        <Typography fontWeight={"300"} variant="body1">
                            All our new Arrivals in an exclusive brand selection
                        </Typography>
                    </Box>

                    <Box>
                        <ToggleButtonGroup
                            value={myData}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment"
                            color="success"
                            sx={{
                                ".Mui-selected": {
                                    border: "1px solid rgba(33, 239, 26, 0.5) !important",
                                    color: "limegreen",
                                    backgroundColor: "initial",
                                },
                            }}
                        >
                            <ToggleButton
                                sx={{ color: theme.palette.text.primary }}
                                className="MyButton"
                                value={allproductsAPI}
                                aria-label="left aligned"
                            >
                                All products
                            </ToggleButton>
                            <ToggleButton
                                sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                                className="MyButton"
                                value={MenproductsAPI}
                                aria-label="centered"
                            >
                                Men Category
                            </ToggleButton>
                            <ToggleButton
                                sx={{ color: theme.palette.text.primary }}
                                className="MyButton"
                                value={WomenproductsAPI}
                                aria-label="right aligned"
                            >
                                Women Category
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Stack>

                <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
<AnimatePresence>
                    {data.data.map((item) => {
                        return (
                            <Card
                                component={motion.section}
                                layout
                                initial={{transform: "scale(0.5)" }}
                                animate={{transform: "scale(1)" }}
                                transition={{ duration: 1.5, type:"spring",stiffness: 50}}
                                key={item.id} sx={{
                                    maxWidth: 345, mt: 6,
                                    ":hover .MuiCardMedia-root": { rotate: "-1deg", transition: ".4s", scale: "1.1" },
                                }}
                            >
                                <CardMedia
                                    sx={{ height: 270 }}
                                    // @ts-ignore
                                    image={`${item.attributes.productImg.data[0].attributes.url}`}
                                    title={item.attributes.productTitle}
                                />
                                <CardContent>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                    >
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.attributes.productTitle}
                                        </Typography>

                                        <Typography gutterBottom variant="subtitle1" component="p">
                                            ${item.attributes.productPrice}
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>{item.attributes.productDescription}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Button onClick={() => {
                                        handleOpen()
                                        setClickedProduct(item)
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
                                        <Rating precision={0.5} name="read-only" value={item.attributes.productRating} readOnly />
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })}
</AnimatePresence>




                </Stack>
            </Container>
        );
    }

}
