'use client'

import Layout from '../components/layout/Layout'
import Integrations1_8 from '../components/sections/Integrations1_8'

import Banner14_1 from '@/components/sections/Banner14_1'
import Ct04_16 from '@/components/sections/Ct04_16'
import Ct05_1 from '@/components/sections/Ct05_1'
import Features2_21 from '@/components/sections/Features2_21'
import Hero28 from '@/components/sections/Hero28'
import Statistic1_19 from '@/components/sections/Statistic1_19'

export default function IntegrationsView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <div>
          <Hero28 /> {/* END IMAGE CONTENT */}
          {/* STATISTIC-1
			============================================= */}
          <Statistic1_19 /> {/* END STATISTIC-1 */}
          {/* DIVIDER LINE */}
          <hr className='divider' />
          {/* TEXT CONTENT
			============================================= */}
          <Ct05_1 /> {/* END TEXT CONTENT */}
          {/* FEATURES-2
			============================================= */}
          <Features2_21 /> {/* END FEATURES-2 */}
          {/* TEXT CONTENT
			============================================= */}
          <Ct04_16 /> {/* END TEXT CONTENT */}
          <Integrations1_8 />
          {/* BANNER-3
			============================================= */}
          <Banner14_1 />
        </div>
      </Layout>
    </>
  )
}
