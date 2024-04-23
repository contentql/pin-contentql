'use client'

import Layout from '../components/layout/Layout'

import About_2 from '@/components/sections/About_2'
import About_3 from '@/components/sections/About_3'
import Blog1_6 from '@/components/sections/Blog1_6'
import BoxContent from '@/components/sections/BoxContent'
import Brands1_12 from '@/components/sections/Brands1_12'
import Features11_14 from '@/components/sections/Features11_14'
import Lnk1_23 from '@/components/sections/Lnk1_23'
import Newsletter1_6 from '@/components/sections/Newsletter1_6'
import Rating1_6 from '@/components/sections/Rating1_6'
import Reviews2_7 from '@/components/sections/Reviews2_7'
import Statistic5_4 from '@/components/sections/Statistic5_4'
import Team_1 from '@/components/sections/Team_1'
import TextContent_1 from '@/components/sections/TextContent_1'
import TextContent_2 from '@/components/sections/TextContent_2'

export default function AboutUsView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <div>
          {/* ABOUT-2
			============================================= */}
          <About_2 /> {/* END ABOUT-2 */}
          {/* ABOUT-3
			============================================= */}
          <About_3 /> {/* END ABOUT-3 */}
          {/* STATISTIC-5
			============================================= */}
          <Statistic5_4 /> {/* END STATISTIC-5 */}
          {/* TEXT CONTENT
			============================================= */}
          <TextContent_1 /> {/* END TEXT CONTENT */}
          {/* FEATURES-11
			============================================= */}
          <Features11_14 /> {/* END FEATURES-11 */}
          {/* DIVIDER LINE */}
          <hr className='divider' />
          {/* BRANDS-1
			============================================= */}
          <Brands1_12 /> {/* END BRANDS-1 */}
          {/* DIVIDER LINE */}
          <hr className='divider' />
          {/* TEAM-1
			============================================= */}
          <Team_1 /> {/* END TEAM-1 */}
          {/* BOX CONTENT
			============================================= */}
          <BoxContent /> {/* END BOX CONTENT */}
          {/* TEXT CONTENT
			============================================= */}
          <Lnk1_23 /> {/* END TEXT CONTENT */}
          {/* TEXT CONTENT
			============================================= */}
          <TextContent_2 /> {/* END TEXT CONTENT */}
          {/* TESTIMONIALS-2
			============================================= */}
          <Reviews2_7 /> {/* END TESTIMONIALS-2 */}
          {/* RATING-1
			============================================= */}
          <Rating1_6 /> {/* END RATING-1 */}
          {/* BLOG-1
			============================================= */}
          <Blog1_6 /> {/* END BLOG-1 */}
          {/* DIVIDER LINE */}
          <hr className='divider' />
          {/* NEWSLETTER-1
			============================================= */}
          <Newsletter1_6 /> {/* END NEWSLETTER-1 */}
          {/* DIVIDER LINE */}
          <hr className='divider' />
        </div>
      </Layout>
    </>
  )
}
