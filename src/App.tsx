import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CartPage, CheckoutPage, CMSOrderPage, CMSPage, CMSProductsPage, LoginPage, ShopPage, ThanksPage } from "./pages"
import {NavBar} from '@/shared/index'

function App() {
    return (
        <BrowserRouter>
        <NavBar/>
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