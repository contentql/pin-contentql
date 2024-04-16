import { Metadata } from 'next'

import MarketPlaceView from '@/views/MarketPlaceView'

export const metadata: Metadata = {
  title: 'marketplace',
  description: 'Generate more leads with social media marketing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'marketplace',
    description: 'Generate more leads with social media marketing',
    url: 'https://contentql.com/market-place',
    images: '/images/dashboard-03.png',
  },
}

const Home = () => {
  return <MarketPlaceView />
}

export default Home
