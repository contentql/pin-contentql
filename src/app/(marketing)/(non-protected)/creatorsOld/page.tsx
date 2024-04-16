import { Metadata } from 'next'

import CreatorsView from '@/views/CreatorsView'

export const metadata: Metadata = {
  title: 'creators',
  description: 'The growth accelerator for your startup',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'creators',
    description: 'The growth accelerator for your startup',
    url: 'https://contentql.com/creators',
    images: '/images/img-18.png',
  },
}

const Home = () => {
  return <CreatorsView />
}

export default Home
