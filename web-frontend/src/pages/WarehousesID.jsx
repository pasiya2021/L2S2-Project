import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';
import axios from 'axios';
import { RiAddFill, RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";
import { AddStockDialog, DeleteStockDialog, DeleteWarehouseDialog, StockEditDialog, WarehouseEditDialog, } from '../components/Warehouse/Modals';

export default function WarehouseDetails() {
  const { id } = useParams();
  const { setHeaderName } = useContext(AdminContext);
  const [warehouseStock, setWarehouseStock] = useState([]);
  const [isStockLoading, setIsStockLoading] = useState(true);
  const [info, setInfo] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);
  const [openStockEditModal, setOpenStockEditModal] = useState(false);
  const [openWarehouseEditModal, setOpenWarehouseEditModal] = useState(false);
  const [openDeleteWarehouseModal, setOpenDeleteWarehouseModal] = useState(false);
  const [openAddStockModal, setOpenAddStockModal] = useState(false);
  const [openDeleteStockModal, setOpenDeleteStockModal] = useState(false);

  useEffect(() => {

    const fetchWarehouseStock = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/warehouse/${id}/stock`);
        if (data.length !== 0) {
          setWarehouseStock(data);
        }
      } catch (error) {
        alert("Error fetching data");
      }
      setIsStockLoading(false);
    }
    fetchWarehouseStock();
  }, [id]);

  useEffect(() => {
    const fetchWarehouseInfo = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/warehouse/${id}`);
        if (!data) {
          setInfo(null);
        }
        setHeaderName("Warehouse " + data?.location);
        setInfo(data);
      } catch (error) {
        return (
          <NotFound />
        )
      }
    }
    fetchWarehouseInfo();
  }, [id]);

  const handleStockEdit = (product) => {
    setSelectedItem(product);
    setOpenStockEditModal(true);
  }

  const handleStockDelete = (product) => {
    setSelectedItem(product);
    setOpenDeleteStockModal(true);
  }

  const handleWarehouseEdit = () => {
    setOpenWarehouseEditModal(true);
  };

  if (!isStockLoading && !info) {
    return (
      <NotFound />
    );
  }

  const tableContent = () => {
    if (isStockLoading) {
      return <tr><td colSpan="4" className="text-center">Loading...</td></tr>
    } else if (warehouseStock.length === 0) {
      return <tr><td colSpan="4" className="text-center">
        No stock available for this warehouse
      </td></tr>
    } else {
      return warehouseStock.map((item, index) => (
        <tr key={index} className="border-b border-gray-200">
          <td className="p-2 flex justify-start items-center gap-4">
            <img src={item.productIcon} alt={item.productName} className="w-12 h-12 border-2 border-primary rounded-full" />{item.productId}
          </td>
          <td className="p-2">{item.productName}</td>
          <td className="p-2">{item.availableStock} kg</td>
          <td className="p-2">{item.fullStock} kg</td>
          <td className="p-2 flex justify-end self-center">
            <button className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-start"
              onClick={() => handleStockEdit(item)} >
              <RiEdit2Fill className='mr-2' /> Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 flex items-start"
              onClick={() => handleStockDelete(item)}
            >
              <RiDeleteBin2Fill className='mr-2' /> Delete
            </button>
          </td>
        </tr>
      ))
    }
  }

  return (
    <div className="flex flex-col items-start w-full p-8">
      <WarehouseEditDialog warehouse={info} open={openWarehouseEditModal} setOpenHook={setOpenWarehouseEditModal} />
      <DeleteWarehouseDialog warehouse={info} open={openDeleteWarehouseModal} setOpenHook={setOpenDeleteWarehouseModal} />
      <AddStockDialog warehouse={info} open={openAddStockModal} setOpenHook={setOpenAddStockModal} />
      <DeleteStockDialog warehouse={info} product={selectedItem} open={openDeleteStockModal} setOpenHook={setOpenDeleteStockModal} />
      <div className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4 w-full">
        <div className="flex justify-between items-center border-b-2 pb-4 mb-4">
          <h2 className="text-2xl font-bold">Warehouse Info</h2>
          <span className="text-lg font-semibold mr-4">ID: {info?.id || "Not Available"}</span>
          <div className="flex items-center">
            <button className="bg-white hover:bg-gray-200 border-2 border-primary text-black font-bold py-2 px-4 rounded mr-2 flex items-start"
              onClick={handleWarehouseEdit}>
              <RiEdit2Fill className="mr-2" /> Edit
            </button>
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2 flex items-start cursor-not-allowed"
              onClick={() => setOpenDeleteWarehouseModal(true)}
              disabled="true"
            >
              <RiDeleteBin2Fill className="mr-2" /> Delete
            </button>
            <button className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-start"
              onClick={() => setOpenAddStockModal(true)}
            >
              <RiAddFill className="mr-2" /> Add Stock
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <p className="font-bold">Location:</p>
            <p>
              {info?.location || "Not Available"}
            </p>
          </div>
          <div>
            <p className="font-bold">Manager:</p>
            <p>
              {info?.managerName || "Not Available"}
            </p>
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold">Warehouse {id} Stock</h2>
      <StockEditDialog product={selectedItem} open={openStockEditModal} setOpenHook={setOpenStockEditModal} />
      <table className="w-full overflow-hidden bg-white text-center rounded-lg shadow-md border-collapse border border-gray-200">
        <thead className="text-white bg-primary">
          <tr>
            <th className="p-4">Item ID</th>
            <th className="p-4">Item Name</th>
            <th className="p-4">Available Stock</th>
            <th className="p-4">Full Stock</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tableContent()
          }
        </tbody>
      </table>

    </div>
  );
}

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-96">
      <h1 className="text-4xl font-bold text-center">Warehouse Not Found</h1>
      <p className="text-lg text-center">The warehouse you are looking for does not exist.</p>
      <a href="/warehouses" className="bg-primary hover:bg-green-700 text-white hover:text-white font-bold py-2 px-4 rounded mt-4">Back to Warehouses</a>
    </div>
  );

}