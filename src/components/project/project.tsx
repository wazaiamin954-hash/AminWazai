import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function ProjectPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <h1 className=" md:text-center text-2xl sm:text-3xl font-serif mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="rounded-2xl border-2 border-sky-400 overflow-hidden">
          <div className="relative h-48 sm:h-56">
            <Image
              src="/e-coo.png"
              alt="E-commerce"
              fill
              className="object-fill "
            />
          </div>

          <div className="bg-neutral-800  dark:bg-amber-100 text-white dark:text-black p-4">
            <h2 className="text-xl font-serif mb-2">E-commerce</h2>
            <p className="text-sm mb-8">
              Personal e-commerce project demonstrating modern web development
              skills with responsive, user-friendly, and fully functional online
              stores.
            </p>

            <div className="flex flex-wrap  gap-3  text-sm font-medium mb-4">
              <span className="bg-pink-600 px-2 py-1 rounded-full">HTML</span>
              <span className="bg-pink-600 px-2 py-1 rounded-full">
                TypeScript
              </span>
              <span className="bg-pink-600 px-2 py-1 rounded-full">
                Next.js
              </span>

              <span className="bg-pink-600 md:px-2 md:py-1 px-6 py-1 rounded-full">
                Tailwind CSS
              </span>
            </div>

            <Button className="w-full shadow-xl">
              <Link href="https://ecommerceamin.netlify.app/">
                View Project
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-sky-400 overflow-hidden">
          <div className="relative h-48 sm:h-56">
            <Image
              src="/nn.png"
              alt="Post Feed"
              fill
              className="object-fill "
            />
          </div>

          <div className="bg-neutral-800 dark:bg-amber-100  text-white  dark:text-black p-4">
            <h2 className="text-xl font-serif mb-2">Post Feed</h2>
            <p className="text-sm mb-8">
              A personal project showcasing my skills in building dynamic and
              interactive web applications. Users can view, create, and engage
              with posts in real-time
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-medium mb-4">
              <span className="bg-pink-600 px-2 py-1 rounded-full">HTML</span>
              <span className="bg-pink-600 px-2 py-1 rounded-full">
                JavaScript
              </span>
              <span className="bg-pink-600 px-2 py-1 rounded-full">
                Next.js
              </span>
            </div>

            <Button className="w-full shadow-xl">View Project</Button>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-sky-400 overflow-hidden">
          <div className="relative h-48 sm:h-56">
            <Image src="/jj.png" alt="Portfolio" fill className="object-fill" />
          </div>

          <div className="bg-neutral-800 dark:bg-amber-100 text-white  dark:text-black  p-4">
            <h2 className="text-xl font-serif mb-2">Portfolio</h2>
            <p className="text-sm mb-3">
              A personal portfolio website showcasing my skills in web design
              and development. Features modern, responsive design with clean UI
              and smooth user experience.
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-medium mb-4">
              <span className="bg-pink-600 px-2 py-1 rounded-full">HTML</span>
              <span className="bg-pink-600 px-2 py-1 rounded-full">CSS3</span>
              <span className="bg-pink-600 px-2 py-1 rounded-full">
                JavaScript
              </span>
            </div>

            <Button className="w-full shadow-xl">
              <Link href="https://wazai.netlify.app/">View Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
