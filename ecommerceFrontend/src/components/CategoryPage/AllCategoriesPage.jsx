
import { Box, Button, Card, CardMedia, Container, IconButton, ListItemText, Menu, MenuItem, Stack, Typography, useTheme, } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AllCategoriesPage = () => {

    const categories = [
        { href: "/category/t-shirts", name: "T-shirts", imageUrl: "/images/categories/t-shirts.jpg" },
        { href: "/category/shoes", name: "Shoes", imageUrl: "/images/categories/shoes.jpg" },
        { href: "/category/jeans", name: "Jeans", imageUrl: "/images/categories/jeans.jpg" },
        { href: "/category/Accessories", name: "Accessories", imageUrl: "/images/categories/accessories.jpg" },
        { href: "/category/glasses", name: "Glasses", imageUrl: "/images/categories/glasses.jpg" },
        { href: "/category/jackets", name: "Jackets", imageUrl: "/images/categories/jackets.jpg" },
        { href: "/category/suits", name: "Suits", imageUrl: "/images/categories/suits.jpg" },
    ];




    return (

        <Container sx={{  justifyContent: "center", alignItems: "center", mt: 20 }}>
            
                <Typography sx={{ color: "White", textAlign: "center", fontWeight: "bold", fontSize: "40px", mb: 2 }} variant="h3">Categories</Typography>

                <Stack direction={"row"} sx={{display: "flex" ,flexWrap: "wrap" , gap: 2}}>

                {categories.map((option, index) => (
                    (
                        <Card
                            component={motion.section}
                            layout
                            initial={{ transform: "scale(0.5)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
                            key={option} 
                            sx={{
                                flexBasis: "calc(33.333% - 16px)", // Adjust the percentage as needed
                            flexGrow: 1,
                            maxWidth: "345px", mt: 6,
                                maxHeight: 550,

                                ":hover .MuiCardMedia-root": { rotate: "-1deg", transition: ".4s", scale: "1.1" },
                            }}
                        >
                            <CardMedia
                                sx={{ height: 270, width: "100%", mb: 2 }}
                                // @ts-ignore
                                image={option.imageUrl}
                                title={option.name}
                            />
                            <Button>
                                <Link
                                    key={option.name}
                                    to={option.href}
                                    component={Typography}
                                >
                                
                                    <Typography sx={{ color: "White", textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>{categories[index].name}</Typography>

                                </Link>
                            </Button>
                        </Card>
                    )
                ))}





            </Stack>
        </Container>





    )
}

export default AllCategoriesPage