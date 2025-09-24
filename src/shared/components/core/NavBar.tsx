import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { CartPanel } from "./CartPanel";
import { useCartPanel } from "@/services/Cart/useCartPanel";
import { selectCartIsEmpty, selectTotalCartItems } from "@/services/Cart/cart.selector";
import { useCart } from "@/services/Cart/useCart";
import { useAuth } from "@/services/auth";
import { IfLogged } from "../auth/IfLogged";

export function NavBar() {
    const navigate = useNavigate();
    const logout = useAuth(state => state.logout);
    const isCartPanelOpened = useCartPanel(state => state.open);
    const toggleCartPanel = useCartPanel(state => state.toggle);
    const totalCartItems = useCart(selectTotalCartItems);
    const isEmpty = useCart(selectCartIsEmpty)

    const isActive = (obj: {isActive: boolean}) => obj.isActive ? 'text-xl text-sky-500 font-bold' : ''

    function logoutHandler() {
        logout()
        navigate('/login')
    }

    return (
        <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
            <div className="bg-slate-900 flex justify-between items-center h-20 text-white p-3">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="logo" className="w-16" />
                    <NavLink to="shop" className={isActive}>Shop</NavLink>
                </div>
                <div>
                    <button className="btn accent lg" disabled={isEmpty} onClick={toggleCartPanel}>
                        Cart: {totalCartItems}
                    </button>
                </div>

                { isCartPanelOpened && <CartPanel/>}

                <div className="fixed bottom-2 right-2 p-5">
                    <IfLogged else={
                            <NavLink to="login" className="btn accent lg">Login</NavLink>
                    }>
                        <NavLink to="cms" className="btn accent lg">CMS</NavLink>
                        <button onClick={logoutHandler} className="btn primary lg">logout</button>
                    </IfLogged>
                </div>
            </div>
        </div>
    )
}