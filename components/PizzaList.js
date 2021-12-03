import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const pizzaUrl = process.env.NEXT_PUBLIC_PIZZA_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function PizzaList() {
	const [pizzas, setPizzas] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(pizzaUrl, settings);
			const pizzas = await res.json();
			setPizzas(pizzas.custom_items);
		};
		fetchData();
	}, [setPizzas]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Artisan Pizzas
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{pizzas.map((pizza) => (
						<li key={pizza.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{pizza.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{pizza.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
