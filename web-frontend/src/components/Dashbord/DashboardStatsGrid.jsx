import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { GiFarmer } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";


export default function DashboardStatsGrid() {
	return (
		<div className="bg-white h-40 px-14 flex items-center border-b border-gray-200 justify-between gap-14">
			<BoxWrapper >
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-800 font-semibold">Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">542</strong>
						<span className="text-sm text-primary pl-2">+43</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<GiFarmer className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-800 font-semibold">Farmers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">343</strong>
						<span className="text-sm text-primary pl-2">-33</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<FaTruckFast className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-800 font-semibold">Drivers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">113</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper  >
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-primary">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-800 font-semibold">Total Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1642</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
			
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-gray-100 rounded-lg p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
