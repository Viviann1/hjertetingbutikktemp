import Image from "next/image";
import img1 from "../public/images/sovemasker.jpg";
import img2 from "../public/images/eric.jpg";
import img3 from "../public/images/theo.jpg";
import img4 from "../public/images/panneband.jpg";
import needle from "../public/images/Needletreadgrey.png"
import svg2 from "../public/images/hjertestor.png";
import Head from "next/head";





export default function Home() {
  return (
    <>
    <Head>
      <title>Hjerteting</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name= "description"
      content="Hjerteting - håndlaget for deg. 
      Hjerteting er en nettbuikk med unike håndlagede produkter. Her finner du noe både til liten og stor. Utforsk kategoriene Småfolk, Bestevenner, Varm, Velvære og Pynt. Velkommen skal du være!"/>
      <meta 
      property="og:image"
      content="https://www.hjerteting.no/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsovemasker.7f24c615.jpg&w=640&q=75"
      />
    </Head>
    <main className={`flex min-h-screen items-center bg-red-100`}
    >
      <div>
        <h1 className="text-4xl leading-10 tracking-widest text-center text-gray-400 mt-14 lg:mt-9">Her kommer snart Hjertetings nettbutikk</h1>
        <Image src={svg2} className="mx-auto mt-8"
        width={50}
        alt="stort hjerte illustrasjon" />

        <div className="grid grid-cols-1 mt-3 place-items-center sm:grid-cols-2 lg:grid-cols-4">
          <Image src={img1} className='w-4/5 mt-6 border-4 border-white border-double lg:w-1/2'
                        width={435}
                        alt='Bilde av en bunke med sovemasker' />

          <Image src={img2} className="w-4/5 mt-6 border-4 border-white border-double lg:w-1/2" 
          width={435} 
          alt="Bilde av eric med kaningutt" />

          <Image src={img3} className="w-4/5 mt-6 border-4 border-white border-double lg:w-1/2" 
          width={435} 
          alt="Bilde av theo med pannebånd" />
          
          <Image src={img4} className="w-4/5 mt-6 border-4 border-white border-double lg:w-1/2" 
          width={435} 
          alt="Bilde av bunke med pannebånd" />

        </div>

        <Image src={needle} className='w-4/5 mx-auto mt-10 lg:w-1/2'
                        width={435}
                        alt='svg naal og traad' />

          <h2 className="mt-2 mb-10 text-xl tracking-widest text-center text-gray-400 md:text-xl lg:text-2xl lg:mb-0">handlaga for deg...</h2>
      </div>

      
    </main>
    </>
  )
}
