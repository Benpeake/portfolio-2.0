import { NavLink } from "react-router-dom"
import "./nav.css"

function Nav()
{

    return(
        <>
            <nav>
                <div className="left-nav">
                    <NavLink to="/">Ben Peake</NavLink>
                </div>
                <div className="left-right">
                    <NavLink className="navLink" to="/">Work</NavLink>
                    <NavLink className="navLink" to="/">PixelPad</NavLink>
                    <NavLink className="navLink" to="/">CV</NavLink>
                </div>
            </nav>
        </>
    )

}

export default Nav