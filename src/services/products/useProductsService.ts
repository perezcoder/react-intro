import { Product } from '@/model/products';
import { useReducer } from "react"
import * as ProductsApi from '@/services/products/api';
import { initialState, productsReducer } from '@/services/products/reducer';

export function useProductsService() {
  const [state, dispatch] = useReducer(productsReducer, initialState);


  async function getProducts() {
    dispatch({ type: 'pending', payload: true } );
    try {
      const res = await ProductsApi.getProducts();
      dispatch({ type: 'productsGetSuccess', payload: res.items})
    } catch (e) {
        console.log(e)
        dispatch({ type: 'error', payload: 'Products not loaded' })
    }
}

async function deleteProduct(id: string) {
    dispatch({ type: 'pending', payload: true })
    try {
        await ProductsApi.removeProduct(id);
        dispatch({ type: 'productDeleteSuccess', payload: id  })
    } catch(e) {
        console.log(e)
        dispatch({ type: 'error', payload: 'Products not deleted'  })
    }
}



  async function addProduct(product: Partial<Product>) {
    dispatch({ type: 'pending', payload: true })
    try {
      const res = await ProductsApi.addProduct(product);
      dispatch({ type: 'productAddSuccess', payload: res  })
    } catch(e) {
        console.log(e)
        dispatch({ type: 'error', payload: 'Products not added'  })
    }
}

  async function editProduct(product: Partial<Product>) {
    dispatch({ type: 'pending', payload: true })
    try {
        const res = await ProductsApi.editProduct(product);
      dispatch({ type: 'productEditSuccess', payload: res  })
    } catch(e) {
        console.log(e)
      dispatch({ type: 'error', payload: 'Products not edited'  })
    }
  }

  function setActiveItem(product: Product) {
    dispatch({ type: 'productSetActive', payload: product  })
  }

  function resetActiveItem() {
    dispatch({ type: 'productSetActive', payload: null })
  }

  return {
    actions: {
      getProducts,
      deleteProduct,
      addProduct,
      editProduct,
      setActiveItem,
      resetActiveItem
    },
    state
  }

}