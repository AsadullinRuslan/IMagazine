import axios from "axios";

export default class fetchProducts {

    static async getAll(limit = 100, page = 1) {
        const response = await axios.get('https://fakestoreapi.com/products', {
            params: {
                limit: limit,
                page: page
            }
        })
            return response.data
    }

    static async getById(id) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data
    }
}