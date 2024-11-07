import axios from "axios";

export const getItemsList=async(ctg)=>{
    let dataList;
    const res=await axios.get('http://localhost:4040/items?category='+ctg)
    dataList=res.data
    return dataList
}
// `http://localhost:3000/items?name=${query}`