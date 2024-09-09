import { ArrowForward } from "@mui/icons-material";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./styles.css"
export default function Hero() {
    return (
    <Container sx={{ mt: 3, alignItems:"center", display:"flex"}}>

        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="src\images\pexels-olly-840916.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\images\pexels-designecologist-1328545.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\images\pexels-garrettmorrow-682933.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\images\pexels-rfera-432059.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\images\pexels-thought-catalog-317580-904616.jpg" />
        </SwiperSlide>
        
        
      </Swiper>


        {useMediaQuery("(min-width:1200px)") && (
        <Box sx={{ml: 3}}>
            <Box sx={{position:"relative"}}>
            <img width={"100%"} src="src\images\pexels-japy-1069798.png" />
            
            <Box>
                <Typography sx={{position:"absolute", left: "8%" , top: "10%",
                    color:"#fff", fontSize:"20px",
                }} >Unleash the Power
                </Typography>
                <Typography sx={{position:"absolute", left: "8%" ,top: "22%",
                    color:"#fff", fontSize:"20px",
                }} >
                of Innovation</Typography>
                <Typography sx={{position:"absolute", left: "8%" , top: "39%",
                    color:"#c00", fontSize:"20px",
                }} >Sale 20% off
                </Typography>
                <Typography sx={{cursor: "pointer" ,position:"absolute", left: "8%" , top: "50%",
                    color:"#7FA100", fontSize:"29px",
                    alignContent: "center",
                    ":hover": {color: "#2aa", transition:"0.9s"}
                }} >Shop now
                <ArrowForward sx={{ml: 1,fontSize:"16px"}} />
                </Typography>
            </Box>
            </Box>
            <Box sx={{mt: 1}} />
                
            <Box sx={{position:"relative"}}>
            <img  src="src\images\pexels-maxavans-5058216.png" />
            <Box>
                <Typography sx={{position:"absolute", left: "8%" , top: "10%",
                    color:"#eee", fontSize:"25px",
                }} >Timeless Elegance 
                </Typography>
                <Typography sx={{position:"absolute", left: "8%" ,top: "22%",
                    color:"#fff", fontSize:"20px",
                }} >
                on Your Wrist</Typography>
                <Typography sx={{position:"absolute", left: "8%" , top: "74%",
                    color:"#cc0", fontSize:"20px",
                }} >Sale 10% off
                </Typography>
                <Typography sx={{cursor: "pointer" ,position:"absolute", left: "8%" , top: "80%",
                    color:"#7FA100", fontSize:"29px",
                    alignContent: "center",
                    ":hover": {color: "#2aa", transition:"0.9s"}
                }} >Shop now
                <ArrowForward sx={{ml: 1,fontSize:"16px"}} />
                </Typography>
            </Box>
            </Box>
        </Box>
        )}
            

    </Container>
    )
}
