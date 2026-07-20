import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { Link } from "react-router-dom";
import { useProductStore } from "../../stores/useProductStore";
import { motion } from "framer-motion";

import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";

export default function FeaturedProducts() {
    
    const { products, isLoading, fetchFeaturedProducts,} = useProductStore();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

    useEffect(() => {
      fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);
{{console.log(products)}}
  
  return (
    <Container>

      <Box alignItems={"center"}>
        {!isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
           
            <div>
              <motion.h1
                className="text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: "center", marginTop: "40px" }}
              >
                <Box flexGrow={0.5} />
                Featured Products
              </motion.h1>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 3,
                  }}
                  direction={"row"}
                  justifyContent={"center"}
                  gap={6}
                >
                  {products?.length === 0 && (
                    <h2 className="text-3xl font-semibold text-gray-300 text-center col-span-full">
                      No products found
                    </h2>
                  )}
                  {products.length > 0 &&
                    products?.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </Box>
              </motion.div>
            </div>
          </Box>
        )}
      </Box>
    </Container>
  );
}

