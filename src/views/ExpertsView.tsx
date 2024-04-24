'use client'

import Layout from '../components/layout/Layout'

import Banner_4 from '@/components/sections/Banner_4'
import Banner_12 from '@/components/sections/Banner_12'
import Careers_1 from '@/components/sections/Careers_1'
import ExpertsTeam from '@/components/sections/ExpertsTeam'

export default function ExpertsView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <div>
          <ExpertsTeam />
          {/* END TEAM-2 */}
          {/* BANNER-12
			============================================= */}
          <Banner_12 /> {/* END BANNER-12 */}
          {/* CAREERS-1
			============================================= */}
          <Careers_1 /> {/* END CAREERS-1 */}
          {/* BANNER-4
			============================================= */}
          <Banner_4 /> {/* END BANNER-4 */}
          {/* DIVIDER LINE */}
        </div>
      </Layout>
    </>
  )
}
