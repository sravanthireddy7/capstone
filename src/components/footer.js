import { Link } from "react-router-dom"
import wIcon from '../assets/images/website-icon.jpg'
import lIcon from '../assets/images/login-icon2.jpg'
import fIcon from '../assets/images/fav-icon1.jpg'
import cIcon from '../assets/images/cart-icon.jpg'
export const Footer=()=>{
    return(
        <div className=" text-center" >

            <div className="row" style={{backgroundColor:'#A594F9'}}>
                <div className="col-4">
                <nav className="m-1">
                organic farming, sustainable agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal and plant wastes and nitrogen-fixing cover crops.
                                   </nav> </div>
                <div className="col-4">
                    <nav className="m-1">
                    organic farming, sustainable agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal and plant wastes and nitrogen-fixing cover crops.
                    </nav>

                </div>
                <div className="col-4">
                    <nav className="m-1 px-2">
                    organic farming, sustainable agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal and plant wastes and nitrogen-fixing cover crops.
                    </nav>
                </div>

            </div>

        </div>
    )
}