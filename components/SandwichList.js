import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const sandwichUrl = process.env.NEXT_PUBLIC_SANDWICH_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function EntreeList() {
	const [sandwiches, setSandwiches] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(sandwichUrl, settings);
			const sandwiches = await res.json();
			setSandwiches(sandwiches.custom_items);
		};
		fetchData();
	}, [setSandwiches]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Sandwiches
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{sandwiches.map((sandwich) => (
						<li key={sandwich.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{sandwich.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{sandwich.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
