import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-neutral-900 dark:bg-amber-100  text-white py-10 md:px-7 px-2 mt-26">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center md:text-left dark:text-black">
          About Me
        </h2>

        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed dark:text-neutral-800">
              I am a passionate{" "}
              <span className="text-white dark:text-sky-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              with experience in building modern, scalable, and user-friendly
              web applications. I enjoy turning complex problems into simple and
              efficient solutions.
            </p>

            <p className="text-gray-400 dark:text-neutral-700 leading-relaxed">
              I work across both frontend and backend, focusing on clean code,
              performance, and great user experience. My goal is to create
              high-quality digital products that make a real impact.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 rounded-full bg-neutral-800 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative md:w-88 md:h-88 h-70 w-70">
              <Image
                src="/wa.jpg"
                alt="Full Stack Developer"
                fill
                className="object-fill  rounded-full border-4 border-neutral-700 shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl bg-neutral-800 rounded-2xl md:p-8 px-2 py-5 shadow-lg space-y-6 md:ml-40">
          <h3 className="text-2xl font-semibold">What I Do</h3>

          <ul className="space-y-4 text-gray-300">
            <li>✅ Frontend Development (React, Next.js)</li>
            <li>✅ Backend Development (Node.js, APIs)</li>
            <li>✅ Database Design & Management</li>
            <li>✅ Responsive & Modern UI Design</li>
            <li>✅ Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
