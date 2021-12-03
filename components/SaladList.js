import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const saladUrl = process.env.NEXT_PUBLIC_SALAD_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function SaladList() {
	const [salads, setSalads] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(saladUrl, settings);
			const salads = await res.json();
			setSalads(salads.custom_items);
		};
		fetchData();
	}, [setSalads]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Soups & Salads
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{salads.map((salad) => (
						<li key={salad.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{salad.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{salad.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
