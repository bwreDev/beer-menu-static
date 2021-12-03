import Head from 'next/head';
import AppList from '../components/AppList';
import BurgerList from '../components/BurgerList';
import DessertList from '../components/DessertList';
import EntreeList from '../components/EntreeList';
import KidsList from '../components/KidsList';
import MacList from '../components/MacList';
import PizzaList from '../components/PizzaList';
import SaladList from '../components/SaladList';
import SandwichList from '../components/SandwichList';
import SubsList from '../components/SubsList';
import TacoList from '../components/TacoList';
import Copyright from '../components/Copyright';

export default function Home() {
	return (
		<>
			<Head>
				<title>Blast 825 Orcutt | Food Menu</title>
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
			<h1 className='pt-16 text-center text-3xl font-bold text-gray-100 bg-gray-900'>
				Blast 825 Brewery | Food Menu
			</h1>
			<main className='bg-gray-900 grid grid-cols-1 gap-2 py-16 px-6'>
				<AppList />
				<EntreeList />
				<SandwichList />
				<MacList />
				<SubsList />
				<TacoList />
				<SaladList />
				<BurgerList />
				<PizzaList />
				<KidsList />
				<DessertList />
			</main>
			<Copyright />
		</>
	);
}
