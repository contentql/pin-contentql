'use client'

import Layout from '../components/layout/Layout'

import HelpCenterBanner from '@/components/sections/HelpCenterBanner'
import HelpCenterFaqs from '@/components/sections/HelpCenterFaqs'

export default function HelpCenterView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <div>
          <HelpCenterFaqs /> {/* END  FAQs-4 */}
          {/* BANNER-9
			============================================= */}
          <HelpCenterBanner />
        </div>
      </Layout>
    </>
  )
}
