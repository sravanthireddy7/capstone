import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { cartContext, loginUserContext } from "../App";

export const Orders = () => {
    const [orderDetails, setOrderDetails] = useState();
    const { loggedinUser } = useContext(loginUserContext);
    const { cartItems, setCartItems } = useContext(cartContext)
    
    useEffect(() => {
        (async () => {
            let res = await axios.get('http://localhost:4040/orderHistory?usename=' + loggedinUser);
            setOrderDetails(res.data)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            let res = await axios.get('http://localhost:4040/cartItems/');
            setCartItems(res.data)
        })()
    }, [])

    return (
    <>
        <div className="container" style={{margin:'30px', height:'480px'}} >
        <h2>Orders</h2>

        {
            loggedinUser && orderDetails?.map((item,id)=><div key={item.id} style={{border:"1px solid red", padding:"10px",margin:'10px'}}>Order {id+1}: placed on {item.orderdate} at {item.ordertime}. No of Items:{item.items}.
        Total price:{item.amount}</div>)
        }
        </div>
    </>
       
    )
}