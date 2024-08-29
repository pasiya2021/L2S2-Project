import {
	HiOutlineViewGrid,
	HiOutlineCog,
	HiLibrary, 
	HiShoppingBag
	
} from 'react-icons/hi'

import { RiHome4Line } from "react-icons/ri";
import { PiUsersThreeBold } from "react-icons/pi";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <RiHome4Line />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <PiUsersThreeBold />
	},
	{
		key: 'categories',
		label: 'Categories',
		path: '/categories',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiShoppingBag />
	},
	{
		key: 'warehouses',
		label: 'Warehouses',
		path: '/warehouses',
		icon: <HiLibrary />
	},
	// {
	// 	key: 'messages',
	// 	label: 'Messages',
	// 	path: '/messages',
	// 	icon: <HiOutlineAnnotation />
	// }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	// {
	// 	key: 'support',
	// 	label: 'Help & Support',
	// 	path: '/support',
	// 	icon: <HiOutlineQuestionMarkCircle />
	// }
]
