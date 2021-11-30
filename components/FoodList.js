import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const appsUrl = `https://business.untappd.com/api/v1/custom_sections/175523/custom_items`;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function FoodList() {
	const [apps, setApps] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(appsUrl, settings);
			const apps = await res.json();
			console.log(apps);
			setApps(apps);
		};
		fetchData();
	}, [setApps]);

	return (
		<div className='bg-gray-100 p-2'>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
						Rotating Self-Serve Guest Taps
					</p>
					<p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
						Self-serve by the ounce
					</p>
				</div>
			</div>
			<ul
				role='list'
				className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{apps.map((app) => (
					<li
						key={app.id}
						className='col-span-1 flex flex-col text-center bg-card-background bg-cover rounded-lg shadow-lg divide-y divide-gray-200'>
						<div className='flex-1 flex flex-col p-8 bg-black bg-opacity-25'>
							<h3 className='mt-6 text-gray-200 bg-gray-800 bg-opacity-75 rounded-full text-lg font-medium'>
								{}
							</h3>
							<dl className='mt-1 flex-grow flex flex-col justify-between'>
								<dt className='sr-only'>Brand</dt>
								<dd className='text-gray-200 bg-gray-800 bg-opacity-75 rounded-full'>
									{app.name}
								</dd>
								<dt className='sr-only'>Location</dt>
								<dd className='mt-3'>
									<span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
										{}
									</span>
								</dd>
								<dd className='mt-3'>
									<span className='px-2 py-1 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full'>
										{}
									</span>
								</dd>
								<dd className='mt-3'>
									<span className='px-2 py-1 text-red-800 text-xs font-medium bg-red-100 rounded-full'>
										ABV - {} | IBU - {}
									</span>
								</dd>
							</dl>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
