import React, { useContext, useEffect, useState } from 'react';
import { favContext, loginUserContext } from '../App';
import axios from 'axios';
import favS from '../assets/images/fav-s.jpg';
import favNS from '../assets/images/fav-ns.jpg';

export const Favourite = () => {
    const { favItems, setFavItems } = useContext(favContext);
    const { loggedinUser } = useContext(loginUserContext);
    const [isFlag,setIsFlag]=useState(true)

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('http://localhost:4040/favItems/?user=' + loggedinUser);
                setFavItems(res.data);
            } catch (error) {
                if (!error.response) {
                    console.error('Network error:', error);
                } else {
                    console.error('Error response:', error.response);
                }
            }
        })();
    }, [loggedinUser,isFlag]);

    const handleFav=(id)=>{
        setIsFlag(!isFlag)
        axios.delete('http://localhost:4040/favItems/'+id)
    }

    return (
        <div className="container m-4 p-4" style={{height:'530px'}}>
            <h1>Favourites</h1>
            <div className="row">
                {favItems.map(item => (
                    <div key={item.id} className="card col-2 m-4">
                        <img src={require(`../assets/images/${item.image}`)} className="card-img-top" alt="..." height={'200px'} />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: 'blue' }}>{item.name}</h5>
                            <i className="card-title" style={{ color: 'green' }}>{item.category}</i>
                            <p className="card-text" style={{ color: 'red' }}>{item.price}/-</p>
                            <img src={favS} alt="Favorite" height={'40px'} onClick={()=>handleFav(item.id)} style={{ borderRadius: '30%', margin: '0px 5px',cursor:'pointer' }} />
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};