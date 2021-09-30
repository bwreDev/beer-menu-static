const taps = [
  {
    key: 26,
    brand: 'There Does Not Exist',
    type: 'Kolsch',
    name: 'Sowing the Sun (Limited Release)',
    location: 'San Luis Obispo, CA',
    abv: '5.0% | IBU - 15',
    imageUrl:
      'https://untappd.akamaized.net/site/brewery_logos/brewery-442868_a2f4e.jpeg',
  },
  {
    key: 25,
    brand: 'Barrelhouse Brewing Company',
    type: 'Blonde Ale',
    name: 'Strawberry Daze',
    location: 'Paso Robles, CA',
    abv: '5.0% | IBU - 10',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5547ae67e4b0b68214c99c69/1467402023817-Z4SXHSL9QYCJXKO5JO93/BHBC_Logo_Basic-white.png?format=1500w',
  },
  {
    key: 24,
    brand: 'Barrelhouse Brewing Company',
    type: 'Hard Seltzer',
    name: 'Tropical Teaki (Limited Release)',
    location: 'Paso Robles, CA',
    abv: '4.5% | IBU - 1',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5547ae67e4b0b68214c99c69/1467402023817-Z4SXHSL9QYCJXKO5JO93/BHBC_Logo_Basic-white.png?format=1500w',
  },
  {
    key: 23,
    brand: 'Topa Topa',
    type: 'Black Lager',
    name: 'Dozer Line (Limited Release)',
    location: 'Ventura, CA',
    abv: '4.6% | IBU - 27',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0278/5506/1057/products/TopaTopa_600x.png?v=1590632731',
  },
  {
    key: 22,
    brand: 'Liquid Gravity Brewing Company',
    type: 'Wheat Ale',
    name: 'Blackberry Wheat Ale (Limited Release)',
    location: 'San Luis Obispo, CA',
    abv: '5.7% | IBU - 20',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5d4cce8d082420000107efee/1612463004796-Y5S16QB8IZ7U2CEDVKRL/LG+LOGOS+green-06.png?format=1000w',
  },
  {
    key: 21,
    brand: 'There Does Not Exist & Firestone Walker (Collaboration)',
    type: 'Saison',
    name: 'Temporal Illusion (Limited Release)',
    location: 'San Luis Obispo, CA | Paso Robles, CA',
    abv: '6.2% | IBU - 30',
    imageUrl:
      'https://untappd.akamaized.net/site/brewery_logos/brewery-442868_a2f4e.jpeg',
  },
  {
    key: 20,
    brand: 'Firestone Walker - Propagator',
    type: 'IPL - India Pale Lager',
    name: 'Welcome To L.A. (Limited Release)',
    location: 'Venice, CA',
    abv: '5.4% | IBU - 25',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FWBC_Logo.png/220px-FWBC_Logo.png',
  },
  {
    key: 19,
    brand: 'Delahunt',
    type: 'Pale Ale',
    name: 'Rolling Clouds',
    location: 'San Clemente, CA',
    abv: '5.5% | IBU - 26',
    imageUrl:
      'https://i1.wp.com/delahuntbrewing.com/wp-content/uploads/2019/10/DBC_Master_01_full_color.png?resize=768%2C431&ssl=1',
  },
  {
    key: 18,
    brand: 'There Does Not Exist',
    type: 'Hazy IPA',
    name: 'Hypersphere (Limited Release)',
    location: 'San Luis Obispo, CA',
    abv: '6.5% | IBU - 50',
    imageUrl:
      'https://untappd.akamaized.net/site/brewery_logos/brewery-442868_a2f4e.jpeg',
  },
  {
    key: 17,
    brand: 'Central Coast Brewing',
    type: 'Hazy IPA',
    name: 'Juice Box Hero (Limited Release)',
    location: 'San Luis Obispo, CA',
    abv: '7.0% | IBU - 50',
    imageUrl:
      'http://images.squarespace-cdn.com/content/v1/55b6c2d9e4b0e7b01e39f348/1451513448676-LO1GRWJL1BU9HJZO1A14/ccb_main_logo.png?format=1500w',
  },
  {
    key: 16,
    brand: 'MadeWest & Artifex (Collaboration)',
    type: 'Hazy IPA',
    name: 'Short Lived (Limited Release)',
    location: 'Ventura, CA | San Clemente, CA',
    abv: '7.0% | IBU - 55',
    imageUrl:
      'https://lh3.googleusercontent.com/4QuZy6NCuKCUwrWQMYrweFT7Bgv7k6rVIpCmVUQXxcE6IjCuaqodKNTe_lj-O_8qV3m4va14qgsQ2DDENq8LOnWoafRt=s150',
  },
  {
    key: 15,
    brand: 'Topa Topa',
    type: 'Hazy IPA',
    name: 'South Bound (Limited Release)',
    location: 'Ventura, CA',
    abv: '6.7% | IBU - 55',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0278/5506/1057/products/TopaTopa_600x.png?v=1590632731',
  },
  {
    key: 14,
    brand: 'Liquid Gravity & Casa Agria (Collaboration)',
    type: 'West Coast IPA',
    name: 'Grill Shot (Limited Release)',
    location: 'San Luis Obispo, CA | Oxnard, CA',
    abv: '6.8% | IBU - 50',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5d4cce8d082420000107efee/1612463004796-Y5S16QB8IZ7U2CEDVKRL/LG+LOGOS+green-06.png?format=1000w',
  },
  {
    key: 13,
    brand: 'Almanac & Ghost Town (Collaboration)',
    type: 'West Coast IPA',
    name: 'Haunting the Tower (Limited Release)',
    location: 'Alameda, CA | Oakland, CA',
    abv: '6.1% | IBU - 65',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0107/5692/files/ALMANAC_LOGO_SOLO_2015_527940b0-367e-491a-a747-159d83b8ee38_500x.png?v=1619813615',
  },
  {
    key: 12,
    brand: 'Ace',
    type: 'Hard Cider',
    name: 'Pineapple',
    location: 'Sebastopol, CA',
    abv: '5.0%',
    imageUrl:
      'https://lh3.googleusercontent.com/wYgxWUd5vD20gIW41nxwJvSBs5j0UGWGYqNMTrhQIvbx0nc36vCNq21Lg1aPrZPZkNOIIUdDGkRKk7uoDkReFi9ADi2sMTc=s750',
  },
  {
    key: 11,
    brand: 'Firestone Walker - Barrelworks',
    type: 'Sour / Wild Ale',
    name: 'Nec Bones (Limited Release)',
    location: 'Buellton, CA',
    abv: '5.7%',
    imageUrl:
      'https://untappd.akamaized.net/site/beer_logos/beer-1758716_b17a8_sm.jpeg',
  },
  {
    key: 10,
    brand: 'Elysian Brewing',
    type: 'Watermelon Gose Sour',
    name: 'Salt & Seed (Limited Release)',
    location: 'Seattle, WA',
    abv: '4.0% | IBU - 10',
    imageUrl:
      'https://i2.wp.com/schottdistributing.com/wp-content/uploads/2018/11/elysian-logo.png?resize=300%2C300&ssl=1',
  },
  {
    key: 9,
    brand: 'Belching Beaver',
    type: 'Nitro Stout',
    name: 'Peanut Butter Milk Stout',
    location: 'San Diego, CA',
    abv: '5.3% | IBU - 30',
    imageUrl:
      'https://static.spotapps.co/web/belchingbeaver--com/custom/logo_left.png',
  },
  {
    key: 8,
    brand: 'There Does Not Exist',
    type: 'Stout',
    name: 'Return to Earth',
    location: 'San Luis Obispo, CA',
    abv: '5.3% | IBU - 30',
    imageUrl:
      'https://untappd.akamaized.net/site/brewery_logos/brewery-442868_a2f4e.jpeg',
  },
  {
    key: 7,
    brand: 'Vina Robles',
    type: 'Chardonnay',
    name: 'Chardonnay 2019 Central Coast',
    location: 'Paso Robles, CA',
    abv: '14.5%',
    imageUrl:
      'https://pasoroblesdowntown.org/wp-content/uploads/VinaRobles.jpg',
  },
  {
    key: 6,
    brand: 'Tablas Creek',
    type: 'Rosé',
    name: 'Rosé 2020 Patelin de Tablas',
    location: 'Paso Robles, CA',
    abv: '13.0%',
    imageUrl:
      'https://kazzit.com/media/cache/main_image/custom/domain_1/image_files/716_photo_113152.jpg',
  },
  {
    key: 5,
    brand: 'Brander Vineyard',
    type: 'Sauvignon Blanc',
    name: 'Sauvignon Blanc 2019 Estate',
    location: 'Santa Ynez, CA',
    abv: '13.0%',
    imageUrl:
      'https://www.brander.com/wp-content/uploads/2020/05/logo2.png',
  },
  {
    key: 4,
    brand: 'Sans Liege',
    type: 'GSM',
    name: 'The Offering 2016',
    location: 'Paso Robles, CA',
    abv: '15.4%',
    imageUrl: 'https://www.sansliege.com/assets/images/logo.png',
  },
  {
    key: 3,
    brand: 'Wonderwall',
    type: 'Pinot Noir',
    name: 'Pinot Noir 2018 Edna Valley',
    location: 'Paso Robles, CA',
    abv: '12.9%',
    imageUrl:
      'https://www.wine.com/product/images/w_767,c_fit,q_auto:good,fl_progressive/167600.jpg',
  },
  {
    key: 2,
    brand: 'Eberle Winery',
    type: 'Cabernet Sauvignon',
    name: 'Cabernet Sauvignon 2017 Vineyard Select',
    location: 'Paso Robles, CA',
    abv: '14.9%',
    imageUrl:
      'https://www.eberlewinery.com/images/eberle-winery-logo.png',
  },
  {
    key: 1,
    brand: 'Opolo',
    type: 'Zinfandel',
    name: 'Mountain Zinfandel Vintage 2017',
    location: 'Paso Robles, CA',
    abv: '13.0%',
    imageUrl:
      'https://opolo.com/wp-content/uploads/2018/06/opolo-logo-300.png',
  },
];

export default function TapList() {
  return (
    <div className='bg-gray-100 p-2'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Rotating Self-Serve Guest Taps
          </p>
          <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
            Self-serve by the ounce
          </p>
        </div>
      </div>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {taps.map((tap) => (
          <li
            key={tap.key}
            className='col-span-1 flex flex-col text-center bg-card-background bg-cover rounded-lg shadow divide-y divide-gray-200'>
            <div className='flex-1 flex flex-col p-8 bg-black bg-opacity-25'>
              <img
                className='flex-shrink-0 mx-auto'
                src={tap.imageUrl}
                alt={tap.brand}
              />
              <h3 className='mt-6 text-gray-200 bg-gray-800 bg-opacity-75 rounded-full text-lg font-medium'>
                {tap.brand}
              </h3>
              <dl className='mt-1 flex-grow flex flex-col justify-between'>
                <dt className='sr-only'>Brand</dt>
                <dd className='text-gray-200 bg-gray-800 bg-opacity-75 rounded-full'>
                  {tap.name}
                </dd>
                <dt className='sr-only'>Location</dt>
                <dd className='mt-3'>
                  <span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                    {tap.location}
                  </span>
                </dd>
                <dd className='mt-3'>
                  <span className='px-2 py-1 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full'>
                    {tap.type}
                  </span>
                </dd>
                <dd className='mt-3'>
                  <span className='px-2 py-1 text-red-800 text-xs font-medium bg-red-100 rounded-full'>
                    ABV - {tap.abv}
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
