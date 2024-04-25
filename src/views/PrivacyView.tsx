'use client'

import Layout from '../components/layout/Layout'

import Privacy from '@/components/sections/Privacy'

export default function PrivacyView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <Privacy />
      </Layout>
    </>
  )
}
