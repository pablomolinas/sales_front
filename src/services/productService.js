import Config from "../config";

class ProductService {

    get = async () => {
        const response = await fetch(this.getUrl('/api/Product'));
        return await response.json();
    }

    getById = async (id) => {
        const response = await fetch(this.getUrl(`/api/Product/${id}`));
        return await response.json();
    }

    post = async (product) => {
        const response = await fetch(this.getUrl(`/api/Product`),
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(product)
            });
        return await response.json();
    }

    put = async (product) => {
        const response = await fetch(this.getUrl(`/api/Product/${product.id}`),
            {
                method: 'PUT',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(product)
            });
        return await response.json();
    }

    delete = async (id) =>
        await fetch(this.getUrl(`/api/Product/${id}`), { method: 'DELETE' });

    getUrl = (path) =>
        Config.apiUrl + path;

}

export default new ProductService();