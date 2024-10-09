"use client";
import { useState } from "react";
import {
  Bitcoin,
  Filter,
  Search,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
const products = [
  {
    id: 1,
    name: "Solana Smartwatch",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    cryptoPrice: 2.5,
  },
  {
    id: 2,
    name: "Blockchain Backpack",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
    cryptoPrice: 1,
  },
  {
    id: 3,
    name: "Crypto Laptop Stand",
    image: "/placeholder.svg?height=200&width=200",
    cryptoPrice: 0.6,
  },
  {
    id: 4,
    name: "NFT Art Frame",
    image: "/placeholder.svg?height=200&width=200",
    cryptoPrice: 3.75,
  },
  {
    id: 5,
    name: "Web3 Wireless Earbuds",
    image: "/placeholder.svg?height=200&width=200",
    cryptoPrice: 1.6,
  },
  {
    id: 6,
    name: "Decentralized Desk Lamp",
    image: "/placeholder.svg?height=200&width=200",
    cryptoPrice: 1.1,
  },
];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceLowToHigh") return a.cryptoPrice - b.cryptoPrice;
    if (sortBy === "priceHighToLow") return b.cryptoPrice - a.cryptoPrice;
    return 0; // 'featured' or default
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="flex items-center w-full md:w-auto">
              <Search className="w-4 h-4 mr-2 opacity-50" />
              <Input
                placeholder="Search products..."
                className="max-w-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <Filter className="w-4 h-4 opacity-50" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="priceLowToHigh">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="priceHighToLow">
                    Price: High to Low
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent className="flex-1 p-4">
                  <CardTitle className="text-lg font-semibold mb-2">
                    {product.name}
                  </CardTitle>
                  <div className="flex justify-between items-center">
                    <span className="text-sm flex items-center">
                      <Bitcoin className="w-4 h-4 mr-1" />
                      {product.cryptoPrice} SOL
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-6 px-4 md:px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 Solana Shop. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
