import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ShopPage } from "./pages/shop/ShopPage"
import { CartPage } from "./pages/cart/CartPage"
import { CheckoutPage } from "./pages/checkout/CheckoutPage"
import { ThanksPage } from "./pages/checkout/ThanksPage"
import { LoginPage } from "./pages/login/LoginPage"
import { CMSPage } from "./pages/cms/CMSPage"
import { CMSProductsPage } from "./pages/cms/products/CMSProductsPage"
import { CMSOrderPage } from "./pages/cms/orders/CMSOrdersPage"

function App() {
    return (
        <BrowserRouter>
          <div className="page">
            <Routes>
              <Route path="shop" element={<ShopPage/>}></Route>
              <Route path="cart" element={<CartPage/>}></Route>
              <Route path="checkout" element={<CheckoutPage/>}></Route>
              <Route path="thankyou" element={<ThanksPage/>}></Route>
              <Route path="login" element={<LoginPage/>}></Route>
              <Route path="cms" element={<CMSPage/>}>
                <Route path="products" element={<CMSProductsPage/>}></Route>
                <Route path="orders" element={<CMSOrderPage/>}></Route>
                <Route index element={<Navigate to="products"/>}></Route>
              </Route>
            <Route path="*" element={<Navigate to="shop"/>}></Route>
            </Routes>

          </div>
        </BrowserRouter>
    )
}

export default App