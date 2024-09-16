
import { Box, Button, Card, Container, IconButton,    ListItemText, Menu,  MenuItem,  Stack,  Typography, useTheme, } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AllCategoriesPage = () => {

    const categories = [
        { href: "/category/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
        { href: "/category/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
        { href: "/category/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
        { href: "/category/Accessories", name: "Accessories", imageUrl: "/Accessories.jpg" },
        { href: "/category/glasses", name: "Glasses", imageUrl: "/glasses.png" },
        { href: "/category/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
        { href: "/category/suits", name: "Suits", imageUrl: "/suits.jpg" },
    ];
    
    


  return (

   <Container  sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", mt:20}}>
    <Stack direction="row" spacing={2}>
    <Typography variant="h3">Categories</Typography>



        {categories.map((option, index) => (
        (
            <Card
            component={motion.section}
            layout
            initial={{transform: "scale(0.5)" }}
            animate={{transform: "scale(1)" }}
            transition={{ duration: 1.5, type:"spring",stiffness: 50}}
            key={option} sx={{
                maxWidth: 345, mt: 6,
                maxHeight: 550,
                
                ":hover .MuiCardMedia-root": { rotate: "-1deg", transition: ".4s", scale: "1.1" },
            }}
        >

                <Button>
            <Link
            key={option.name}
            to={option.href}
            component={Typography}
            >
            
        <Typography sx={{color:"White", textAlign:"center", fontWeight:"bold", fontSize:"20px"}}>{categories[index].name}</Typography>
       
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