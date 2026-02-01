import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiCss3, SiExpress, SiNextdotjs } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

export function SkillPage() {
  return (
    <div className="md:mt-28 mt-20">
      <h2 id="skill"></h2>
      <div className=" flex flex-col gap-y-12 md:flex-row  md:max-w-7xl mx-auto md:px-8 md:gap-x-18 px-4">
        <div className=" md:w-1/2">
          <h2 className="text-2xl font-serif font-bold mb-6">
            Skills & Technologies
          </h2>

          <div className="mt-8  items-center w-full">
            <div className=" flex mb-0">
              <AiOutlineHtml5 size="35" className="text-red-500" />
              <h5 className="md:text-[21px] md:mt-1">HTML5</h5>
            </div>
            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-11/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">95%</div>
            </div>
          </div>
          <div className="mt-3  items-center w-full">
            <div className=" flex mb-0">
              <SiCss3 size="30" className=" md:mt-1 text-sky-400" />
              <h5 className="md:text-[22px] md:mt-1">CSS3</h5>
            </div>

            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-10/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">85%</div>
            </div>
          </div>
          <div className="mt-3 items-center w-full">
            <div className=" flex mb-0">
              <TbBrandJavascript
                size="37"
                className=" md:mt-1 text-yellow-300"
              />
              <h5 className="md:text-[22px] md:mt-2">JavaScript</h5>
            </div>
            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-8/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">75%</div>
            </div>
          </div>
          <div className="mt-3  items-center w-full">
            <div className=" flex mb-0">
              <FaReact size="37" className=" md:mt-1 text-indigo-500" />
              <h5 className="md:text-[22px] md:mt-2">React</h5>
            </div>
            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-9/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">80%</div>
            </div>
          </div>
          <div className="mt-2  items-center w-full">
            <div className=" flex mb-0">
              <IoLogoNodejs size="37" className=" md:mt-1 text-gray-800" />
              <h5 className="md:text-[22px] md:mt-2">Node.js</h5>
            </div>
            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-7/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">70%</div>
            </div>
          </div>
          <div className="mt-3  items-center w-full">
            <div className=" flex mb-0">
              <SiExpress size="37" className=" md:mt-1 text-green-300" />
              <h5 className="md:text-[22px] md:mt-2">Express</h5>
            </div>
            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-9/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">80%</div>
            </div>
          </div>
          <div className="mt-3  items-center w-full">
            <div className=" flex mb-0">
              <BiLogoPostgresql
                size="37"
                className=" md:mt-1 text-indigo-600"
              />
              <h5 className="md:text-[22px] md:mt-2">PostgerSQL</h5>
            </div>
            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-9/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">85%</div>
            </div>
          </div>
          <div className="mt-2  items-center w-full">
            <div className=" flex mb-0">
              <RiTailwindCssLine
                size="35"
                className=" md:mt-1 text-neutral-700"
              />
              <h5 className="md:text-[22px] md:mt-2">Tailwind</h5>
            </div>
            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-10/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">90%</div>
            </div>
          </div>
          <div className="mt-3  items-center w-full">
            <div className=" flex mb-0">
              <SiNextdotjs size="35" className=" md:mt-1 text-neutral-700" />
              <h5 className="md:text-[22px] md:mt-2">Next.js</h5>
            </div>
            <div className="bg-amber-500 w-full h-2.5 relative rounded-2xl">
              <div className="w-9/12 bg-sky-500 absolute top-0 left-0 h-full rounded-2xl"></div>
              <div className="absolute right-0 bottom-4 text-2xl ">80%</div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-serif font-bold mb-6">Education</h2>

          <div>
            <div
              className="md:mt-11 lg:mt-15 border-2 border-amber-500  rounded-2xl  px-2 py-3 md:px-2 md:py-2  hover:bg-sky-400 mt-7
            lg:px-5 lg:py-6"
            >
              <span className="sm:text-2xl sm:font-extralight sm:tracking-widest ">
                {" "}
                (Mar 2009-2021 Dec)
              </span>
              <h3 className="sm:text-2xl sm:font-serif sm:tracking-widest  md:text-3xl md:mt-2">
                {" "}
                High School Graduation Period
              </h3>

              <span className="sm:text-2xl sm:font-extralight sm:tracking-widest  md:mt-2">
                Orgun Kohna High School{" "}
              </span>
            </div>
            <div
              className="md:mt-4 lg:mt-6 mt-6 border-2 border-amber-500 rounded-2xl px-0 py-3 md:px-2 md:py-3 hover:bg-sky-400
            lg:px-5 lg:py-6"
            >
              <span className="sm:text-2xl sm:font-serif sm:tracking-widest ">
                (Sep 2024-Present){" "}
              </span>
              <h3 className="sm:text-2xl sm:font-serif sm:tracking-widest   md:mt-2">
                Computer Science Software Engineeri
              </h3>
              <span className="sm:text-2xl sm:font-extralight sm:tracking-widest  md:mt-2">
                {" "}
                Bost Unviversity
              </span>
            </div>
            <div className="md:mt-4 lg:mt-6 mt-6 border-2 border-amber-500 rounded-2xl px-2 py-3 md:px-2 md:py-2 lg:px-5 lg:py-5 hover:bg-sky-400">
              <span className="sm:text-2xl sm:font-extralight sm:tracking-widest">
                (Nove 2024-2025 Apr)
              </span>
              <h3
                className="sm:text-2xl sm:font-serif sm:tracking-widest
              md:text-3xl  md:mt-2"
              >
                {" "}
                Full Stack Web Developmant
              </h3>
              <span className="sm:text-2xl sm:font-extralight sm:tracking-widest  md:mt-2">
                In Jamal Tech
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
