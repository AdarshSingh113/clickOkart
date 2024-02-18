// SignupPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here (e.g., call an API)
        console.log("Signing up with:", email, password);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-gray-700 font-semibold mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                    Sign Up
                </button>
            </form>
            <p className="mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                    Login here
                </Link>
            </p>
        </div>
    );
};

export default Signup;
