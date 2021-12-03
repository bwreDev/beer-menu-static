import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const dessertUrl = process.env.NEXT_PUBLIC_DESSERT_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function DessertList() {
	const [desserts, setDesserts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(dessertUrl, settings);
			const desserts = await res.json();
			setDesserts(desserts.custom_items);
		};
		fetchData();
	}, [setDesserts]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Desserts
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{desserts.map((dessert) => (
						<li key={dessert.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{dessert.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{dessert.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
