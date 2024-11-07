import { Link } from "react-router-dom"
import wIcon from '../assets/images/website-icon.jpg'
import lIcon from '../assets/images/login-icon2.jpg'
import fIcon from '../assets/images/fav-icon1.jpg'
import cIcon from '../assets/images/cart-icon.jpg'
import { createContext, useContext, useState } from "react"
import { cartContext, categoryContext, favContext, loginUserContext, loginUserFlagContext, searchContext } from "../App"
import { Search } from "./search"

// export const categoryContext=createContext();

export const Header=()=>{
    const {setSelectedCategory}=useContext(categoryContext)
    const {loggedinUser,setLoggedinUser}=useContext(loginUserContext)
    const { loggedinUserFlag } = useContext(loginUserFlagContext)
    const {cartItems}=useContext(cartContext)
    const {favItems}=useContext(favContext)
    const {searchValue}=useContext(searchContext)
    
console.log(searchValue)
    // const [selectedOption,setSelectedOption]=useState('')

    const handleSelectChange=(event)=>{
        const value=event.target.value;
        // setSelectedOption(value)
        setSelectedCategory(value)
        // console.log(selectedOption)
    }

    const handleLogout = () => { 
        setLoggedinUser(null); // Clear logged-in user 
        };

    return(
        
        <div className=" text-center">

            <div className="row" style={{backgroundColor:'#A594F9'}}>
                <div className="col-4">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="#"><img src={wIcon} alt="login" height={'60px'} style={{ borderRadius: '50%' }} /></Link>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                {loggedinUser&&<li className="nav-item">
                                    <select className="form-select" aria-label="Default select example" onChange={handleSelectChange}>
                                        <option value="">Select Category</option>
                                        <option value="Vegtables">Vegtables</option>
                                        <option value="Fruits">Fruits</option>
                                    </select>
                                </li>}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-3">
                    <nav className="mt-2">
                        {loggedinUser && <Search></Search>}
                    </nav>

                </div>
                <div className="col-5">
                    <nav className="mt-4 px-2">
                        {/* <span>{loggedinUser}</span> */}
                        <ul className="nav justify-content-end">
                        <li className="nav-item mx-2">
                               {!loggedinUser && <Link to='/login'><img src={lIcon} alt="login" height={'40px'} style={{ borderRadius: '50%' }} /></Link>}
                               {loggedinUser && 
                               (
                                <>
                               {`Welcome ${loggedinUser}`}
                               <button onClick={handleLogout} className="btn btn-link">Logout</button>
                                </>
                               )
                               }
                            </li>
                            <li className="nav-item mx-2">
                                {
                                    loggedinUser&&<Link to='/favourites'><img src={fIcon} alt="..." height={'40px'} style={{ borderRadius: '50%' }} /></Link>
                                    
                                }
                                <sup>
                                    {(loggedinUserFlag && favItems.length>0) && <span style={{backgroundColor:'red',width: '200px',lineHeight: '10px',borderRadius: '50%',textAlign: 'center',fontSize: '20px', color:'white'}}>
                                        {favItems.length}</span>}
                                </sup>
                            </li>
                            <li className="nav-item">
                                {loggedinUser&&

                                <Link to='/cart-items'><img src={cIcon} alt="..." height={'40px'} style={{ borderRadius: '50%' }} /></Link>
                                }
                                {/* <span style={{ display: 'inline-block', paddingTop: '50%', paddingBottom: '50%',  marginLeft:'8px', marginRight: '8px'} }> 1 */}
                                    {/* </span>  */}
                                <sup>
                                    {(loggedinUserFlag && cartItems.length>0) && <span style={{backgroundColor:'red',width: '200px',lineHeight: '10px',borderRadius: '50%',textAlign: 'center',fontSize: '20px', color:'white'}}>
                                        { cartItems.length}</span>}
                                </sup>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

        </div>
       
    )
}