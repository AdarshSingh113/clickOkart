import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeItem,
    increaseQuantity,
    decreaseQuantity,
} from "../store/cartSlice";

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b border-gray-300 py-4 transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="h-16 w-16 object-cover rounded transition duration-300 transform hover:scale-105"
                                />
                                <div>
                                    <p className="text-lg font-semibold">
                                        {item.title}
                                    </p>
                                    <p className="text-gray-600">
                                        Price: ${item.price}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() =>
                                                handleDecreaseQuantity(item.id)
                                            }
                                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded transition duration-300 transform hover:scale-105"
                                        >
                                            -
                                        </button>
                                        <p className="mx-2">{item.quantity}</p>
                                        <button
                                            onClick={() =>
                                                handleIncreaseQuantity(item.id)
                                            }
                                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded transition duration-300 transform hover:scale-105"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-500 hover:text-red-700 transition duration-300"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-6 text-lg font-semibold">
                        Total: $
                        {cartItems
                            .reduce(
                                (acc, item) =>
                                    acc +
                                    parseFloat(item.price) * item.quantity,
                                0
                            )
                            .toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
