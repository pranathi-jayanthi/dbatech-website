import Head from 'next/head';
import Image from 'next/image';

export default function Blog() {
  return (
    <div className="pt-10 overflow-x-hidden">
      
      <Head>
        <title>Blog - DBA Technologies</title>
      </Head>
      
      <div className='w-screen flex flex-col items-center'>

        <h1 className="text-4xl font-bold mb-4 p-6 text-center h-18">DBA TECHNOLOGIES BLOG</h1>

            <h3 className="w-screen text-xl font-bold mb-2 p-2 my-6 bg-red-300 text-center h-18">Lenovo Tabs Limited Offer!</h3>

        <div className="mb-4 p-10">

         <Image src="/pamplet.jpg" alt="Description of Image" width={500} height={700}/>

       </div>  

      </div>

    </div>
  );
}
