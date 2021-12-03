import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const subsUrl = process.env.NEXT_PUBLIC_SUBS_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function SubsList() {
	const [subs, setSubs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(subsUrl, settings);
			const subs = await res.json();
			setSubs(subs.custom_items);
		};
		fetchData();
	}, [setSubs]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Wood Fired Subs
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{subs.map((sub) => (
						<li key={sub.id} className='py-4'>
							<details>
								<summary className='text-xl font-bold text-gray-200 leading-tight pb-2'>
									{sub.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{sub.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
