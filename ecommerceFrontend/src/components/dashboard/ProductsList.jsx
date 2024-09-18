import { motion } from "framer-motion";
import { Trash, Star  } from "lucide-react";
import { useProductStore } from "../../stores/useProductStore";
import { Box, Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import toast from "react-hot-toast";
import { Delete } from "@mui/icons-material";
const ProductsList = () => {
  const { deleteProduct, products, } = useProductStore();

  console.log("products:", products);
  const columns = [
    {
      field: 'image',
      headerName: 'image',
      height: 450,
      width: 150,
        renderCell: (params) => (
          <Box
            component="img"
            sx={{
              height: 150,
              width: 150,
              
            }}
            alt={params.row.name}
            src={params.row.image}
          />
        ),
    },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'price', headerName: 'Price', type: 'number', width: 130 },
    {
      field: 'category',
      headerName: 'Category',
      width: 160,
    },
  
    
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Button
          onClick={() => deleteProduct(params.row.id)}
          variant="contained"
          color="error"
          startIcon={<Delete />}
        >
          Delete
        </Button>
      ),
    },
  ];
  
  const rows = products.map((product) => ({
    id: product._id,
    name: product.name,
    image: product.image,
    price: product.price,
    category: product.category,

  }));

  const paginationModel = { page: 0, pageSize: 5 };
  
  return (

    <motion.div
      className='bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{  height: "200vh"}}
    
    >

<Paper sx={{ height: 700, width: '70%', position: "relative", left: 0,
      background: 'radial-gradient(ellipse at top, rgba(00, 129, 185, 0.5) 0%, rgba(0, 60, 80, 0.2) 45%, rgba(255, 255, 255, 0.121) 100%)'

 }}>
      <DataGrid
        rowHeight={170}
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0, minHeight: 700,
          backgroundColor: 'transparent',
    }}
      />
    </Paper>




    </motion.div>

  );
};

export default ProductsList;
