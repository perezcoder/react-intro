import { Product } from '@/model/products';
import { useState } from 'react';
import { pb } from '../../pocketbase';
import { ProductCard } from './components/ProductCard';
import { ServerError, Spinner } from '@/shared/index';

export function ShopPage() {

    const [products, setProducts] = useState<Product[]>([])
    const [pending, setPending] = useState<boolean>(false);
    const [errors, setErrors] = useState<boolean>(false);

    function loadData() {
        setErrors(false);
        setPending(true);
        pb.collection('products').getList<Product>()
            .then(res => {
                setProducts(res.items)
            })
            .catch(() => {
                setErrors(true)
            })
            .finally(() => {
                setPending(false)
            })
    }

    function addToCart(product: Partial<Product>) {
        console.log('prod', product)
    }

    return (
        <>
            <h1 className="title">SHOP</h1>

            {pending && <Spinner/>}
            {errors && <ServerError />}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-16'>

                {
                    products.map(product => {
                        return (
                            <ProductCard 
                                key={product.id}
                                product={product} 
                                onAddToCart={addToCart}
                                />
                        )
                    })
                }

            </div>
            <button className='btn primary' onClick={loadData}>load data</button>
        </>
    )
}