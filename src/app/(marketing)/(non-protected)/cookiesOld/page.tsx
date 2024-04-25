import { Metadata } from 'next'

import CookiesView from '@/views/CookiesView'

export const metadata: Metadata = {
  title: 'cookies',
  description: 'Cookies Policy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'cookies',
    description: 'Cookies Policy',
    url: 'https://contentql.com/cookies',
    images: '/images/favicon.png',
  },
}

const Home = () => {
  return <CookiesView />
}

export default Home
