import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (

		<div className='font-inter overflow-x-hidden smooth-scroll'>

			<Head>
				<title>DBA Technologies - IT Solution Provider</title>
				<link rel='icon' href='/dba-logo.ico' />
			</Head>

			<section className='flex-col h-screen'>

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


				<div className='flex flex-row w-screen mt-2'>

					<div className='h-200 w-1/2 mt-8 ml-14 flex flex-col'>

						<h1 className='text-6xl font-extrabold p-10'>GET YOUR TECH PROBLEMS SOLVED</h1>
						<p className='w-50 p-10 -mt-10'>DBA TECHNOLOGIES has been providing several IT Solutions to educational institutions, organisations and businesses since 20 years.</p>
						<div className='ml-10 flex gap-10'>
							<a href='#contact' className='px-3 py-2 w-fit font-semibold text-lg rounded-md border-2 border-cyan-500 text-cyan-500 hover:bg-sky-600 hover:text-white '>Contact Us</a>
							<a className='px-3 py-2 w-fit font-semibold text-lg rounded-md border-2 border-cyan-500 text-cyan-500 hover:bg-sky-600 hover:text-white '>Submit Enquiry</a>
						</div>

					</div>

					<span className='ml-20'>

						<Image src='/1.png' alt='illustration' width={500} height={500}/>

					</span>

				</div>

			</section>



			<section id='about' className='h-screen w-full bg-zinc-100'>

                <h1 className='text-4xl font-bold flex justify-center px-10 pt-8 pb-8'>About</h1>

				<div className='mt-5 flex flex-col gap-6 px-32'>

					<p>DBA Technologies is a IT Solution Provider, started in 2000 by Mr. Prasad JVD who has national and international exposure in IT Solutions.</p>
					<p>We started as a service oriented organization and within no time got recognized as an one stop IT Solution Provider. Our head office is located in a prime locality in Vijayawada and three other branch offices at Visakhapatnam, Vizianagaram and Srikakulam. We have a team of more than 30 individuals who are well trained, certified and experienced service team apart from sales team.</p>
					<p>We focus more on services and are authorized service provider for Epson, D-Link, Acer brands from the past 10 years. Besides, we supply IT hardware and software solutions to Government Organizations, Educational Institutes, PSU, SMB & Private customers and can proudly say that we are the single point of contact for all their IT requirements.</p>
					<p>Our products include desktops, laptops, servers, workstations, printers, peripherals, networking, campus wifi solutions, large format displays, projectors, LED screens, digital classroom solutions, video conference solutions, security & surveillance solutions,  digital signage solutions, biometric devices, barcode solutions, thin client labs, software solutions, mailing solutions, datacenter solutions and power solutions from all the reputed brands like Dell, Acer, Epson , Lenovo, HP,  Intel, HCL, Canon, Brother, TVSE POS, D-link, Cisco, VMware, Nvidia, Polycom, Panasonic, Samsung, Sonicwall, Mantra, Morphos, APC, EATON, Numeric, Adobe, Microsoft, Symantec, Autodesk, Tally, KDK software etc.</p>
					<p>DBA Technologies is also GeM registered and e-procurement registered partner with good rating which enable us to participate in Government tenders across India.</p>

				</div>
				
			</section>



			<section id='products' className='h-screen w-full'>

                <h1 className='text-4xl font-bold flex justify-center px-10 pt-8 pb-8'>Products</h1>
				
				<div className='flex justify-center flex-wrap px-10 gap-x-20 gap-y-12 scale-y-90'>

					<div className='flex flex-col text-center font-semibold'><Image src='/Desktop.png' alt='Desktop' width={180} height={180}/><span className='mt-5'>Desktops</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Laptop.png' alt='Laptop' width={180} height={180}/><span className='mt-5'>Laptops</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Printer.png' alt='Printer' width={180} height={180}/><span className='mt-5'>Printers</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Projector.png' alt='Projector' width={180} height={180}/><span className='mt-5'>Projectors</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Scanner.png' alt='Scanner' width={180} height={180}/><span className='mt-5'>Scanners</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Server.png' alt='Server' width={180} height={180}/><span className='mt-5'>Servers</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Tab.png' alt='Tab' width={180} height={180}/><span className='mt-5'>Tabs</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Networking.png' alt='Networking' width={180} height={180}/><span className='mt-5'>Networking</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Camera.png' alt='CCTV Camera' width={180} height={180}/><span className='mt-5'>CC Cameras</span></div>
					<div className='flex flex-col text-center font-semibold'><Image src='/Barcode.png' alt='Barcode Scanner' width={180} height={180}/><span className='mt-5'>Barcode Scanners</span></div>

				</div>

			</section>



			<section id='contact' className='h-screen w-full bg-black text-white flex'>

				<div className='h-screen py-16 pl-28 scale-95'>

					<h1 className='text-5xl font-semibold flex justify-start mb-10'>Contact Us</h1>

				    <div className='flex flex-col'>
						<span className='text-2xl font-bold leading-10'>Phone</span>
						<span className='text-stone-400 leading-8'>Vijayawada: <span className='font-semibold'>+91 9440159763</span></span>
						<span className='text-stone-400 leading-8'>Vizianagaram: +91 8374344644</span>
						<span className='text-stone-400 leading-8'>Visakhapatnam: +91 8374344688</span>
						<span className='text-stone-400 leading-8'>Srikakulam: +91 8374344677</span>
					</div>

				    <div className='flex flex-col py-10'>
						<span className='text-2xl font-bold leading-10'>Email</span>
						<span className='text-stone-400 leading-8'>support@dbatechnologies.in</span>
					</div>

				    <div className='flex flex-col'>
						<span className='text-2xl font-bold leading-10'>Head Office</span>
						<span className='text-stone-400 leading-8 w-96'>First Floor, 33-25-35/B, Vemula Syamala Devi St, Suryaraopeta, Kasturbai Peta, Vijayawada, AP</span>
					</div>

				</div>

					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.274809485573!2d80.63644857414545!3d16.51221828423333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab1403de667%3A0xbbcec64b5b7a5aab!2sDBA%20Technologies!5e0!3m2!1sen!2sin!4v1691740309330!5m2!1sen!2sin" className='w-3/5 h-4/3 p-20' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

			</section>


		</div>

  );
}
