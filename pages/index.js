import Image from "next/image";
import img1 from "../public/images/sovemasker.jpg";
import img2 from "../public/images/eric.jpg";
import img3 from "../public/images/theo.jpg";
import img4 from "../public/images/panneband.jpg";
import svg from "../public/images/needletreadgrey.png";
import svg2 from "../public/images/hjertestor.png";





export default function Home() {
  return (
    <main className={`flex min-h-screen items-center justify-center bg-red-200`}
    >
      <div>
        <h1 className="mt-10 text-4xl tracking-widest text-center text-gray-400">Her kommer snart Hjertetings nettbutikk</h1>
        <Image src={svg2} className="mx-auto mt-10"
        width={50}
        alt="stort hjerte illustrasjon" />

        <div className="grid items-center grid-cols-4 m-10 mt-4 justify-self-center">
          <Image src={img1} className='w-1/2 mt-6 border-4 border-white border-double'
                        width={435}
                        alt='Bilde av en bunke med sovemasker' />

          <Image src={img2} className="w-1/2 mt-6 border-4 border-white border-double" 
          width={435} 
          alt="Bilde av eric med kaningutt" />

          <Image src={img3} className="w-1/2 mt-6 border-4 border-white border-double" 
          width={435} 
          alt="Bilde av theo med pannebånd" />
          
          <Image src={img4} className="w-1/2 mt-6 border-4 border-white border-double" 
          width={435} 
          alt="Bilde av bunke med pannebånd" />

        </div>

        <Image src={svg} className='w-1/2 mx-auto mt-10'
                        width={435}
                        alt='svg naal og traad' />

          <h2 className="text-xl tracking-widest text-center text-gray-400">handlaga for deg...</h2>
      </div>

      
    </main>
  )
}
