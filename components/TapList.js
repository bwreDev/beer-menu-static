import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const url = `https://business.untappd.com/api/v1/sections/669648/items`;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function TapList() {
	const [taps, setTaps] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url, settings);
			const taps = await res.json();
			setTaps(taps.items);
		};
		fetchData();
	}, [setTaps]);

	return (
		<div className='bg-gray-100 p-4'>
			<div className='max-w-7xl mx-auto py-8 px-6 sm:py-16 sm:px-8 lg:px-10'>
				<div className='text-center'>
					<h1 className='mt-1 text-2xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-6xl'>
						Rotating Self-Serve Guest Taps
					</h1>
					<p className='max-w-xl mt-5 mx-auto text-lg text-gray-600'>
						Self-serve by the ounce
					</p>
				</div>
			</div>
			<ul
				role='list'
				className='grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
				{taps.map((tap) => (
					<li
						key={tap.id}
						className='col-span-1 flex flex-col text-center bg-card-background bg-cover rounded-lg shadow-lg divide-y divide-gray-200'>
						<div className='flex-1 flex flex-col p-8 rounded-lg bg-black bg-opacity-25'>
							<img
								className='max-h-28 md:max-h-32 lg:max-h-36 flex-shrink-0 mx-auto'
								src={tap.label_image_hd}
								alt={tap.brewery}
							/>
							<h3 className='mt-6 p-1 text-gray-200 bg-gray-800 bg-opacity-90 border-2 border-gray-200 rounded-md text-md md:text-lg font-medium'>
								{tap.brewery}
							</h3>
							<dl className='mt-2 flex-grow flex flex-col justify-between'>
								<dt className='sr-only'>Brand</dt>
								<dd className='text-gray-200 bg-gray-800 bg-opacity-90 rounded-md border-2 border-gray-200'>
									{tap.name}
								</dd>
								<dt className='sr-only'>Location</dt>
								<dd className='mt-3'>
									<p className='px-2 py-1 text-green-900 text-xs font-medium bg-green-100 rounded-md border border-green-900'>
										{tap.brewery_location}
									</p>
								</dd>
								<dd className='mt-3'>
									<p className='px-2 py-1 text-yellow-900 text-xs font-medium bg-yellow-100 rounded-md border border-yellow-900'>
										{tap.style}
									</p>
								</dd>
								<dd className='mt-3'>
									<p className='px-2 py-1 text-red-900 text-xs font-medium bg-red-100 rounded-md border border-red-900'>
										ABV - {tap.abv} | IBU - {tap.ibu}
									</p>
								</dd>
							</dl>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
