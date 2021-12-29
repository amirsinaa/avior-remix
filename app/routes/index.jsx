import { Links, Meta, Link } from 'remix'
import homePageStyles from '../styles/home.css'
import profilePicture from '../../public/profile-pictures/motahareh-colorful.png'

export const meta = () => {
	return {
		title: 'Avior',
		description: 'Avior Design',
	}
}

export const links = () => {
	return [{ rel: 'stylesheet', href: homePageStyles }]
}

export default function Index() {
	return (
		<main>
			<section className='lg:h-screen lg:justify-center lg:content-center text-gray-600 body-font container mx-auto flex px-5 py-14 items-center flex-col'>
				<h1 className='text-5xl sm:text-6xl md:text7xl mb-4 font-large text-gray-900'>
					Hi, i'am <b className='text-shirt-purple'>Avior</b>
				</h1>
				<img
					className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 px-2 object-cover object-center rounded-3xl'
					alt='avior'
					src={profilePicture}
				/>
				<h3 className='text-3xl mt-1 mb-4'>
					An <b className='text-skin-tone'>artist</b> from Tehran, Iran
				</h3>
				<div className='text-center lg:w-2/3 w-full'>
					<div className='flex justify-center'>
						<Link
							to='about'
							className='font-bold my-3 mx-2 md:px-10 w-5/6 py-4 text-sm border-2 border-lips-pink text-lips-pink rounded-md shadow-sm hover:-translate-y-1 hover:text-white hover:scale-100 hover:bg-lips-pink ease-in-out delay-0 duration-300'>
							More About me
						</Link>
						<Link
							to='Works'
							className='font-bold my-3 mx-2 md:px-10 w-5/6 py-4 text-sm border-2 border-eye-brown text-eye-brown rounded-md shadow-sm hover:-translate-y-1 hover:text-white hover:scale-100 hover:bg-eye-brown ease-in-out delay-0 duration-300'>
							My Works
						</Link>
					</div>
				</div>
			</section>
		</main>
	)
}
