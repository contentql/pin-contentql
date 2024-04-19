'use client'

import Layout from '../components/layout/Layout'

import PricingBanner from '@/components/sections/PricingBanner'
import PricingBrands from '@/components/sections/PricingBrands'
import PricingFaqs from '@/components/sections/PricingFaqs'
import PricingPlans from '@/components/sections/PricingPlans'
import PricingTables from '@/components/sections/PricingTables'
import PricingTitle from '@/components/sections/PricingTitle'

export default function PricingView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <div>
          <section
            id='pricing-1'
            className='gr--whitesmoke pb-40 inner-page-hero pricing-section'>
            <div className='container'>
              {/* SECTION TITLE */}
              <PricingTitle /> {/* END SECTION TITLE */}
              {/* PRICING TABLES */}
              <PricingTables /> {/* PRICING TABLES */}
            </div>{' '}
            {/* End container */}
          </section>{' '}
          {/* END PRICING-1 */}
          {/* BRANDS-1
			============================================= */}
          <PricingBrands /> {/* END BRANDS-1 */}
          {/* DIVIDER LINE */}
          <hr className='divider' />
          {/* PRICING COMPARE
			============================================= */}
          <PricingPlans /> {/* END PRICING COMPARE */}
          {/* FAQs-3
			============================================= */}
          <PricingFaqs /> {/* END FAQs-3 */}
          {/* BANNER-1
			============================================= */}
          <PricingBanner />
        </div>
      </Layout>
    </>
  )
}
