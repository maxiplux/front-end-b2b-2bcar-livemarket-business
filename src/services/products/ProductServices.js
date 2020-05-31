import Settings from "../../Settings"
import axios from "axios";

const ProductServices = {
    getAll: (token = '', page = 0, size = 10, sortBy = 'id') => {
        const url = `${Settings.url}${Settings.products.endPointBase}?page=${page}&size=${size}&sortBy=${sortBy}`;
        return axios.get(url, {headers: {Authorization: token}});
    },
    getEdit: (token = '', id = 'id') => {
        const url = `${Settings.url}${Settings.products.endPointBase}${id}/`;
        return axios.get(url, {headers: {Authorization: token}});
    }

}
export default ProductServices;
