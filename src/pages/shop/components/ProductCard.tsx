import { Product } from "@/model/products"

interface ProductCardProps {
    product: Partial<Product>;
    onAddToCart: (product: Partial<Product>) => void
}
export function ProductCard(props: ProductCardProps) {
    console.log('props', props)
    return (
        <div
            className='bg-white text-black shadow-2xl rounded-xl overflow-hidden' 
            key={props.product.id}>
            {props.product && <img src={props.product.img} alt={props.product.name} className='h-64 w-full object-cover' /> }
            <div className='flex justify-between items-center p-3 text-xl font-bold'>
                <div>
                    {props.product.name}
                </div>
                <div>
                    € {props.product.cost}
                </div>
            </div>
            <p className='p-3'>
                {props.product.description}
            </p>

            <button 
                className='bg-sky-600 text-white hover:bg-sky-400 transition w-full font-bold p-3 text-center' 
                onClick={() => props.onAddToCart(props.product)}>
                    ADD TO CART
            </button>

        </div>
    )
}