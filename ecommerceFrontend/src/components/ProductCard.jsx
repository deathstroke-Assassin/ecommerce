import toast from "react-hot-toast";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
  const { products, isLoading } = useProductStore();

  const { fetchProductsByCategory } = useProductStore();
  const { category } = useParams();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useUserStore();

  const { addToCart } = useCartStore();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isLoading) {
    return (
      <Box>
        <CircularProgress sx={{ textAlign: "center", py: 11 }} />
      </Box>
    );
  }

  const handleAddtoCart = () => {
    if (!user) {
      toast.error("Please login to add product to cart", { id: "login" });
      return;
    } else {
      addToCart(product);
    }
  };

  if (product) {
    return (
      <Stack
        direction={"row"}
        justifyContent={"center"}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Card
          component={motion.section}
          layout
          initial={{ transform: "scale(0.5)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          key={product}
          sx={{
            maxWidth: 345,
            mt: 6,
            maxHeight: 550,
            minHeight: 550,
            ":hover .MuiCardMedia-root": {
              rotate: "-1deg",
              transition: ".4s",
              scale: "1.1",
            },
          }}
        >
          <CardMedia
            sx={{ height: 270 }}
            // @ts-ignore
            image={`${product.image}`}
            title={product.name}
          />
          <CardContent
            sx={{
              flexGrow: 1,
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {product.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="p">
                ${product.price}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.description}
            </Typography>
            <Button size="small" onClick={handleOpen} sx={{ mt: 1 }}>
              Read More
            </Button>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button
              onClick={() => {
                handleAddtoCart();
              }}
              sx={{
                textTransform: "capitalize",
                bottom: "2%",
              }}
              size="large"
            >
              <AddShoppingCartRoundedIcon sx={{ mr: 2 }} />
              add to cart
            </Button>

            <Button
              sx={{
                textTransform: "capitalize",
                bottom: "2%",
                right: "10px",
              }}
              size="large"
            >
              <Rating
                precision={0.5}
                name="read-only"
                value={product.rating}
                readOnly
              />
            </Button>
          </CardActions>
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{}}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "fixed",
                right: "8px",
                top: "8px",
                ":hover": {
                  rotate: "180deg",
                  transition: "0.3s",
                  color: "#f00",
                },
              }}
            >
              <Close></Close>
            </IconButton>
            <Stack
              direction={isMobile ? "column" : "row"}
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "space-between" ,
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: {
                  xs: "95%",
                  sm: "90%",
                  md: "75%",
                  lg: "65%",
                },
                maxHeight: "90vh",
                overflowY: "auto",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <CardMedia
                sx={{
                  width: {
                    xs: "100%",
                    md: "35%",
                    sm: "35%",
                  },
                  height: {
      xs: "auto",
      md: "auto",
    },
    aspectRatio: "1 / 1",
    objectFit: "cover",
    borderRadius: 2,
                }}
                // @ts-ignore
                image={`${product.image}`}
                title={product.name}
              />
              <Box
                sx={{
                  flex: 1,
                  overflowY: "auto",
                }}
              >
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleAddtoCart();
                    }}
                    sx={{
                      textTransform: "capitalize",
                      bottom: "2%",
                    }}
                    size="large"
                  >
                    <AddShoppingCartRoundedIcon sx={{ mr: 2 }} />
                    add to cart
                  </Button>

                  <Button
                    sx={{
                      textTransform: "capitalize",
                      bottom: "2%",
                      right: "10px",
                    }}
                    size="large"
                  >
                    <Rating
                      precision={0.5}
                      name="read-only"
                      value={product.rating}
                      readOnly
                    />
                  </Button>
                </CardActions>
                <Typography>$ {product.price} </Typography>

                <Typography>{product.description}</Typography>
              </Box>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    );
  }
};

export default ProductCard;
