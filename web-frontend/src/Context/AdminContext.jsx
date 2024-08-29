import React, {createContext,useState} from "react";
export const AdminContext = createContext()

const AdminContextProvider  = ({children}) =>{
  const [headerName, setHeaderName] = useState("name")
  return(
    <AdminContext.Provider value={{headerName, setHeaderName}}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider;