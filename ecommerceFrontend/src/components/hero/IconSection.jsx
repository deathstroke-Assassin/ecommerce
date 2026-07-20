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
import ProductCard from "../ProductCard";

export default function IconSection() {
    
    const { products, isLoading, fetchFeaturedProducts,} = useProductStore();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

    useEffect(() => {
      fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);
  
  return (
    <Container>
      <Container sx={{ bgcolor: theme.palette.paperGrey.main, mt: 3 }}>
        <Stack
          direction={"row"}
          sx={{ display: "flex", flexWrap: "wrap" }}
          divider={isDesktop && <Divider orientation="vertical" flexItem />}
        >
          <Boxy
            icon={<CreditScoreOutlinedIcon sx={{ fontSize: "40px" }} />}
            text={"Payment"}
            subTitle={"Secure System"}
          ></Boxy>
          <Boxy
            icon={<ElectricBoltIcon sx={{ fontSize: "40px" }} />}
            text={"Fast delivery"}
            subTitle={"Starts from 8$"}
          ></Boxy>
          <Boxy
            icon={<WorkspacePremiumOutlinedIcon sx={{ fontSize: "40px" }} />}
            text={"Money Guarantee"}
            subTitle={"7 Days Back"}
          ></Boxy>
          <Boxy
            icon={<AccessAlarmOutlinedIcon sx={{ fontSize: "40px" }} />}
            text={"365 Days"}
            subTitle={"for free return"}
          ></Boxy>
        </Stack>
      </Container>
     
    </Container>
  );
}

const Boxy = ({ icon, text, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      flexGrow={1}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        py: 1,
        justifyContent: useMediaQuery("((min-width:1200px))")
          ? "center"
          : "left",
      }}
    >
      <Box>{icon}</Box>
      <Box>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            ml: 2,
            fontWeight: "300",
          }}
        >
          {text}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            ml: 2,
            alignContent: "center",
            fontWeight: "300",
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
