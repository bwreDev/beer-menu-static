import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const burgerUrl = process.env.NEXT_PUBLIC_BURGER_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function BurgerList() {
	const [burgers, setBurgers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(burgerUrl, settings);
			const burgers = await res.json();
			setBurgers(burgers.custom_items);
		};
		fetchData();
	}, [setBurgers]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Blast Burgers
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{burgers.map((burger) => (
						<li key={burger.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{burger.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{burger.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
