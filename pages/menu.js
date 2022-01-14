import Nav from '../components/Nav';

export default function Menu() {
	return (
		<div className='bg-gray-900'>
			<Nav />
			<iframe
				src='https://business.untappd.com/embeds/iframes/37525/145629'
				frameBorder='0'
				height='2000'
				width='100%'></iframe>
		</div>
	);
}
