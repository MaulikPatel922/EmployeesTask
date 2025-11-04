import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-green-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="backdrop-blur-lg bg-white/60 shadow-2xl rounded-3xl w-full max-w-md p-8 border border-white/40"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-center text-indigo-700 mb-6"
        >
          Welcome Back 👋
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
              placeholder="Enter your password"
              required
            />
          </motion.div>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-indigo-500 to-green-400 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-indigo-300/50 transition-all duration-300"
          >
            Login
          </motion.button>
        </form>

        {/* Extra Section */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600 text-sm mt-6"
        >
          Don’t have an account?{" "}
          <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
