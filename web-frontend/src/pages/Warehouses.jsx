import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';
import axios from 'axios';

export default function WarehouseList() {
    const { setHeaderName } = useContext(AdminContext);
    const [warehouseList, setWarehouseList] = useState([]);

    useEffect(() => {
        setHeaderName("Warehouses");
        const fetchWarehouseList = async () => {
            try {
                const { data } = await axios.get("http://localhost:8080/api/warehouse");
                setWarehouseList(data);
            } catch (error) {
                alert("Error fetching data");
            }
        }
        fetchWarehouseList();
    }, [setHeaderName]);

    return (
        <div className="flex flex-col items-start p-8 w-full">
            <h2 className="text-2xl font-bold mb-4">Warehouses</h2>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-primary text-white">
                    <tr>
                        <th className="p-4">Warehouse ID</th>
                        <th className="p-4">Location</th>
                        <th className="p-4">Manager ID</th>
                        <th className="p-4">Manager Name</th>
                        <th className="p-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(warehouseList) ||
                        warehouseList.length === 0 ? <tr><td colSpan="5" className="text-center p-4">Loading...</td></tr>
                        : warehouseList.map(warehouse => (
                            <tr key={warehouse.id} className="border-b border-gray-200">
                                <td className="p-4">{warehouse.id}</td>
                                <td className="p-4">{warehouse.location}</td>
                                <td className="p-4">{warehouse.managerId}</td>
                                <td className="p-4">{warehouse.managerName}</td>
                                <td className="p-4">
                                    <Link to={`/warehouses/${warehouse.id}`} className="bg-primary text-white px-4 py-1 rounded-lg">
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>
    );
}
