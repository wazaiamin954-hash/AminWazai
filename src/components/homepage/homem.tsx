"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import {
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { Button } from "../ui/button";
import { TypingText } from "./homepage";
import Link from "next/link";
const images = ["/ami.jpg", "/wa.jpg", "/wazai.jpg"];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setAnimate(true);
      }, 700);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-neutral-900 dark:bg-amber-100  text-white py-10 md:px-2 px-2 mt-10">
      <div className="max-w-7xl mx-auto px-1  sm:px-6 lg:px-12 md:mt-21">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:text-left   sm:text-3xl">
            <h1 className="text-[19px] sm:text-3xl lg:text-3xl font-extrabold tracking-wide sm:pl-2 md:text-2xl dark:text-black md:-ml-1">
              {" Hello, It's Me"}{" "}
              <span className="text-amber-500">Amin Wazai</span>
            </h1>

            <h2 className="text-[20px] sm:text-2xl sm:ml-3 lg:text-3xl font-serif md:text-2xl dark:text-black md:ml-0">
              {"And I'm a"}

              <span className="inline-block">
                <TypingText />
              </span>
            </h2>

            <p
              className="text-sm sm:text-base text-neutral-400 leading-relaxed dark:text-neutral-600 md:tracking-wider 
            md:text-[17px]"
            >
              I have a strong passion for web design and development, and I
              always strive to create professional, visually appealing, and
              user-friendly websites. I am currently a student at
              <span className="font-serif inline "> Bost University.</span>
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <a
                href="https://www.facebook.com/AminWazai"
                className="p-2 rounded-xl bg-sky-900 text-white hover:scale-110 transition"
              >
                <BsFacebook size={24} />
              </a>
              <a
                href="https://wa.me/+93773424260"
                className="p-2 rounded-xl bg-green-700 text-white hover:scale-110 transition"
              >
                <FaSquareWhatsapp size={24} />
              </a>
              <a
                href="https://AminWazai.com"
                className="p-2 rounded-xl bg-linear-to-br from-rose-500 to-amber-500 text-white hover:scale-110 transition"
              >
                <FaSquareInstagram size={24} />
              </a>
              <a className="p-2 rounded-xl bg-sky-100 text-red-600 hover:scale-110 transition">
                <FaYoutube size={24} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-x-2 mt-4 ">
              <Button
                className="bg-amber-500 text-black px-2 py-1
             lg:px-7 lg:py-2   lg:font-serif
             lg:text-[18px] hover:bg-amber-600"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button className="bg-amber-100 text-black px-2 py-1 hover:bg-sky-100  md:px-3 md:py-2 lg:px-7  lg:py-2   lg:font-serif lg:text-[18px] dark:bg-sky-200">
                View Portfolio
              </Button>
              <Button
                className="bg-amber-500  text-black px-2 py-1
             md:px-4 md:py-2 lg:px-7  lg:py-2   lg:font-serif
             lg:text-[18px]  hover:bg-amber-600"
              >
                <Link href="/">Projects</Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-74 h-85 sm:w-76 sm:h-98 rounded-2xl overflow-hidden shadow-2xl shadow-neutral-600  rounded-br-[25%] rounded-tl-[25%] lg:w-100  lg:h-100 lg:-mt-5">
              <Image
                src={images[index]}
                alt="profile"
                fill
                priority
                className={`object-center transition-all duration-700
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
