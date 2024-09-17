import { useEffect, useState } from "react"
import { useProductStore } from "../../stores/useProductStore"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion";
import ProductCard from "../../components/ProductCard";
import { Box, Stack } from "@mui/material";


const CategoryPage = () => {

    const { products, isLoading  } = useProductStore();
    const {fetchProductsByCategory} = useProductStore()
    const {category} = useParams()

    useEffect(() => {
        fetchProductsByCategory(category)
    }, [fetchProductsByCategory, category])
    
	if (isLoading) {
        return <div>Loading...</div>;
    }

	
    
    return (
        <Stack direction={"column"} justifyContent={"center"} sx={{display:"flex", alignItems:"center", gap: 6 ,  flexDirection:{xs: "column", sm: "row"}}}>

        <div>
        
        <motion.h1
					className='text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-8'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					style={{ textAlign: "center", marginTop: "100px" }}
				>
					{category.charAt(0).toUpperCase() + category.slice(1)}
				</motion.h1>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					
				>
					<Box direction={"row"} justifyContent={"center"} gap={6} >
					<Stack direction={"row"} justifyContent={"center"} gap={6}>
					 {products?.length === 0 && (
						<h2 className='text-3xl font-semibold text-gray-300 text-center col-span-full'>
							No products found
						</h2>
					)}


					{ products.length > 0 && products?.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}

	{console.log("products filtered:", category , products)}
					</Stack> 
					</Box>
				</motion.div>
        
    </div>
    
</Stack>
  )
}

export default CategoryPage