import Image from "next/image";
import img1 from "../public/images/sovemasker.jpg";
import img2 from "../public/images/eric.jpg";



export default function Home() {
  return (
    <main className={`flex min-h-screen items-center justify-center bg-red-100`}
    >
      <div>
        <h1 className="ml-10 text-5xl tracking-widest text-gray-400">Her kommer snart Hjertetings nettbutikk</h1>
        <div className="grid grid-cols-3 ml-10">
          <Image src={img1} className='w-1/2 mt-10 border-2'
                        width={435}
                        alt='Bilde av en bunke med sovemasker' />

          <Image src={img2} className="w-1/2 mt-10 border-2" 
          width={435} 
          alt="Bilde av eric med kaningutt" />
        </div>

          <h2 className="mt-10 ml-10 tracking-widest text-gray-400">handlaga for deg...</h2>
      </div>

      
    </main>
  )
}
