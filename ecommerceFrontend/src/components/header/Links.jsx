import { ArrowRightAltOutlined, ArrowRightOutlined, ArrowRightSharp, ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, ListItem, ListItemButton, ListItemText, Menu, Paper, Typography } from "@mui/material";
import List from '@mui/material/List';
import { useTheme } from '@emotion/react';
import { useState } from "react";

export default function Links({title}) {
    
    const theme = useTheme()
    
    
    
    
    
    return (
        <Box sx={{position: "relative", display: "flex", alignContent: "center",
            ":hover .show-in-hover": {display: "block"},
            ":hover ": {cursor: "pointer"}
        }}>
            <Typography variant="body1" >{title}</Typography>

            <ExpandMore />
<Paper className="show-in-hover"
sx={{ position: "absolute", top: "100%", transform: "translateX(-50%)", display: "none",
    minWidth: "150px", left: "50%", zIndex: 10 
}}>
    
                <nav aria-label="secondary folders">
        
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemText sx={{".MuiTypography-root": {fontSize: "15px"}, }} primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem  disablePadding sx={{ position:"relative", display: "flex", alignContent: "center",
            
        }}>
            <Box sx={{minWidth: "150px", ":hover .aswsasa": {display: "block"}}}>
                            <ListItemButton >
                                <ListItemText sx={{".MuiTypography-root": {fontSize: "15px"}, }} primary="Products" />
                                <KeyboardArrowRightOutlined />
                            </ListItemButton>

                                    
                                    <Paper elevation={3} className="aswsasa" sx={{
                                        display: "none",
                                        minWidth: 150 }}>
        
                                <nav aria-label="secondary mailbox folders">
                            <List sx={{position:"absolute", top: "-50%", left:"100%", minWidth: 150,
                                bgcolor: theme.palette.paperGrey.main,
                                }}>
                                <ListItem  disablePadding>
                                    <ListItemButton>
                                        <ListItemText sx={{".MuiTypography-root": {fontSize: "15px"}, }} primary="Add product" />
                                    </ListItemButton>
                                </ListItem>
        
                                
                                <ListItem disablePadding sx={{ display: "flex", alignContent: "center",
                    
                }}>
                                    <ListItemButton>
                                        <ListItemText sx={{".MuiTypography-root": {fontSize: "15px"}, }} primary="Edit product  " />

                                    </ListItemButton>
                                </ListItem>
    
                            </List>
                        </nav>
        
    </Paper>
    
</Box>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{".MuiTypography-root": {fontSize: "15px"}, }} primary="Orders" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText sx={{".MuiTypography-root": {fontSize: "15px"}, }} primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </nav>
</Paper>
        </Box>
    );
}
function setSelectedIndex(index) {
    throw new Error("Function not implemented.");
}

