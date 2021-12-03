import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const entreesUrl = process.env.NEXT_PUBLIC_ENTREES_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function EntreeList() {
	const [entrees, setEntrees] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(entreesUrl, settings);
			const entrees = await res.json();
			setEntrees(entrees.custom_items);
		};
		fetchData();
	}, [setEntrees]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Entrees
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{entrees.map((entree) => (
						<li key={entree.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{entree.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{entree.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
