import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
	return (
		<div className="bg-white h-screen w-screen overflow-hidden flex flex-row text-lg">
			<Sidebar />
			<div className="flex flex-col flex-1">
				<Header name={""}/>
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
