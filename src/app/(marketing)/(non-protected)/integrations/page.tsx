import { Metadata } from 'next'

import IntegrationsView from '@/views/IntegrationsView'

export const metadata: Metadata = {
  title: 'integrations',
  description: 'Integrate with your essential tools in few clicks',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'integrations',
    description: 'Integrate with your essential tools in few clicks',
    url: 'https://contentql.com/integrations',
    images: '/images/f_05.png',
  },
}

const Home = () => {
  return <IntegrationsView />
}

export default Home
