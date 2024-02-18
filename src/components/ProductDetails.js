import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchProductData } from "../store/productSlice";
import { addItem } from "../store/cartSlice";

const ProductDetails = ({ routes }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector(
        (state) => state.productSlice?.productList?.products
    );

    useEffect(() => {
        dispatch(fetchProductData());
    }, []);

    const product = productList.find((product) => product.id === parseInt(id));

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    if (!product) {
        return (
            <div className="text-center text-red-600 text-xl mt-8">
                Product not found
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        src={product.images[2]}
                        alt={product.title}
                        className="rounded-lg shadow-md mb-4"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-semibold mb-4">
                        {product.title}
                    </h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-xl font-semibold">
                            ${product.price}
                        </p>
                        <span className="bg-green-500 text-white px-2 py-1 rounded-md">
                            {product.category}
                        </span>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleAddToCart}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Add to Cart
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetails;
