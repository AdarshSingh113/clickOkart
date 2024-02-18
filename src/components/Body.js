import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../store/productSlice";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const Body = () => {
    const productList = useSelector(
        (state) => state.productSlice?.productList?.products
    );
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");
    const [tempProductList, setTempProductList] = useState([]);
    const [selectedPriceSegment, setSelectedPriceSegment] = useState("");

    const priceSegments = [
        { value: "", label: "All Prices" },
        { value: "under10", label: "Under $10" },
        { value: "10to50", label: "$10 - $50" },
        { value: "50to100", label: "$50 - $100" },
        { value: "over100", label: "Over $100" },
    ];

    useEffect(() => {
        setTempProductList(productList);
    }, [productList]);

    useEffect(() => {
        dispatch(fetchProductData());
    }, []);

    const handleSearch = () => {
        const filteredProducts = productList.filter((product) =>
            (product?.brand + product.category)
                .toLowerCase()
                .includes(searchText.toLowerCase().trim())
        );
        setTempProductList(filteredProducts);
    };

    const sortProducts = (sortType) => {
        const sortedProducts = productList.slice().sort((a, b) => {
            if (sortType === "ascending") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setTempProductList(sortedProducts);
    };

    const filterProductsByPriceSegment = (value) => {
        setSelectedPriceSegment(value);
        let filteredProducts = [...productList];

        switch (value) {
            case "under10":
                filteredProducts = productList.filter(
                    (product) => product.price < 10
                );
                break;
            case "10to50":
                filteredProducts = productList.filter(
                    (product) => product.price >= 10 && product.price <= 50
                );
                break;
            case "50to100":
                filteredProducts = productList.filter(
                    (product) => product.price > 50 && product.price <= 100
                );
                break;
            case "over100":
                filteredProducts = productList.filter(
                    (product) => product.price > 100
                );
                break;
            default:
                break;
        }

        setTempProductList(filteredProducts);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <div className="flex items-center justify-between space-x-4 p-4">
                {/* Search and filter elements */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {tempProductList &&
                    tempProductList.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProductCard product={item} />
                        </motion.div>
                    ))}
            </div>
        </motion.div>
    );
};

export default Body;
