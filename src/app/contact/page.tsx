import ContactForm from "@/components/cont/conForm";
import { MailCheckIcon } from "lucide-react";
import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";

export default function ContenctPage() {
  return (
    <section className="bg-neutral-900 dark:bg-amber-100  text-white py-8 md:px-7 px-2 mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center md:text-left dark:text-black mb-8 md:mb-1">
          Connect With Us
        </h2>
        <div className=" flex flex-col-reverse md:flex-row  w-full md:justify-between   md:mt-19">
          <div className=" md:flex  md:w-1/2 md:pl-10 mt-6 md:mr-30">
            <div className="space-y-4">
              <h2 className=" text-3xl md:text-4xl font-bold dark:text-black  ">
                Get in Touch
              </h2>

              <p
                className=" text-lg md:text-2xl leading-relaxed text-neutral-200
             dark:text-neutral-800 w-full"
              >
                Ready to build something great? Feel free to reach out to us
                anytime. We’re here to answer your questions and help bring your
                ideas to life.
              </p>

              <p className="md:text-lg dark:text-black">
                <span className="text-3xl -ml-3">⏱</span>Typically responds
                within 24 hours
              </p>
              <div>
                <ul className="space-y-4">
                  <li className="flex md:gap-4 gap-2">
                    <MailCheckIcon className="inline text-blue-500 mt-3" />
                    <div>
                      <p className="text-lg dark:text-neutral-900"> Email</p>
                      <Link
                        href="https://aminwazai3@gmail.com"
                        className="text-[20px] tracking-wider text-blue-500"
                      >
                        aminwazai3@gmail.com
                      </Link>
                    </div>
                  </li>
                  <li className="flex md:gap-4 gap-2">
                    <FaSquareWhatsapp
                      size={25}
                      className="text-green-500 inline mt-3"
                    />{" "}
                    <div>
                      <p className="text-lg dark:text-neutral-900">
                        {" "}
                        WhatsApp:
                      </p>
                      <Link
                        href="https://wa.me/+93773424260"
                        className="text-[25px] -tracking-tighter   text-green-500"
                      >
                        +93773424260
                      </Link>
                    </div>
                  </li>
                  <li className="flex md:gap-4 gap-2">
                    <FiPhoneCall
                      size={29}
                      className="inline text-sky-400 mt-3"
                    />
                    <div>
                      <p className="text-lg dark:text-neutral-900"> Phone:</p>
                      <Link
                        href="/Phone Number +93703532645"
                        className="text-[25px] -tracking-tighter   text-sky-500"
                      >
                        +93703532645
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex md:gap-x-10 gap-3 mt-11">
                <a
                  href="https://www.facebook.com/AminWazai"
                  target="_blank"
                  className="p-3 rounded-xl bg-blue-600 text-white hover:scale-110 hover:bg-blue-700 transition-all duration-300"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://t.me/+93773424260"
                  target="_blank"
                  className="p-3 rounded-xl bg-sky-500 text-white hover:scale-110 hover:bg-sky-600 transition-all duration-300"
                >
                  <FaTelegramPlane size={20} />
                </a>

                <a
                  href="https://AminWazai.com"
                  target="_blank"
                  className="p-3 rounded-xl bg-linear-to-br from-pink-500 via-red-500 to-yellow-500 text-white hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="p-3 rounded-xl bg-red-600 text-white hover:scale-110 hover:bg-red-700 transition-all duration-300"
                >
                  <FaYoutube size={20} />
                </a>

                <a
                  href="https://www.tiktok.com/@wazai53"
                  target="_blank"
                  className="p-3 rounded-xl bg-black text-white hover:scale-110 hover:bg-neutral-800 transition-all duration-300"
                >
                  <FaTiktok size={22} />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
