export default function Banner() {
	return (
		<div className='relative bg-red-700'>
			<div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
				<div className='pr-16 sm:text-center sm:px-16'>
					<p className='font-medium text-red-100'>
						<span className='md:hidden'>
							We are verified on Untappd!
						</span>
						<span className='hidden md:inline'>
							Big news! We're excited to announce that we are now
							verified on Untappd!
						</span>
						<span className='block sm:ml-2 sm:inline-block'>
							<a
								href='https://untappd.com/v/blast-825-brewery/8378047'
								target='_blank'
								rel='noopener noreferrer'
								className='text-red-100 font-bold underline'>
								{' '}
								Check us out <span aria-hidden='true'>&rarr;</span>
							</a>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
