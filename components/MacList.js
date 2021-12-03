import { useEffect, useState } from 'react';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const macUrl = process.env.NEXT_PUBLIC_MAC_URL;
const settings = {
	headers: {
		Authorization: `Basic ${apiKey}`,
	},
};

export default function MacList() {
	const [macs, setMacs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(macUrl, settings);
			const macs = await res.json();
			setMacs(macs.custom_items);
		};
		fetchData();
	}, [setMacs]);

	return (
		<section className='p-4 bg-gray-800 rounded-lg shadow-2xl'>
			<details>
				<summary className='text-center text-2xl font-extrabold text-gray-100 underline'>
					Brew Pub Mac & Cheese
				</summary>
				<ul role='list' className='divide-y divide-gray-200 p-6'>
					{macs.map((mac) => (
						<li key={mac.id} className='py-4'>
							<details>
								<summary className='text-lg font-bold text-gray-200 leading-tight pb-2'>
									{mac.name}
								</summary>
								<p className='px-4 text-gray-300 font-light leading-relaxed'>
									{mac.description}
								</p>
							</details>
						</li>
					))}
				</ul>
			</details>
		</section>
	);
}
