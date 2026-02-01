import { MailCheckIcon, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram, FaYoutube } from "react-icons/fa6";

export function FooterPage() {
  return (
    <footer className="border-t dark:border-black py-10 px-6 mt-20  absolute right-0 left-0  bg-neutral-800 dark:bg-amber-100 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-3">Amin Gul Wazai</h2>
          <p className="text-sm">
            {"I'm"} a Full Stack Website and Web Application Developer in Kabul,
            Afghanistan. I build fast, secure, and modern websites and web
            applications for your company.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold  mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <FaSquareWhatsapp size={25} className="text-green-500 inline" />{" "}
              WhatsApp: +93773424260
            </li>
            <li>
              <PhoneCall className="inline text-sky-400" /> Phone: +93703532645
            </li>
            <li>
              <MailCheckIcon className="inline text-blue-500" /> Email:
              aminwazai3@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold  mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a className="p-2 rounded-xl bg-sky-900 text-white hover:scale-110 transition">
              <BsFacebook size={24} />
            </a>
            <a className="p-2 rounded-xl bg-green-700 text-white hover:scale-110 transition">
              <FaSquareWhatsapp size={24} />
            </a>
            <a className="p-2 rounded-xl bg-linear-to-br from-rose-500 to-amber-500 text-white hover:scale-110 transition">
              <FaSquareInstagram size={24} />
            </a>
            <a className="p-2 rounded-xl bg-sky-100 text-red-600 hover:scale-110 transition">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center  text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Amin Personal Site. All rights reserved.
        Built by Amin Wazai.
      </div>
    </footer>
  );
}
