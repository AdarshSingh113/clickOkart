import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <Link
            to={`/product/${product.id}`}
            className="block w-full max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl m-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
            <img
                src={product.images[2]}
                alt={product.title}
                className="object-cover object-center w-full h-60"
            />
            <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                </p>
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-700">
                        ${product.price}
                    </h3>
                    <span className="text-sm text-gray-600">
                        {product.category}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;
