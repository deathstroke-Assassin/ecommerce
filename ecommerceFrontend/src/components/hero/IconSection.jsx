import { Box, Button, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@emotion/react';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import { Link } from "react-router-dom";
import { useProductStore } from "../../stores/useProductStore";

export default function IconSection() {

    const { isLoading, } = useProductStore();

    const theme = useTheme()
    return (
        <Container>
        <Container sx={{ bgcolor: theme.palette.paperGrey.main, mt: 3 }}>
            <Stack direction={"row"} sx={{ display: "flex", flexWrap: "wrap" }}
                divider={useMediaQuery("(min-width:1200px)") ? <Divider orientation="vertical" flexItem /> : null}>
                <Boxy icon={<CreditScoreOutlinedIcon sx={{ fontSize: "40px" }} />} text={"Payment"} subTitle={"Secure System"} ></Boxy>
                <Boxy icon={<ElectricBoltIcon sx={{ fontSize: "40px" }} />} text={"Fast delivery"} subTitle={"Starts from 8$"} ></Boxy>
                <Boxy icon={<WorkspacePremiumOutlinedIcon sx={{ fontSize: "40px" }} />} text={"Money Guarantee"} subTitle={"7 Days Back"} ></Boxy>
                <Boxy icon={<AccessAlarmOutlinedIcon sx={{ fontSize: "40px" }} />} text={"365 Days"} subTitle={"for free return"} ></Boxy>

            </Stack>
        </Container>
            <Box alignItems={"center"}>
                {
                    !isLoading && <Box sx={{ display: "flex", justifyContent: "center" }}>




                        <Link
                            to={"/products/"}
                            style={{
                                marginTop: '40px',
                                fontSize: '16px',
                                minWidth: '90px',
                                marginLeft: '0px',
                                marginBottom: '40px',
                            }}
                        >
                            <Button variant="contained" sx={{
                                textTransform: "capitalize",
                                color: 'lemonchiffon', bgcolor: theme.palette.header1.main,
                                minWidth: '90px',
                            }}>
                                <Typography>View All Products </Typography>
                            </Button>
                        </Link>
                    </Box>
                }
            </Box>
            </Container>
    )
}

const Boxy = ({ icon, text, subTitle }) => {
    const theme = useTheme()
    return (
        <Box flexGrow={1} sx={{
            display: "flex", alignItems: "center", direction: "row",
            width: "190px", gap: 2, py: 1,
            justifyContent: useMediaQuery("((min-width:1200px))") ? "center" : "left"
        }}>
            <Box >
                {icon}
            </Box>
            <Box>
                <Typography sx={{
                    color: theme.palette.text.primary,
                    ml: 2,
                    fontWeight: "300"
                }}>
                    {text}
                </Typography>
                <Typography sx={{
                    color: theme.palette.text.secondary,
                    ml: 2,
                    alignContent: "center",
                    fontWeight: "300",
                }}>
                    {subTitle}
                </Typography>
        </Box >
        </Box >
  )
}
