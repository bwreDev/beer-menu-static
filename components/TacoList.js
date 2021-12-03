import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const tacoUrl = process.env.NEXT_PUBLIC_TACOS_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function TacoList() {
	const [tacos, setTacos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(tacoUrl, settings);
			const tacos = await res.json();
			setTacos(tacos.custom_items);
		};
		fetchData();
	}, [setTacos]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Blast 825 Tacos
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{tacos.map((taco) => (
						<li key={taco.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{taco.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{taco.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
