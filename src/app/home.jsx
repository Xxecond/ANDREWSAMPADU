import Pic from "./assets/PIC.jpg";
import Image from "next/image";

export default function Front (){
  return (
    <section className="text-center min-h-dvh bg-green-300 flex flex-col ">
        <div className="mt-20 flex h-60 md:h-80 xl:h-100 items-center w-full justify-around">
          <Image src={Pic} alt="Andrews profile pic" 
          className="object-fill w-1/2 h-full border-2 border-black rounded-4xl"  />
            <h1 className=" text-2xl md:text-4xl xl:text-6xl w-1/2 font-bold animate-typeWriter">WELCOME!!</h1>
        </div>
        <dl className="relative h-max text-left  mx-10 pl-8 md:pl-30 lg:pl-60 xl:pl-90">
          <dt className="font-light md:text-lg">i'm Andrews,</dt>
          <dd className="text-blue-800 font-bold md:text-lg ">a web developer.
            <button className="absolute right-0 md:right-10 lg:right-20 xl:right-25 top-3
            p-1 text-sm md:text-base font-medium block font-semibold overflow-hidden
             border-2 border-blue-900 before:absolute before:left-0 before:top-0 before:h-full
             before:w-0 before:bg-blue-900 before:z-[-1] before:transition-all before:duration-500
             hover:before:w-full text-blue-900 hover:text-white rounded-md cursor-pointer  
             bg-white transition-all animate-beat "><a href="/public/Cv.pf" target="_blank">View Resume</a></button>
      </dd>
          </dl> 
    </section>
  )
}

