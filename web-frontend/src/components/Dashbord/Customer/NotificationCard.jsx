import React from "react";
import { BiBell, BiCart, BiDollar, BiMessageSquareDetail, BiSolidTruck, BiUserCircle } from "react-icons/bi";

export default function UserNotificationCard({ notification }) {
    return (

            <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-start">
            <div className="text-3xl mr-4">
              {icon(notification.icon)}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{notification.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{notification.date}</p>
              <p>{notification.message}</p>
            </div>
          </div>
    );
}

function icon(name){
    switch(name){
        case "New Order":
            return <BiCart width="24" height="24" className="text-primary" />
        case "Payment Received":
            return <BiDollar width="24" height="24" className="text-primary" />
        case "New Message":
            return <BiMessageSquareDetail width="24" height="24" className="text-primary" />
        case "Account Update":
            return <BiUserCircle width="24" height="24" className="text-primary" />
        case "Order Shipped":
            return <BiSolidTruck width="24" height="24" className="text-primary" />
        default:
            return <BiBell width="24" height="24" className="text-primary" />
    }
}


