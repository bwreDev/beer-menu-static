import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const appsUrl = process.env.NEXT_PUBLIC_APPS_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function AppList() {
	const [apps, setApps] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const appsRes = await fetch(appsUrl, settings);
			const apps = await appsRes.json();
			setApps(apps.custom_items);
		};
		fetchData();
	}, [setApps]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Tappetizers
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{apps.map((app) => (
						<li key={app.id} className='py-4'>
							<details>
								<summary className='text-lg font-bold text-gray-200 leading-tight pb-2'>
									{app.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{app.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
