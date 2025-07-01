// src/components/ProductList.jsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { name: "T-shirt", category: "clothing" },
  { name: "Jacket", category: "clothing" },
  { name: "Lamp", category: "home-decor" },
  { name: "Vase", category: "home-decor" },
  { name: "Watch", category: "accessories" },
  { name: "Sunglasses", category: "accessories" },
];

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === "all" || p.category === filter;
    return matchSearch && matchCategory;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded-lg w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="clothing">Clothing</option>
          <option value="home-decor">Home Decor</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <Card key={i}>
            <CardContent className="p-0">
              <img
                src={`https://source.unsplash.com/400x300/?${item.name}`}
                alt={item.name}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 capitalize">{item.category}</p>
                <Button className="mt-2 w-full">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
