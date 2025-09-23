import { Product } from "./products";

export interface CartItem {
    product: Partial<Product>
    qty: number
}