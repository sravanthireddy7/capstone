import { useContext, useEffect, useState } from "react"
import { cartContext, loginUserContext, loginUserFlagContext } from "../App"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const CartItemDetails = () => {
    const { cartItems, setCartItems } = useContext(cartContext)
    const [cartListApi, setCartListApi] = useState()
    const [totalAmount, setTotalAmount] = useState()
    const { loggedinUserFlag } = useContext(loginUserFlagContext)
    const { loggedinUser } = useContext(loginUserContext)
    const navigate = useNavigate()
    const [checkoutFlag,setcheckoutFlag]=useState(true);

    function getOrders(){
        return axios.get('http://localhost:4040/cartItems?user='+loggedinUser);         
    }

    useEffect(() => {
        console.log('USeEffect');
        (async () => {
            let res= await getOrders();
            setCartListApi(res.data);
            calculateTotal(res.data)
        }
         )()
    }, [])   

    const calculateTotal = (cartData) => {
        let total = 0;
        for (let item of cartData) {
            total += item.price * item.quantity
        }
        setTotalAmount(total)
    }
    const currentDate = new Date();

    // Get the individual components of the date and time
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    // Format the date and time as a string
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // console.log(`Current Date: ${formattedDate}`);
    // console.log(`Current Time: ${formattedTime}`);
    const order = {
        username: loggedinUser,
        items: cartItems.length,
        amount: totalAmount,
        orderdate:formattedDate,
        ordertime:formattedTime

    }
    const handleClick = () => {
        alert("Order placed Successfully")
        axios.post('http://localhost:4040/orderHistory/', order)
        console.log(cartListApi)
        cartListApi.map((item) => axios.delete(`http://localhost:4040/cartItems/${item.id}`))
        setcheckoutFlag(!checkoutFlag)
        // (async () => {
        //     let res= await getOrders();
        //     setCartListApi(res.data);
        // }
        //  )()
        console.log(cartListApi)
        navigate('/orders')
    }
    return (
        <>
            <div className="container" style={{height:'530px', marginTop:'20px'}}>
                <h2 className="my-4">Cart Items</h2>
                {loggedinUserFlag && <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>

                        </tr>
                    </thead>
                    <tbody>{                        
                        cartListApi?.map((item) =>{
                            const path = require(`../assets/images/${item.image}`)
                            return(
                                <tr key={item.name}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><img width="30px" height="30px" src={path} /></td>
                                <td>{item.price}/-</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}/-</td>
                            </tr>
                            )
                        }
                            
                            )
                    }
                        <tr>
                            <td colSpan={6} align="center"><div className="bg-success p-2 text-dark bg-opacity-10">
                                <span className="m-2" style={{ backgroundColor: 'red', padding: '5px', color: 'white' }}>Total Price: {totalAmount}/-</span></div></td>
                        </tr>
                        <tr>
                            <td colSpan={6} align="center">
                                <div className="bg-success p-2 text-dark bg-opacity-10">
                                    <button type="button" className="btn btn-success" onClick={handleClick}>Checkout</button>
                                </div></td>
                        </tr>
                    </tbody>
                </table>}


            </div>
        </>
    )
}