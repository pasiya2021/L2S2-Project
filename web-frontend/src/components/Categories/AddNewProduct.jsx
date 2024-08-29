import axios from "axios";
import CommonDialog from "../shared/Modal"

const AddNewProductDialog = ({ open, setOpenHook, categories }) => {

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const res = await axios.post("http://localhost:8080/api/product/addProduct", formJson);
        if (res.data) {
            alert("Product added successfully");
            window.location.reload();
        } else {
            alert("Error adding product");
        }
    }
    const handleClose = () => {
        setOpenHook(false);
    }
    return (
        <CommonDialog modalTitle={"Add New Product"} open={open} onClose={handleClose} bodySection={
            <form className="flex flex-col items-start w-full gap-4" onSubmit={handleProductSubmit} id="addProductForm">
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="productName">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        name="name"
                        className="w-full p-2 border border-gray-200 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="productBrand">Product Brand</label>
                    <input
                        type="text"
                        id="productBrand"
                        name="brand"
                        className="w-full p-2 border border-gray-200 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="productCategory">Product Category</label>
                    <select
                        id="productCategory"
                        name="category"
                        className="w-full p-2 border border-gray-200 rounded-md"
                        required
                    >
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="productPrice">Product Price</label>
                    <input
                        type="number"
                        id="productPrice"
                        name="price"
                        className="w-full p-2 border border-gray-200 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="productDescription">Product Description</label>
                    <textarea
                        id="productDescription"
                        name="description"
                        className="w-full p-2 border border-gray-200 rounded-md"
                        required
                    />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label htmlFor="productImageUrl">Product Image URL</label>
                    <input
                        type="text"
                        id="productImageUrl"
                        name="imageUrl"
                        className="w-full p-2 border border-gray-200 rounded-md"
                        required
                    />
                </div>
            </form>
        } actionButton={
            <button form="addProductForm"
                type="submit"
                className="w-full p-2 text-white bg-green-600 rounded-md"
            >
                Add Product
            </button>
        } />
    )
}
export { AddNewProductDialog };