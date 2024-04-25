'use client'

import Layout from '../components/layout/Layout'

import Terms from '@/components/sections/Terms'

export default function PrivacyView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <Terms />
      </Layout>
    </>
  )
}
