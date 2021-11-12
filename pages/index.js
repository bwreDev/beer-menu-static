import Copyright from '../components/Copyright';
import TapList from '../components/TapList';
import Head from 'next/head';
import Banner from '../components/Banner';

export default function Home({ taps }) {
	return (
		<>
			<Head>
				<title>Blast 825 Orcutt | Self-Pour Taps</title>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<Banner />
			<TapList taps={taps} />
			<Copyright />
		</>
	);
}

export async function getServerSideProps() {
	const apiKey = process.env.NEXT_PUBLIC_API_KEY;
	const settings = {
		headers: {
			Authorization: `Basic ${apiKey}`,
		},
	};
	const res = await fetch(
		`https://business.untappd.com/api/v1/sections/669648/items`,
		settings
	);
	const taps = await res.json();

	return {
		props: {
			taps,
		},
	};
}
