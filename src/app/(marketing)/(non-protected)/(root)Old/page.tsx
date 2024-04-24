import { Metadata } from 'next'

import HomeView from '@/views/HomeView'

export const metadata: Metadata = {
  title: 'contentQL',
  description: 'Create Your Website Easily. Go Code-Free.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'contentQL',
    description: 'Create Your Website Easily. Go Code-Free.',
    url: 'https://contentql.com',
    images: '/images/dashboard-09.png',
  },
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_SERVER_URL}`),
}

const Home = () => {
  return <HomeView />
}

export default Home
