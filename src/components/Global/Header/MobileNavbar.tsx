"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BagIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/icons";

export default function MobileNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`w-full transition-all duration-300 z-50 ${
          isSticky ? "fixed top-0 bg-white shadow-md" : "relative bg-white"
        }`}
      >
        <div className="w-11/12 mx-auto flex items-center justify-between py-4">
          {/* Menu Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <MenuIcon />
          </button>

          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={80}
            className="object-contain"
          />

          {/* Right Icons */}
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              <SearchIcon />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-md">
              <HeartIcon />
            </button>

            <button className="relative p-2 hover:bg-gray-100 rounded-md">
              <BagIcon />
              <span className="absolute -top-1 -right-1 bg-primary-dark text-white text-[10px] h-4 w-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {(drawerOpen || searchOpen) && (
        <div
          onClick={() => {
            setDrawerOpen(false);
            setSearchOpen(false);
          }}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 bg-white w-72 h-full shadow-lg z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-5">
          <button
            onClick={() => setDrawerOpen(false)}
            className="self-end text-xl font-bold"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-4 text-lg">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              Shop
            </a>
            <a href="#" className="hover:text-primary">
              Categories
            </a>
            <a href="#" className="hover:text-primary">
              Wishlist
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* SEARCH MODAL */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition ${
          searchOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="bg-white rounded-lg w-11/12 max-w-md p-6 shadow-lg animate-fade">
          <h2 className="text-lg font-semibold mb-4">Search Products</h2>
          <input
            type="text"
            placeholder="Search..."
            autoFocus
            className="w-full border px-4 py-2 rounded-md outline-none focus:ring focus:ring-primary"
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:opacity-90"
          >
            Close
          </button>
        </div>
      </div>

      {/* PUSH CONTENT DOWN WHEN NAVBAR IS FIXED */}
      {isSticky && <div className="h-[80px]" />}
    </>
  );
}
