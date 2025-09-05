import { Product } from '@/model/products';
import { useState } from 'react';
import { pb } from '../../pocketbase';

export function ShopPage() {

    const [products, setProducts] = useState<Product[]>([])

    function loadData() {
        pb.collection('products').getList<Product>().then(res => {
            setProducts(res.items)
        })
    }

    return (
        <>
            <h1 className="title">SHOP</h1>
            <div>

                {
                    products.map(product => {
                        return (
                            <li key={product.id}>{product.name}</li>
                        )
                    })
                }

                <button className='btn primary' onClick={loadData}>load data</button>
            </div>
        </>
    )
}