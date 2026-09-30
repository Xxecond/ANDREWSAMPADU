import Image from "next/image";

export default function Front() {
  return (
    <div
      id="home"
      className="h-screen overflow-hidden bg-blue-100 text-center flex flex-col"
    >
      <div className="h-5/6 xl:h-screen w-full flex flex-col justify-center">
        <main className="px-5 md:px-10 lg:px-15 xl:px-20 ">
          <section
            className="
              mx-auto w-[95%] lg:max-w-5/6
              flex items-center justify-between gap-4
              
              max-[500px]:h-[15rem]
              h-[20rem]
              md:h-[25rem]
              lg:h-[30rem]
              xl:h-[35rem]
            "
          >
            {/* Image */}
            <div className="relative w-[60%] h-full ">
              <Image
                src="/assets/him.jpg"
                alt="Andy-profile-pic"
                fill
                sizes="(max-width: 768px) 60vw, 40vw"
                className="rounded-4xl border-2 border-black object-fill shadow-2xl"
              />
            </div>

            {/* Welcome text */}
            <div className="  w-[40%] h-[5rem] text-center flex items-center flex justify-end">
              <h1
                className="
                  font-bold 
                  text-xl
                  scale-y-170
                  md: scale-y-200
                  sm:text-2xl
                  md:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                  animate-typeWriter
                "
              >
                WELCOME!!
              </h1>
            </div>
          </section>

          {/* Introduction + Resume */}
          <section
            className="
              mx-auto w-[95%] lg:max-w-5/6
              flex items-center justify-between gap-4
            "
          >
            <dl className="w-[60%] flex flex-col justify-center">
              <dt className="font-light text-sm sm:text-base md:text-lg">
                I'm Andrews
              </dt>

              <dd className="font-bold text-blue-800 text-sm sm:text-base md:text-lg">
                a web developer.
              </dd>
            </dl>

            <div className="w-[40%] flex items-center justify-end">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative block overflow-hidden
                  rounded-md border-2 border-blue-900
                  bg-white p-1
                  text-xs sm:text-sm md:text-base
                  font-medium text-blue-900
                  cursor-pointer
                  transition-all
                  animate-beat

                  before:absolute before:left-0 before:top-0
                  before:-z-10 before:h-full before:w-0
                  before:bg-blue-900
                  before:transition-all before:duration-500

                  hover:text-white
                  hover:before:w-full
                "
              >
                View Resume
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
