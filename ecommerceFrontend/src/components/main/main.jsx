import {
    Box,
    Button,
    Container,
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
export default function Main() {
    const [alignment, setAlignment] = useState("left");
    const theme = useTheme();
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Container sx={{ mt: 3 }}>
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
                        value={alignment}
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
                            value="left"
                            aria-label="left aligned"
                        >
                            All products
                        </ToggleButton>
                        <ToggleButton
                            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                            className="MyButton"
                            value="center"
                            aria-label="centered"
                        >
                            Men Category
                        </ToggleButton>
                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className="MyButton"
                            value="right"
                            aria-label="right aligned"
                        >
                            Women Category
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Stack>

            <Stack direction={"row"} gap={3} flexWrap={"wrap"}>

{["acx", "bcx", "ca"].map((iteE) => {
    return (
        <Card key={iteE} sx={{ maxWidth: 345, mt: 6 }}>
        <CardMedia
            sx={{ height: 270 }}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
        />
        <CardContent>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Typography gutterBottom variant="h5" component="div">
                    T-shirt
                </Typography>

                <Typography gutterBottom variant="subtitle1" component="p">
                    $14.98
                </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>

        <CardActions sx={{justifyContent:"space-between"}}>
        <Button sx={{textTransform:"capitalize"}} size="large">
        <AddShoppingCartRoundedIcon sx={{mr: 2}}/>
            add to cart
        </Button>
            
        <Button sx={{textTransform:"capitalize"}} size="large">
        <Rating precision={0.5} name="read-only" value={3.5} readOnly />
            </Button>
        </CardActions>
    </Card>
    )
})}


        </Stack>
        </Container>
    );
}
