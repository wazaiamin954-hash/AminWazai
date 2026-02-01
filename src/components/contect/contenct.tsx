import ContactForm from "../cont/conForm";

export function ContenctPage() {
  return (
    <div className="max-w-7xl mx-auto mt-23">
      <section className="bg-neutral-900 dark:bg-amber-100  text-white py-10 md:px-7 px-2 ">
        <h2 className="text-2xl md:text-center font-serif mb-7 md:mb-0">
          <i>Contact </i>{" "}
        </h2>
        <div className=" md:flex  w-full md:justify-between   md:mt-19">
          <div className="hidden md:flex w-1/2 pl-10 items-center mb-20 mr-30">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold  dark:text-neutral-900 ">
                Get in Touch
              </h2>

              <p
                className="text-2xl leading-relaxed text-neutral-200
             dark:text-neutral-800"
              >
                Ready to build something great? Feel free to reach out to us
                anytime. We’re here to answer your questions and help bring your
                ideas to life.
              </p>

              <p className="text-lg  dark:text-neutral-800">
                <span className="text-3xl -ml-3 dark:text-neutral-800">⏱</span>
                Typically responds within 24 hours
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
