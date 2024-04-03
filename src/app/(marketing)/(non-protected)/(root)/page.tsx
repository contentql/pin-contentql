import { Metadata } from 'next';

import HomeView from '@/views/HomeView';

export const metadata: Metadata = {
  title: 'contentQL',
  description: 'Create Your Website Easily. Go Code-Free.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://contentql.com',
    images: '/images/dashboard-09.png',
  },
};

const Home = () => {
  return <HomeView />;
};

export default Home;
