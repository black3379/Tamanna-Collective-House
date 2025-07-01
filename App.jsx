// src/App.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

// Category data
const categoryData = {
  clothing: ["T-shirt", "Jacket", "Pants"],
  "home-decor": ["Lamp", "Wall Art", "Vase"],
  accessories: ["Watch", "Sunglasses", "Bag"],
};

// Category page component
function CategoryPage() {
  const { name } = useParams();
  const items = categoryData[name] || [];

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 capitalize">Category: {name.replace("-", " ")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <Card key={i} className="rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <img
                src={`https://source.unsplash.com/400x300/?${item}`}
                alt={item}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{item}</h4>
                <p className="text-gray-600">High-quality {item} for your lifestyle.</p>
                <Button className="mt-2 w-full">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Homepage component
function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between p-4 shadow-md sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold">Tamanna Collective House</h1>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <Menu className="w-6 h-6 md:hidden cursor-pointer" />
        </div>
      </header>

      <section className="p-6 md:p-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {Object.keys(categoryData).map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className="bg-gray-100 rounded-xl p-6 text-center hover:bg-gray-200 transition"
            >
              <h3 className="text-xl font-semibold capitalize">{cat.replace("-", " ")}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// Login page component
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

// Signup page component
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

// Main router for all routes
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}
