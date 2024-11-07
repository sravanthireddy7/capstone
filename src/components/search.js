import {  useContext, useState } from "react";
import { searchContext } from "../App";

export const Search=()=>{
    
    const [searchRecipeList,setSearchRecipeList]=useState([])
    const {searchValue,setSearchValue,searchFn}=useContext(searchContext)
    

    const handleChange = (event) => {
        setSearchValue(event.target.value);

    }
    
    return(
        <form className="d-flex" role="search" style={{marginTop:'20px'}}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
    )
}