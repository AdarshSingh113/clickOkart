import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router

function Header() {
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-gray-900 text-white">
            <div>
                <Link to="/">
                    <img
                        className="h-12"
                        src="https://www.passionateinmarketing.com/wp-content/uploads/2022/08/ekart.webp"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link
                    to="/cart"
                    className="text-white hover:text-gray-300 transition duration-300"
                >
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4h16l2 7v10a2 2 0 01-2 2H4a2 2 0 01-2-2V11l2-7z"
                            />
                        </svg>
                        <span className="ml-1">Cart</span>
                    </div>
                </Link>
                <Link to="/login">
                    <button className="bg-transparent hover:bg-white text-white hover:text-gray-900 border border-white hover:border-transparent rounded px-4 py-2 transition duration-300">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="bg-white hover:bg-gray-300 text-gray-900 font-semibold hover:text-gray-800 border border-white hover:border-transparent rounded px-4 py-2 transition duration-300">
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
