import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
		<div className='font-inter overflow-x-hidden'>

			<Head>
				<title>DBA Technologies - IT Solution Provider</title>
				<link rel='icon' href='/dba-logo.ico' />
			</Head>

			<section className='flex-col '>

				<nav className='flex items-center justify-between px-20 py-5'>

					<div className='flex items-center justify-between'>

						<Image src='/dba-logo.png' alt='dba-logo' width={60} height={60}/>
						<h1 className='text-3xl font-semibold ml-3'>DBA Technologies</h1>
					</div>

					<div className='flex gap-14'>

						<Link href='#about'><span className='text-gray-500 hover:text-blue-500 text-xl cursor-pointer'>About</span></Link>
						<Link href='#products'><span className='text-gray-500 hover:text-blue-500 text-xl cursor-pointer'>Products</span></Link>
						<Link href='#contact'><span className='text-gray-500 hover:text-blue-500 text-xl cursor-pointer'>Contact</span></Link>
						<Link href=''><span className='text-gray-500 hover:text-blue-500 text-xl cursor-pointer'>Blog</span></Link>
						
					</div>

				</nav>


				<div className='flex flex-row w-screen'>

					<div className='h-200 w-1/2 mt-8 ml-14 flex flex-col'>

						<h1 className='text-6xl font-black p-10'>GET YOUR TECH PROBLEMS SOLVED</h1>
						<p className='w-50 p-10 -mt-10'>DBA TECHNOLOGIES has been providing several IT Solutions to educational institutions, organisations and businesses since 20 years.</p>
						<div className='ml-10 flex gap-10'>
							<button className='bg-sky-600 px-3 py-2 w-fit font-semibold text-lg rounded-md text-white'>Contact Us</button>
							<button className='bg-sky-600 px-3 py-2 w-fit font-semibold text-lg rounded-md text-white'>Submit Enquiry</button>
						</div>

					</div>

					<span className='ml-20'>

						<Image src='/1.png' alt='illustration' width={500} height={500}/>

					</span>

				</div>

			</section>



			<section id='about' className='h-screen w-full bg-black'>

			</section>



			<section id='products' className='h-screen w-full bg-slate-300'>

			</section>



			<section id='contact' className='h-screen w-full bg-cyan-200'>

			</section>



		</div>

  );
}
