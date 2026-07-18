import { useEffect, useState } from "react";
import { useProductStore } from "../../stores/useProductStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard";
import { Box, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SearchCheckIcon, SearchIcon } from "lucide-react";
const SearchPage = () => {
  const { products, isLoading, searchProducts , fetchAllProducts} = useProductStore();
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const query = searchParams.get("q") || "";
  const [searchText, setSearchText] = useState(query);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      searchProducts(query);
    } else if (query =="") {
      fetchAllProducts()
    }
  }, [searchProducts, query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText !== query) {
        navigate(`/search?q=${searchText}`);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchText, query, navigate]);

  return (
    <div >
      <motion.h1
        className="text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginTop: "40px" }}
      >
        
        <SearchIcon style={{marginBottom:"-7px", textAlign: "center", alignItems:"center"}} />
      
        <input
          style={{ marginLeft: "10px" ,marginBottom:"10px", textAlign: "center", alignItems:"center"}}
          type="search"
          value={searchText}
          placeholder="Search products"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/search?q=${searchText}`);
            }
          }}
        />
        <Box flexGrow={0.5} />
        Search results for: {query? query : "All Products"}
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
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
  );
};

export default SearchPage;
