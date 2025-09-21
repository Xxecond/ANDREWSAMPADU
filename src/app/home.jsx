
import Image from "next/image";

export default function Front (){
  return (
    <section  className="text-center min-h-dvh bg-blue-100 flex flex-col ">
        <div id="home" className="mt-30  flex h-60 md:h-80 xl:h-100 items-center w-full justify-around">
          <div className="flex flex-col items-center justify-around
           w-1/2 h-full relative ">
  <Image 
    src= "/assets/PIC.jpg" 
    alt="Andrews profile pic"
   width={400}
   height={400}
    className=" h-full object-fill border-2 border-blue-900 shadow-2xl rounded-4xl flex-shrink-0"
  />
  <dl className=" absolute -bottom-15  text-center pt-5 z-10">
  <dt className="font-light md:text-lg text-left ">i'm Andrews</dt>
      <dd className="text-blue-800 font-bold md:text-lg text-left ">a web developer.
      </dd>
          </dl> 
      
</div>
             <div className="relative flex flex-col items-center justify-center
           w-1/3 h-full ">
            <h1 className=" text-2xl md:text-4xl xl:text-6xl font-bold animate-typeWriter ">WELCOME!!</h1>
               <button className=" absolute mt-80  p-1 text-sm md:text-base font-medium block 
        font-semibold overflow-hidden border-2 border-blue-900 before:absolute before:left-0
         before:top-0 before:h-full before:w-0 before:bg-blue-900 before:z-[-1] before:transition-all
          before:duration-500 hover:before:w-full text-blue-900 hover:text-white rounded-md cursor-pointer  
             bg-white transition-all animate-beat "><a href="/public/Cv.pf" target="_blank">View Resume</a>
             </button>
             </div>
        </div> 
    </section>
  )
}

