import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AdminContext } from "../Context/AdminContext";
import UserNotificationCard from "../components/Dashbord/Customer/NotificationCard";

export default function Customers() {
    const { setHeaderName } = useContext(AdminContext);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        setHeaderName("Customers");

        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/order/all');
                const orders = response.data.map(order => ({
                    key: order.id,
                    icon: "New Order",
                    title: "New Order Placed",
                    date: order.date,
                    message: `You have received a new order from ${order.name}.`,
                }));
                setNotifications(orders);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, [setHeaderName]);

    return (
        <div className="flex flex-col items-center justify-between gap-10 border-b border-gray-200 px-14">
            <div className="flex items-center flex-1 w-full p-2 border border-gray-200 rounded-lg bg-primary">
                <span className="text-2xl text-white">Notifications</span>
                <div className="flex justify-end gap-2 ml-auto"></div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4">
                {notifications.map(notification => (
                    <UserNotificationCard key={notification.key} notification={notification} />
                ))}
            </div>
        </div>
    );
}
