import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const NavBar = () => {

    const { shopList } = useContext(CartContext)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">ShoppyCart</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to='/' className="nav-link mx-3 active" aria-current="page" href="#">Home</NavLink>
                    </div>
                    <NavLink to='/carrito'>
                        <Badge badgeContent={shopList.length} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
