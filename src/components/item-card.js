import { act, useContext, useEffect, useReducer, useState } from "react"
import { ItemDetails } from "./item-details"
import { json } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import { cartContext, favContext, loginUserContext } from "../App";
import axios from "axios";
import fIcon from '../assets/images/fav-icon1.jpg';
import favNS from '../assets/images/fav-ns.jpg';
import favS from '../assets/images/fav-s.jpg'

function reducer(state, action) {
    if (action.type === 'AddToCart') {

        return {
            cartList: { ...state.cartList, "id": action.id, "count": action.count }
        }
    }
}

export const ItemCard = ({ item }) => {
    const path = require(`../assets/images/${item.image}`)
    const [showModal, setShowModal] = useState(false);
    const [itemCount, setItemCount] = useState(0);
    const { cartItems, setCartItems } = useContext(cartContext)
    const { favItems, setFavItems } = useContext(favContext)
    const { loggedinUser } = useContext(loginUserContext)
    var [state, dispatch] = useReducer(reducer, { cartList: {} })
    const [cartFlag, setCartFlag] = useState(false)
    const [favFlag, setFavFlag] = useState(false)
    const [isFav, setIsFav] = useState(false)


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('http://localhost:4040/cartItems?user=' + loggedinUser);
                setCartItems(res.data);
            } catch (error) {
                if (!error.response) {
                    console.error('Network error:', error);
                } else {
                    console.error('Error response:', error.response);
                }
            }
        })();
    }, [cartFlag]);

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get('http://localhost:4040/favItems/?user=' + loggedinUser);
                setFavItems(res.data);
                const isFavorite = res.data.some(favItem => favItem.id === item.id);
                setIsFav(isFavorite);
            } catch (error) {
                if (!error.response) {
                    console.error('Network error:', error);
                } else {
                    console.error('Error response:', error.response);
                }
            }
        })();
    }, [favFlag])


    const handleClick = (item, c) => {
        console.log(item, c)
        let d = {
            user: loggedinUser,
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: c
        }
        setItemCount(0)
        let flag = false;
        for (let i of cartItems) {
            if (item.name === i.name) {
                alert('Already in. Updating Count of product.');
                flag = true
                break;
            }
        }
        if (flag) {
            axios.put('http://localhost:4040/cartItems/' + item.id, d);
        }
        else {
            axios.post('http://localhost:4040/cartItems/', d);
        }
        setCartFlag(true)
    }

    const toggleFav = () => setIsFav(!isFav);

    const handleFav = () => {
        let newIsFav = !isFav
        toggleFav()
        let d = {
            user: loggedinUser,
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price
        }
        if (newIsFav) {
            axios.post('http://localhost:4040/favItems/', d)
                // .then(() => alert('Added to favourites'))
                .catch(err => console.error('Error adding to fav'))
        } else {

            axios.delete(`http://localhost:4040/favItems/${item.id}`)
                // .then(() => alert('Removed from fav'))
                .catch(err => console.error('Error removing from fav'))
        }
        setFavFlag(true)
    }

    const Inc = () => {
        setItemCount(itemCount + 1)
    }
    const Dec = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
        }
    }

    return (
        <>
            <div className="card col-2 m-4">
                <img src={path} className="card-img-top" alt="..." height={'200px'} />
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <h5 className="card-title" style={{ color: 'blue' }}>{item.name}</h5>
                            <i className="card-title" style={{ color: 'green' }}>{item.category}</i>
                            <p className="card-text" style={{ color: 'red' }}>${item.price}</p>
                        </div>

                    </div>                    <button type="button" className="btn btn-primary m-2" onClick={() => handleClick(item, itemCount)}>Add</button>
                    <button type="button" className="btn btn-primary m-2" onClick={Inc}>+</button>
                    <b>{itemCount}</b>
                    <button type="button" className="btn btn-primary m-2" onClick={Dec}>-</button>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            {
                                isFav ?
                                    <img src={favS} alt="..." height={'40px'} style={{ borderRadius: '30%', cursor: 'pointer' }} onClick={() => handleFav(item)} /> :
                                    <img src={favNS} alt="..." height={'40px'} style={{ borderRadius: '30%', cursor: 'pointer' }} onClick={() => handleFav(item)} />
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
