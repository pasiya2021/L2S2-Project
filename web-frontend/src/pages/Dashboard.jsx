import React,{useContext, useEffect} from 'react'
import DashboardStatsGrid from '../components/Dashbord/DashboardStatsGrid'
import AvailableItems from '../components/Dashbord/AvailableItems'
import DataAnalysis from '../components/Dashbord/DataAnalysis'
// import TransactionChart from '../components/TransactionChart'
// import RecentOrders from '../components/RecentOrders'

// import PopularProducts from '../components/PopularProducts'

// import AreaChart from '../components/AreaChart'
import { AdminContext } from '../Context/AdminContext'

export default function Dashboard() {
	const {setHeaderName} = useContext(AdminContext)
	useEffect(()=>{
		setHeaderName("Dashboard");
	},[])
	return (
		<div className="flex flex-col gap-10">
			<DashboardStatsGrid />
			<AvailableItems />
			<DataAnalysis/>
			{/* <div>
				<div className="flex flex-row gap-4 w-full">
					<TransactionChart />
					<PopularProducts />
				</div>
				<div className="flex flex-row gap-4 w-full">
					<TransactionChart />
					<PopularProducts />
				</div>
				< AreaChart/>
			</div> */}

		</div>
	)
}
