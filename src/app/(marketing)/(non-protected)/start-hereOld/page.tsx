import { Metadata } from 'next'

import StartHereView from '@/views/StartHereView'

export const metadata: Metadata = {
  title: 'start here',
  description: 'Automate your way to success with ContentQL',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'start here',
    description: 'Automate your way to success with ContentQL',
    url: 'https://contentql.com/start-here',
    images: '/images/dashboard-02.png',
  },
}

const Home = () => {
  return <StartHereView />
}

export default Home
