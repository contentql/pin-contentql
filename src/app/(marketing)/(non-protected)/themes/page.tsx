import { Metadata } from 'next'

import ThemesView from '@/views/ThemesView'

export const metadata: Metadata = {
  title: 'themes',
  description: 'A design experience like never before',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'themes',
    description: 'A design experience like never before',
    url: 'https://contentql.com/themes',
    images: '/images/projects/project-04.jpg',
  },
}

const Home = () => {
  return <ThemesView />
}

export default Home
