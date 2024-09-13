import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./styles.css"
import IconSection from "./iconSection";
export default function Hero() {
    return (
    <Container >
<Box sx={{ mt: 3, alignItems:"center", display:"flex", pt: 2,}}>
    
            <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src=".\images\pexels-joshsorenson-1714208.jpg" />
    
                <Box>
                    <Typography sx={{position:"absolute", left: "8%" , top: "60%",
                        color:"#afa", fontSize:"40px",fontWeight: 700,
                        textShadow: '2px 2px 2px black' 
                    }} >Level Up 
                    </Typography>
                    <Typography  sx={{position:"absolute", left: "8%" ,top: "70%",
                        color:"#6ff", fontSize:"40px",fontWeight: 700,
                        textShadow: '2px 2px 2px black' 
                    }} >
                    Your Gaming Experience</Typography>
                    
                </Box>
                <Button sx={{position:"absolute", top: "85%",
                    backgroundColor: "#222",
                    ":hover": {backgroundColor: "#333",},
                    color: "#fff",
                    fontSize:"20px",fontWeight: 700,
                        textShadow: '2px 2px 2px black' 
                }}>
                    SHOP NOW
                </Button>
            </SwiperSlide>
            <SwiperSlide>
                <img src=".\images\pexels-designecologist-1328545.jpg" />
    
                <Box>
                    <Typography sx={{position:"absolute", left: "30%" , top: "80%",
                        color:"#1db", fontSize:"40px",fontWeight: 700,
                        textShadow: '2px 2px 2px black' 
                    }} >Embrace Your Individuality
                    </Typography>
                </Box>
    
            </SwiperSlide>
            
            <SwiperSlide>
            <img src=".\images\pexels-olly-840916.jpg" />
    
            <Box>
                    <Typography sx={{position:"absolute", left: "8%" , top: "60%",
                        color:"#dbc1ac", fontSize:"40px",fontWeight: 700,
                        textShadow: '2px 2px 2px black' 
                    }} >Elevate Your Style 
                    </Typography>
                    <Typography  sx={{position:"absolute", left: "8%" ,top: "70%",
                        color:"#967259", fontSize:"40px",fontWeight: 700,
                        textShadow: '2px 2px 2px black' 
                    }} >
                    with Our Latest Collection</Typography>
                    
                </Box>
    
            </SwiperSlide>
            
            <SwiperSlide>
                <img src=".\images\pexels-rfera-432059.jpg" />
                <Box>
                    <Typography sx={{position:"absolute", left: "8%" , top: "80%",
                        color:"#fff", fontSize:"40px",fontWeight: 700,
                        textShadow: '2px 2px 2px black' 
                    }} >Where Fashion Dreams Come True
                    </Typography>
    
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <img src=".\images\pexels-thought-catalog-317580-904616.jpg" />
                <Box>
                    <Typography sx={{position:"absolute", left: "8%" , top: "6%",
                        color:"#6F4E37", fontSize:"40px",fontWeight: 700,
                        textShadow: '2px 2px 2px black' 
                    }} > Dive into the World of Books
                    </Typography>
                    
                </Box>
            </SwiperSlide>
            
            
          </Swiper>
    
    
            {useMediaQuery("(min-width:1200px)") && (
            <Box sx={{ml: 3}}>
                <Box sx={{position:"relative"}}>
                <img height={240} width={365} src=".\images\vecteezy_flat-lay-of-a-smartphone-mockup-with-headphones-and-leaf_1309411.jpg" />
                
                <Box>
                    <Typography sx={{position:"absolute", left: "30%" , top: "10%",
                        color:"#fff", fontSize:"20px",
                        fontWeight:"700",
                        textShadow: '2px 2px 2px black' 
                    }} >Unleash the Power
                    </Typography>
                    <Typography sx={{position:"absolute", left: "30%" ,top: "22%",
                        color:"#fff", fontSize:"20px",
                        fontWeight:"700",
                        textShadow: '2px 2px 2px black' 
                    }} >
                    of Innovation</Typography>
                    <Typography sx={{position:"absolute", left: "30%" , top: "39%",
                        color:"#c00", fontSize:"20px",
                        fontWeight:"700",
                        textShadow: '1px 1px 1px black' 
                    }} >Sale 20% off
                    </Typography>
                    <Typography sx={{cursor: "pointer" ,position:"absolute", left: "40%" , top: "65%",
                        color:"#7FA1f0", fontSize:"29px",
                        alignContent: "center",
                        fontWeight:"700",
                        
                        textShadow: '1px 1px 1px black' ,
                        ":hover": {color: "#2aa", transition:"0.9s"}
                    }} >Shop now
                    <ArrowForward sx={{ml: 1,fontSize:"16px"}} />
                    </Typography>
                </Box>
                </Box>
                <Box sx={{mt: 1}} />
                    
                <Box sx={{position:"relative"}}>
                <img height={240} width={365} src=".\images\watch.png" />
                <Box>
                    <Typography sx={{position:"absolute", left: "8%" , top: "10%",
                        color:"#eee", fontSize:"25px",
                        textShadow: '2px 2px 2px black' 
                    }} >Timeless
                    </Typography>
                    <Typography sx={{position:"absolute", left: "8%" ,top: "22%",
                        color:"#fff", fontSize:"20px",
                        textShadow: '2px 2px 2px black' 
                    }} >
                     Elegance </Typography>
                    <Typography sx={{position:"absolute", left: "8%" , top: "34%",
                        color:"#cc0", fontSize:"20px",
                        textShadow: '2px 2px 2px black' 
                    }} >Sale 10% off
                    </Typography>
                    <Typography sx={{cursor: "pointer" ,position:"absolute", left: "8%" , top: "70%",
                        color:"#aFA100", fontSize:"29px",
                        alignContent: "center",
                        fontWeight:"600",
                        textShadow: '2px 2px 2px black' ,
                        ":hover": {color: "#2aa", transition:"0.9s"}
                    }} >Shop now
                    <ArrowForward sx={{ml: 1,fontSize:"16px"}} />
                    </Typography>
                </Box>
                </Box>
            </Box>
            )}
                
    
</Box>
<IconSection></IconSection>
    </Container>
    )
}
