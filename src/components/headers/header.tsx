"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Home, HomeIcon, Menu, ShoppingCart } from "lucide-react";
import { Moon, Sun, X } from "lucide-react";
import { Button } from "../ui/button";
import { GrContact } from "react-icons/gr";
import { TbUserHeart } from "react-icons/tb";

export function HeaderClient() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header
      className="fixed top-0 left-0 right-0 border-b
    max-w-full h-15  border-b-neutral-500  backdrop-blur-2xl z-50"
    >
      <div className="flex justify-between items-center h-full px-3 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-1 ">
          <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-sky-600 to-blue-300 flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">A</span>
          </div>

          <span className="text-[30px] font-bold tracking-wider ">
            <i>Wazai</i>
          </span>
        </Link>

        <div className=" flex gap-x-19">
          <nav className="hidden  md:flex sm:flex gap-7 text-[20px] font-serif ">
            <Link href="/">
              <HomeIcon className="inline mb-1" />
              Home
            </Link>
            <Link href="/about">
              <TbUserHeart size={25} className="inline mb-1 mr-0.5" />
              About
            </Link>
            <Link href="/contact">
              <GrContact size={22} className="inline mr-0.5 " />
              Contact
            </Link>
          </nav>
          <div className="flex gap-x-2">
            <Button
              className="md:hidden sm:hidden hover:bg-neutral-700"
              variant="ghost"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="size-7" /> : <Menu className="size-7" />}
            </Button>

            <button
              onClick={() => setDark(!dark)}
              className={`w-12 h-7 flex items-center rounded-full p-1 mt-1 md:mt-0 justify-center transition-all border border-sky-400 
        ${dark ? "bg-neutral-400" : "bg-neutral-700 "}`}
            >
              {dark ? (
                <Sun className="text-black w-5 h-6" />
              ) : (
                <Moon className="text-white w-5 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden sm:hidden bg-neutral-800  dark:bg-yellow-50  border-t border-b border-neutral-700 py-4 px-4 space-y-4  animate-in slide-in-from-top duration-200">
          <Link
            href="/"
            className=" text-lg flex items-center gap-2 hover:text-sky-400"
            onClick={() => setOpen(false)}
          >
            <Home size={22} /> Home
          </Link>

          <Link
            href="/about"
            className="text-lg flex items-center gap-2 hover:text-sky-400"
            onClick={() => setOpen(false)}
          >
            <TbUserHeart size={25} className="inline mb-1 -ml-1" />
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg flex items-center gap-2 hover:text-sky-400"
            onClick={() => setOpen(false)}
          >
            <GrContact size={22} className="inline  " />
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
