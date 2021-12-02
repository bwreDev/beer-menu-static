import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const appsUrl = process.env.NEXT_PUBLIC_APPS_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

//todo: add error handling and loading
//todo: add fetching of food data

export default function FoodList() {
	const [apps, setApps] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(appsUrl, settings);
			const apps = await res.json();
			setApps(apps.custom_items);
		};
		fetchData();
	}, [setApps]);

	return (
		<main className='bg-gray-900 grid grid-cols-1 md:grid-cols-2 pt-16'>
			<section className='p-2'>
				<h2 className='text-center text-3xl font-extrabold text-gray-100'>
					Tappetizers
				</h2>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{apps.map((app) => (
						<li key={app.id} className='py-4'>
							<h3 className='text-xl font-bold text-gray-200 leading-tight pb-2'>
								{app.name}
							</h3>
							<p className='px-4 text-gray-300 font-light leading-relaxed'>
								{app.description}
							</p>
						</li>
					))}
				</ul>
			</section>
			{
				//todo: add a section for the remaining items
			}
			<section className='p-2'>
				<h2 className='text-center text-3xl font-extrabold text-gray-100'>
					Tappetizers
				</h2>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{apps.map((app) => (
						<li key={app.id} className='py-4'>
							<h3 className='text-xl font-bold text-gray-200 leading-tight pb-2'>
								{app.name}
							</h3>
							<p className='px-4 text-gray-300 font-light leading-relaxed'>
								{app.description}
							</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
