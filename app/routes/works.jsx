import { Links, Meta, Link } from 'remix'
import animationStyles from '../styles/animation.css'
import ArtWorkNumberOne from '../../public/works/1.jpg'
import ArtWorkNumberTwo from '../../public/works/2.jpg'
import ArtWorkNumberThree from '../../public/works/3.jpg'
import ArtWorkNumberFour from '../../public/works/4.jpg'
import ArtWorkNumberFive from '../../public/works/5.jpg'
import ArtWorkNumberSix from '../../public/works/6.jpg'
import ArtWorkNumberSeven from '../../public/works/7.png'
import ArtWorkNumberEight from '../../public/works/8.jpg'

export const meta = () => {
	return {
		title: 'Avior - Works',
		description: 'Some of Avior works',
	}
}

export const links = () => {
	return [{ rel: 'stylesheet', href: animationStyles }]
}

export default function Works() {
	return (
		<main>
			<section className='lg:justify-center lg:content-center text-gray-600 body-font container mx-auto flex px-0 py-14 items-center flex-col'>
				<section className='container mx-auto p-10 md:p-20 grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-y-10 transform duration-500'>
					<article className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer object-cover object-center'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto hover:scale-110 hover:rotate-3 duration-200'
								style={{minHeight: '512px'}}
								src={ArtWorkNumberOne}
								alt='ArtWorkNumberOne'
							/>
						</div>
					</article>
					<article className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer object-cover object-center'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto hover:scale-110 hover:rotate-3 duration-200'
								src={ArtWorkNumberTwo}
								alt='ArtWorkNumberTwo'
							/>
						</div>
					</article>
					<article
						className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer object-cover object-center'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto hover:scale-110 hover:rotate-3 duration-200'
								src={ArtWorkNumberThree}
								alt='ArtWorkNumberThree'
							/>
						</div>
					</article>
					<article
						className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer object-cover object-center'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto hover:scale-110 hover:rotate-3 duration-200'
								src={ArtWorkNumberFour}
								alt='ArtWorkNumberFour'
							/>
						</div>
					</article>
					<article
						className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer object-cover object-center'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto hover:scale-110 hover:rotate-3 duration-200'
								src={ArtWorkNumberFive}
								alt='ArtWorkNumberFive'
							/>
						</div>
					</article>
					<article
						className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer object-cover object-center'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto hover:scale-110 hover:rotate-3 duration-200'
								src={ArtWorkNumberSix}
								alt='ArtWorkNumberSix'
							/>
						</div>
					</article>
					<article
						className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer object-cover object-center'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto hover:scale-110 hover:rotate-3 duration-200'
								src={ArtWorkNumberSeven}
								alt='ArtWorkNumberSeven'
							/>
						</div>
					</article>
					<article
						className='shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer object-cover object-center'>
						<div className='max-h-140 overflow-hidden'>
							<img
								className='w-full h-auto hover:scale-110 hover:rotate-3 duration-200'
								src={ArtWorkNumberEight}
								alt='ArtWorkNumberEight'
							/>
						</div>
					</article>
				</section>
				<div className='text-center my-4 lg:w-2/3 w-full'>
					<div className='flex justify-center'>
						<Link
							to='/'
							className='font-bold my-3 mx-2 md:px-10 w-5/6 py-4 text-sm border-2 border-lips-pink text-lips-pink rounded-md shadow-sm hover:-translate-y-1 hover:text-white hover:scale-100 hover:bg-lips-pink ease-in-out delay-0 duration-300'>
							Back to home
						</Link>
						<Link
							to='/about'
							className='font-bold my-3 mx-2 md:px-10 w-5/6 py-4 text-sm border-2 border-eye-brown text-eye-brown rounded-md shadow-sm hover:-translate-y-1 hover:text-white hover:scale-100 hover:bg-eye-brown ease-in-out delay-0 duration-300'>
							More About me
						</Link>
					</div>
				</div>
			</section>
		</main>
	)
}
