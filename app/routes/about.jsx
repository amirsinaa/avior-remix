import { Links, Meta, Link } from 'remix'
import aboutStyles from '../styles/about.css'
import AviorPicture from '../../public/profile-pictures/motahareh-grayscale'

export const meta = () => {
	return {
		title: 'Avior - About me',
		description: 'About Avior',
	}
}

export const links = () => {
	return [{ rel: 'stylesheet', href: aboutStyles }]
}

export default function About() {
	return (
		<main>
			<div className='flex flex-wrap md items-center'>
				<div className='w-full xl:w-7/12 h-screen order-2 xl:order-1 about-me-text-content-wrapper'>
					<div className='container mx-auto px-4 xl:px-28'>
						<h1 className='text-6xl font-bold mt-16'>
							A bit more About <b className='text-shirt-purple'>Avior</b>
						</h1>
						<div className='flex mt-16 font-light text-gray-500'>
							<div className='pr-4'>
								<span className='uppercase'>Country</span>
								<p className='text-2xl text-gray-900 font-semibold pt-2'>
									Iran
								</p>
							</div>
							<div className='pr-4'>
								<span className='uppercase'>City</span>
								<p className='text-2xl text-gray-900 font-semibold pt-2'>
									Tehran
								</p>
							</div>
						</div>

						<div className='description w-full text-justify mt-7 text-gray-500 text-lg'>
							I am Motahare Haj Hadi, with the artistic name of Avior I have
							always been critical and disgusted with a world without
							flexibility and change since I was a child; This led me to a path
							in life where I could design the world around me to my liking and
							based on endless nature, so I moved away from chemistry to fashion
							illustration and clothing design. Non-repetition and creating the
							deepest variations have always been my motto. I use this slogan
							and belief in my design to bring satisfactory and frameless
							results.
						</div>
						<section className='text-center w-full'>
							<section className='flex justify-center'>
								<Link
									to='/'
									className='font-bold my-3 mx-2 md:px-10 w-5/6 py-4 text-sm border-2 border-lips-pink text-lips-pink rounded-md shadow-sm hover:-translate-y-1 hover:text-white hover:scale-100 hover:bg-lips-pink ease-in-out delay-0 duration-300'>
									Back to Home
								</Link>
								<Link
									to='/works'
									className='font-bold my-3 mx-2 md:px-10 w-5/6 py-4 text-sm border-2 border-eye-brown text-eye-brown rounded-md shadow-sm hover:-translate-y-1 hover:text-white hover:scale-100 hover:bg-eye-brown ease-in-out delay-0 duration-300'>
									My Works
								</Link>
							</section>
							<section className='flex justify-center mt-3'>
								<div className='h-20 w-20 relative cursor-pointer mb-5 mx-3'>
									<div
										style={{
											background:
												'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
										}}
										className='absolute inset-0 opacity-25 rounded-lg'></div>
									<div className='absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300'>
										<a
											href='https://www.instagram.com/its.avior/'
											target='_blank'>
											<div
												style={{
													background:
														'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
												}}
												className='h-full w-full rounded-lg'>
												<svg
													style={{
														transform: 'scale(0.6)',
														bottom: '0.3em',
														position: 'relative',
													}}
													className='svg-inline--fa fa-instagram fa-w-14'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 448 512'>
													<path
														fill='#fff'
														d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
												</svg>
											</div>
										</a>
									</div>
								</div>
								<div className='h-20 w-20 relative cursor-pointer mb-5 mx-3'>
									<div className='absolute inset-0 bg-black opacity-25 rounded-lg'></div>
									<div className='absolute inset-0 transform hover:rotate-90 hover:scale-75 transition duration-300'>
										<a href='mailto:aviorblackart@yahoo.com'>
											<div className='h-full w-full bg-black rounded-lg'>
												<svg
													style={{
														transform: 'scale(0.9)',
													}}
													viewBox='0 0 20 20'>
													<path
														fill='#fff'
														d='M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z'></path>
												</svg>
											</div>
										</a>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
				<div className='w-auto mx-auto flex items-center xl:my-0 mb-4 order-1 xl:w-5/12 xl:h-screen about-me-image-content-wrapper'>
					<img src={AviorPicture} className='lg:h-screen w-full' alt='' />
				</div>
			</div>
		</main>
	)
}
