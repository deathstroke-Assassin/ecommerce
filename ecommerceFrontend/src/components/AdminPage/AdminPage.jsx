import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Stack } from "@mui/material";
import CreateProductForm from "../dashboard/CreateProductForm";
import ProductsList from "../dashboard/ProductsList";
import AnalyticsTab from "./AnalyticsTab";

// import AnalyticsTab from ".,/components/AnalyticsTab";
// import CreateProductForm from "../components/CreateProductForm";
// import ProductsList from "../components/ProductsList";
import { useProductStore } from "../../stores/useProductStore";

const tabs = [
	{ id: "create", label: "Create Product", icon: PlusCircle },
	{ id: "products", label: "Products", icon: ShoppingBasket },
	{ id: "analytics", label: "Analytics", icon: BarChart },
];


const AdminPage = () => {
	const [activeTab, setActiveTab] = useState("create");
	const { fetchAllProducts } = useProductStore();

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	return (
        <Stack direction={"row" } sx={{display:"block",  position:"relative", top: 70, left: 90}}>
		
				<motion.h1
					className='text-4xl font-bold mb-8 text-emerald-400 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

				<div className='flex justify-center mb-8'>
					{tabs.map((tab) => (
						<Button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 
                                ${activeTab === tab.id
									? "bg-emerald-600 text-white"
									: "bg-gray-700 text-gray-300 hover:bg-gray-600"
							}`}
						>
							<tab.icon className='mr-2 h-5 w-5' />
							{tab.label}
						</Button>
					))}
				</div>

							<Stack direction={"row" } sx={{display:"block", flexDirection:{xs: "column", sm: "row"}, position:"relative", top: 70, left: 90}}>
				{activeTab === "create" && <CreateProductForm />}
				{activeTab === "products" && <ProductsList />}
				{activeTab === "analytics" && <AnalyticsTab />}
		</Stack>
		</Stack>
	);
};
export default AdminPage;