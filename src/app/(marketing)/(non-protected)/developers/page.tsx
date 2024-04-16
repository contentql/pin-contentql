import { Metadata } from 'next'

import DevelopersView from '@/views/DevelopersView'

export const metadata: Metadata = {
  title: 'developers',
  description: 'The Complete Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'developers',
    description: 'The Complete Solutions',
    url: 'https://contentql.com/developers',
    images: '/images/img-11.png',
  },
}

const Home = () => {
  return <DevelopersView />
}

export default Home
