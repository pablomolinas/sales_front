import { useEffect, useState } from 'react';
import ProdutcService from '../../services/productService';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(1)
    const fetchProducts = () => {
        ProdutcService.get()
            .then(rows => setProducts(rows))
            .finally(() => setLoading(false))
            .catch(e => console.error(e));
    };

    const createProduct = (product) => {
        setLoading(true);
        ProdutcService.post(product)
            .then(resp => {
                fetchProducts();
                return resp;
            })

            .finally(() => setLoading(false))
            .catch(e => console.error(e));
    };

    const editProduct = (product) => {
        setLoading(true);
        ProdutcService.put(product)
            .then(resp => {
                fetchProducts();
                return resp;
            })

            .finally(() => setLoading(false))
            .catch(e => console.error(e));
    };

    const deleteProduct = (id) => {
        setLoading(true);
        ProdutcService.delete(id)
            .then(() => fetchProducts())

            .finally(() => setLoading(false))
            .catch(e => console.error(e));
    };

    return {
        products,
        loading,

        createProduct,
        editProduct,
        deleteProduct
    }
}

export default useProducts
