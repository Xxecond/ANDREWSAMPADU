import Image from "next/image";

export default function Front() {
  return (
    <div
      id="home"
      className=" text-center min-h-screen bg-blue-100 flex flex-col overflow-hidden"
    >
      <main className="pt-20 px-5  md:px-15 xl:px-20">
        <section className="mx-auto flex gap-4 h-60 md:h-80 max-h-1/2 items-center w-[95%] lg:max-w-5/6 justify-between">
  <div className=" w-[60%] relative items-center h-full ">
    <Image
      src="/assets/him-2.JPG"
      alt="Andy-profile-pic"
      fill
      className="absolute border-2 border-black shadow-2xl rounded-4xl"
    />
  </div>
  
  {/* Flex wrapper holds space while h1 animates its width internally */}
  <div className="w-[40%] flex justify-end">
    <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold animate-typeWriter">
      WELCOME!!
    </h1>
  </div>
</section>
        <section className="mx-auto flex gap-4 items-center  w-[95%] lg:max-w-5/6 justify-between">
          <dl className="flex flex-col justify-center w-1/2">
            <dt className="font-light md:text-lg ">i'm Andrews</dt>
            <dd className="text-blue-800 font-bold md:text-lg ">
              a web developer.
            </dd>
          </dl>
          <div
            className="flex items-center justify-end 
           w-1/2 h-full "
          >
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="  p-1 text-sm md:text-base font-medium block 
        overflow-hidden border-2 border-blue-900 before:absolute before:left-0
         before:top-0 before:h-full before:w-0 before:bg-blue-900 before:z-[-1] before:transition-all
          before:duration-500 hover:before:w-full text-blue-900 hover:text-white rounded-md cursor-pointer  
             bg-white transition-all animate-beat "
            >
              View Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
