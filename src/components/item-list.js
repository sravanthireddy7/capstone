import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { getItemsList } from "./db-connectivity"
import { ItemCard } from "./item-card"
import { categoryContext, loginUserContext, searchContext } from "../App"
// import { categoryContext } from "./header"

export const ItemList=()=>{

    const {selectedCategory}=useContext(categoryContext)
    const {searchvalue}=useContext(searchContext)
    const {loggedinUser}=useContext(loginUserContext)

   
    const [itemsList,setItemsList]=useState()
    const [filterdItemsList,setFilteredItemsList]=useState()
    const [cartItems,setCartItems]=useState()
    

    useEffect(()=>{
        
        (async()=>{const data=await getItemsList(selectedCategory);setItemsList(data);setFilteredItemsList(data)})()
    },[selectedCategory])

    useEffect(()=>{
        const filteredItems = itemsList?.filter((item) => item.name.toLowerCase().includes(searchvalue?.toLowerCase()))
        console.log(filteredItems)
        setFilteredItemsList(filteredItems)
    },[searchvalue])

    
    return(
        <div className="m-4">
        {/* <h1>{selectedCategory}</h1> */}
        {selectedCategory==''?<h2>List of items</h2>:<h2>List of {selectedCategory}</h2>}
        <div className="main-content"> 

        {loggedinUser && <div className="row">
            { filterdItemsList?.map(item =>
                <ItemCard key={item.id} item={item} ></ItemCard>
            )}
        </div>}
            </div>
        </div>
    )
}