'use client'

import Layout from '../components/layout/Layout'
import Banner13_5 from '../components/sections/Banner13_5'
import Brands1_11 from '../components/sections/Brands1_11'
import Ct01_15 from '../components/sections/Ct01_15'
import Ct01_16 from '../components/sections/Ct01_16'
import Ct03_6 from '../components/sections/Ct03_6'
import Ct04_7 from '../components/sections/Ct04_7'
import Features1_2 from '../components/sections/Features1_2'
import Hero13 from '../components/sections/Hero13'
import Lnk1_13 from '../components/sections/Lnk1_13'
import Reviews2_3 from '../components/sections/Reviews2_3'
import Statistic5_3 from '../components/sections/Statistic5_3'

export default function ProductUpdatesView() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={3} headerCls='navbar-dark'>
        <Hero13 />
        <Statistic5_3 />
        <hr className='divider' />
        <Lnk1_13 />
        <Ct01_15 />
        <Ct03_6 />
        <Features1_2 />
        <Ct01_16 />
        <Reviews2_3 />
        <Brands1_11 />
        <Ct04_7 />
        <Banner13_5 />
      </Layout>
    </>
  )
}
