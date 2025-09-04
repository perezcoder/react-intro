import { NavLink, Outlet } from "react-router-dom";

export function CMSPage() {

    const isActive = (obj: {isActive: boolean}) => obj.isActive ? 'btn primary' : 'btn'
    return (
        <div>
            <NavLink to="/cms/products" className={isActive}>Products</NavLink>
            <NavLink to="/cms/orders" className={isActive}>Orders</NavLink>
                <Outlet />
        </div>
    )
}