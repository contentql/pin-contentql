'use client'

import Layout from '../components/layout/Layout'
import Banner13_1 from '../components/sections/Banner13_1'
import Hero25 from '../components/sections/Hero25'
import TemplateSearch from '../components/sections/TemplateSearch'

import TemplatePlain from '@/components/sections/TemplatePlain'

function ExploreView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <Hero25 />
        <TemplateSearch />
        <TemplatePlain />
        <Banner13_1 />
      </Layout>
    </>
  )
}

export default ExploreView
