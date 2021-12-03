import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const kidsUrl = process.env.NEXT_PUBLIC_KIDS_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function KidsList() {
	const [kids, setKids] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(kidsUrl, settings);
			const kids = await res.json();
			setKids(kids.custom_items);
		};
		fetchData();
	}, [setKids]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Kids Menu
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{kids.map((kid) => (
						<li key={kid.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{kid.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{kid.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
