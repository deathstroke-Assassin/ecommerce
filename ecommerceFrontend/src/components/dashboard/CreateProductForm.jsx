import { Container, Box, Typography, Input,  List, ListItemButton, ListItemText, Menu, MenuItem, Stack, Button } from "@mui/material";
import { Loader, PlusCircle,  } from "lucide-react";
import { useState } from "react";

import { useProductStore } from "../../stores/useProductStore";
import {  ExpandMore, Upload } from "@mui/icons-material";

const categories = [
    "jeans",
    "t-shirts",
    "shoes",
    "glasses",
    "jackets",
    "suits",
    "Accessories",
];

const CreateProductForm = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
       
        rating:"",
    });

    const { createProduct, loading } = useProductStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct(newProduct);
            setNewProduct({
                name: "",
                description: "",
                price: "",
                category: "",
                image: "",
               
                rating:"",
            });
        } catch {
            console.log("error creating a product");
        }
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setNewProduct({ ...newProduct, image: reader.result });
            };

            reader.readAsDataURL(file); // base64
        }
    };
    

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setNewProduct({ ...newProduct, category: categories[index] });
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
   
    const [selectedIndex, setSelectedIndex] = useState(0);


    




    return (
        <Container sx={{alignItems: "center", direction: "column",}}>
            <Box sx={{ mt: 3,  pt: 2 }}>
                <h2>Create New Product</h2>
                <form onSubmit={handleSubmit}>
                    <Typography>Product Name</Typography>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={newProduct.name}
                        onChange={(e) =>
                            setNewProduct({ ...newProduct, name: e.target.value })
                        }
                        required
                        sx={{ ml: 15 }}
                    />

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Description
                        </label>
                        <Input
                            id="description"
                            name="description"
                            value={newProduct.description}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, description: e.target.value })
                            }
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
						 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 
						 focus:border-emerald-500"
                            rows={3}
                            required
                            sx={{ ml: 5, width: 300, mt: 9 }}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Price
                        </label>
                        <Input
                            type="number"
                            id="price"
                            name="price"
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, price: e.target.value })
                            }
                            
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
						py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500
						 focus:border-emerald-500"
                            required
                            sx={{ ml: 10, mt: 3 }}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="rating"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Rating
                        </label>
                        <Input
                            type="number"
                            id="rating"
                            name="rating"
                            value={newProduct.rating}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, rating: e.target.value })
                            }
                            
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
						py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500
					focus:border-emerald-500"
                            required
                            sx={{ ml: 10, mt: 3 }}
                        />
                    </div>

                    <Stack direction={"row"} justifyContent={"space-between"}>
    <label htmlFor="category" className="label" style={{ fontSize: "25px"}}>
        Category
    </label>


    <List
        component="nav"
        aria-label="Device settings"
        sx={{ borderBottomRightRadius:"40px",
            borderTopRightRadius:"40px",
            mr: 80,
            '&:hover' : { cursor: "pointer",
             
              borderBottomRightRadius:"40px",
              borderTopRightRadius:"40px",
             
            },
            width: 200,
        }}
      >
        <ListItemButton
        
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="EN"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          category={newProduct.category}
        >
        <ListItemText
        className= "category-select"
        id="category"
        value={newProduct.category}
        onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
        }
         sx={{ width: 120, textAlign: "center", mr: 1, '.MuiTypography-root' : {fontSize: '20px'},   
        }}
            
            secondary={categories[selectedIndex]}
        /> 

          <ExpandMore sx={{fontSize: "15px"}}/>
        
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {categories.map((category, index) => (
          <MenuItem
            key={category}

            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>




</Stack>


<Button className='mt-1 flex items-center'>
					<input type='file' id='image' className='sr-only' accept='image/*' onChange={handleImageChange} />
					<label
						htmlFor='image'
						className='cursor-pointer bg-gray-700 py-2 px-3 border border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
					>
						<Upload sx={{ mr: 1 }} className='h-5 w-5 inline-block mr-2' />
						Upload Image
					</label>
					{newProduct.image && <span className='ml-3 text-sm text-gray-400'>
                        <img width={200}  src = {newProduct.image} />
                         </span>}
				</Button>
                
              


                    <Button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader
                                    className="mr-2 h-5 w-5 animate-spin"
                                    aria-hidden="true"
                                />
                                Loading...
                            </>
                        ) : (
                            <>
                                <PlusCircle className="mr-2 h-5 w-5" />
                                Create Product
                            </>
                        )}
                    </Button>
                    {console.log(newProduct)}
                </form>
            </Box>
        </Container>
    );
};

export default CreateProductForm;
