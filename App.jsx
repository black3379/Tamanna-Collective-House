import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold">Tamanna Collective House</h1>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <Menu className="w-6 h-6 md:hidden cursor-pointer" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Discover Unique Handcrafted Goods
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            Ethically made. Beautifully designed. Delivered to your door.
          </p>
          <Button className="w-fit px-6 py-2 text-lg">Shop Now</Button>
        </motion.div>

        <motion.img
          src="https://source.unsplash.com/featured/?handmade,craft"
          alt="Hero"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Featured Products */}
      <section className="px-6 md:px-12 py-10 bg-gray-50">
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={`https://source.unsplash.com/400x300/?product,handmade,${item}`}
                  alt="Product"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">Product Name {item}</h4>
                  <p className="text-gray-600">Short description of product {item}.</p>
                  <Button className="mt-2 w-full">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Tamanna Collective House. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to your account</h2>
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg" />
        <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-lg" />
        <Button className="w-full">Login</Button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>
        <input type="text" placeholder="Full Name" className="w-full p-3 mb-4 border rounded-lg" />
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg" />
        <input type="password" placeholder="Password" className="w-full p-3 mb-4 border rounded-lg" />
        <Button className="w-full">Sign Up</Button>
        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
