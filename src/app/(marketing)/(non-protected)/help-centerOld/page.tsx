import { Metadata } from 'next'

import HelpCenterView from '@/views/HelpCenterView'

export const metadata: Metadata = {
  title: 'help center',
  description: 'How Can We Help?',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'help center',
    description: 'How Can We Help?',
    url: 'https://contentql.com/help-center',
    images: '/images/help.png',
  },
}

const Home = () => {
  return <HelpCenterView />
}

export default Home
