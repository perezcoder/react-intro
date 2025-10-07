import { Product } from '@/model/products';
import { pb } from '../../pocketbase';

export function getProducts() {
  return pb.collection('products').getList<Product>();
}

export function removeProduct(id: string) {
  return pb.collection('products').delete(id);
}

export function addProduct(product: Partial<Product>) {
  return pb.collection('products').create<Product>(product);
}

export function editProduct(product: Partial<Product>) {
  return pb.collection('products').update<Product>(product.id!, product);
}