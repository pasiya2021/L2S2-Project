import React,{useEffect,useContext} from 'react'
import { AdminContext } from '../Context/AdminContext'
import Profileupdate from '../components/Settings/ProfileUpdate'
import Changepassword from '../components/Settings/ChangePassword'

export default function Settings() {
	const { setHeaderName } = useContext(AdminContext)
	useEffect(()=>{
		setHeaderName("Setting");
	},[])
	return (
		<div className="flex flex-col gap-4">
			<Profileupdate/>
			<Changepassword/>
		</div>
	)
}
