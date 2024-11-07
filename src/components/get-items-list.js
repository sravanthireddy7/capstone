import { useContext, useEffect } from "react"
import { getItemsList } from "./db-connectivity"
import { itemsContext } from "../App"

export const GetList=()=>{
    const {itemsList,setItemsList}=useContext(itemsContext)
    
    useEffect(()=>{
        (async()=>{const data=await getItemsList(); setItemsList(data)})()    
    },[])
    // return itemsList
}