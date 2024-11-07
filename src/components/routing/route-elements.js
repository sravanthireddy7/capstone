import { Route, Routes } from "react-router-dom"
import { About } from "../about"
import { Contact } from "../contact"
import RegistrationForm from "../register/register"
import LoginForm from "../login/login-form"
import { Banner } from "../banner"
import { ItemList } from "../item-list"
import { CartItemDetails } from "../cart-items"
import { Orders } from "../orders"
import { Favourite } from "../favourites"

export const RouteElements=()=>
{
    return(
    <Routes>   
             <Route path="/" element={<Banner/>}/>
             <Route path="/about" element={<About></About>}/>
             <Route path="/contact" element={<Contact></Contact>}/>
             <Route path="/login" element={<LoginForm></LoginForm>}/>
             <Route path="/register" element={<RegistrationForm/>}/>
             <Route path="/items" element={<ItemList/>}/>
             <Route path="/cart-items" element={<CartItemDetails/>}/>
             <Route path="/orders" element={<Orders/>}/>
             <Route path="/favourites" element={<Favourite/>}/>

    </Routes>
    )
}