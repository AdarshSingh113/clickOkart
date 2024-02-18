import axios from "axios";

export const getProductDataApi = async () => {
    return await axios({
        method: "get",
        //url: "https://fakestoreapi.com/products",
        url: "https://dummyjson.com/products",
    });
};
