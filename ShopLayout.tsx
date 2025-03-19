"use client";
import React, { useState } from "react";
import Header from "./Header";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import { FilterCategory, Product } from "./types";

const ShopLayout: React.FC = () => {
  const [location, setLocation] = useState(() => ({
    query: {},
    path: "",
  }));

  const [deviceSize, setDeviceSize] = useState(() => "large");

  // Filter categories data
  const filterCategories: FilterCategory[] = [
    {
      name: "Kategorie",
      options: ["T-Shirts", "Sweatshirts", "Kleider"],
    },
    {
      name: "Farben",
      options: ["BBC", "Josi", "white", "Valis Hund"],
    },
  ];

  // Product data
  const products: Product[] = [
    {
      id: "1",
      name: "Vali Jacke",
      designer: "emil",
      price: "16,65€",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/288447d06ac298132a9dad5edd76b0345662428f",
    },
    {
      id: "2",
      name: "Ibiskus tee (krebs)",
      price: "01,69€",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6134b409bd0fb12842c7939754bdbe73b361c58",
    },
    {
      id: "3",
      name: "Cooles Sigma Tshirt 😎",
      price: "88,65€",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f05f0511755d85a46717dcd0063619122b55ce5",
    },
    {
      id: "4",
      name: "Fritz baggy Jeans",
      price: "16,65€",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bfff02c1124b2012e3d9bb9e129b9ae44d1d9b43",
    },
    {
      id: "5",
      name: "Motorad / Moped Haube (bunt)",
      price: "free",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7df18a550fee56c82701c9441af29790e9d65121",
    },
    {
      id: "6",
      name: "Einbrecher haube (-geld)",
      price: "-150€",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5d08a969a69f05a5b7df1809ef966d59917183f",
    },
    {
      id: "7",
      name: "Scored 89 Tshirt (fake)",
      price: "5,56€",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4b86349ddbacdc9efc40ee65aa9ca31f640d90e3",
    },
    {
      id: "8",
      name: "Hilfe ich höre stimmen shirt",
      price: "1,54€",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2b3c19bf3b688bea134139c168080aa0625cfebc",
    },
  ];

  return (
    <main className="mx-auto my-0 bg-white max-w-[1200px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />
      <div className="flex gap-5 p-5 max-sm:flex-col">
        <FilterSidebar categories={filterCategories} />
        <ProductGrid products={products} />
      </div>
    </main>
  );
};

export default ShopLayout;
