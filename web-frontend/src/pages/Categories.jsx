import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../Context/AdminContext";
import fruitIcon from "../images/fruits.png";
import vegetableIcon from "../images/vegetables.png";
import grainIcon from "../images/grains.png";
import axios from "axios";
import { AddNewProductDialog } from "../components/Categories/AddNewProduct";

export default function Customers() {
    const sampleCategory = [
        { id: 1, name: 'Fruit', imageUrl: null },
        { id: 2, name: 'Vegetable', imageUrl: null },
        { id: 3, name: 'Grain', imageUrl: null }
    ];
    const { setHeaderName } = useContext(AdminContext);
    const [categories, setCategories] = useState(sampleCategory);
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
    const [stocks, setStocks] = useState([]);
    const [openAddProductModal, setOpenAddProductModal] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/api/category");
                setCategories(data);
                console.log(categories)
            } catch (error) {
                alert("Error fetching category data");
            }
        }
        fetchCategories();
    }, [])

    useEffect(() => {
        setHeaderName("Categories");
        const fetchStocks = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/api/stock/summary");
                
                setStocks({
                    1: data.filter((item) => item.categoryName === "Fruit"),
                    2: data.filter((item) => item.categoryName === "Vegetable"),
                    3: data.filter((item) => item.categoryName === "Grain")
                });
                
            } catch (error) {
                alert("Error fetching data");
            }
        }
        fetchStocks();
    }, []);

    return (
        <div className="flex flex-col items-center justify-between gap-10 px-4 py-6 md:px-14">
            <div className="flex items-center w-full p-4 bg-green-600 rounded-lg">
                <span className="text-2xl text-white">Categories</span>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center ${selectedCategory === category ? "border-2 border-green-500" : ""
                            }`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        <h3 className="mb-2 text-lg font-semibold">{category.name}</h3>
                        <img
                            src={category.imageUrl || (category.name === "Fruit" ? fruitIcon : category.name === "Vegetable" ? vegetableIcon : grainIcon)}
                            alt={category}
                            className="w-24 h-24"
                        />
                    </button>
                ))}
            </div>
            <div className="flex justify-end items-center w-full p-4 bg-white border border-primary rounded-lg shadow-lg">
                <button className="bg-primary text-white p-2 rounded-lg" onClick={() => {
                    setOpenAddProductModal(true);
                }}>Add New Product</button>
                <AddNewProductDialog open={openAddProductModal} setOpenHook={setOpenAddProductModal} categories={categories} />
            </div>
            <div className="w-full">
                <div className="flex flex-col items-start w-full p-8">
                    <h2 className="mb-4 text-2xl font-bold">Stocks</h2>
                    <table className="w-full overflow-hidden bg-white rounded-lg shadow-md">
                        <thead className="text-white bg-green-600">
                            <tr className="border-b border-gray-200">
                                <th className="p-4">ID</th>
                                <th className="p-4">Name</th>
                                <th className="p-4">Available Stock</th>
                                <th className="p-4">Full Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stocks.length === 0 ? <tr><td colSpan="4" className="p-4 text-center">Loading...</td></tr> :
                                stocks[selectedCategory].map((item, index) => (
                                    <tr key={index} className="border-b border-gray-200">
                                        <td className="p-4 flex gap-4">
                                            <img src={item.imageURL} alt={item.productName} className="w-8 h-8 border-2 border-primary rounded-full" />{item.productId}
                                        </td>
                                        <td className="p-4">{item.productName}</td>
                                        <td className="p-4"> {item.availableStock} kg</td>
                                        <td className="p-4">{item.fullStock} kg</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
