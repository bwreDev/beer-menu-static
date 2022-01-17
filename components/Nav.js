const navigation = [
	{ name: 'Self Pour Taps', href: '/' },
	{ name: 'Food Menu', href: '/menu' },
];

export default function Nav() {
	return (
		<header className='bg-gray-800'>
			<nav
				className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
				aria-label='Top'>
				<div className='py-4 flex flex-wrap justify-center space-x-6'>
					{navigation.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className='text-base font-medium text-white hover:text-gray-200'>
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
