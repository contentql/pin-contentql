'use client'

import Layout from '../components/layout/Layout'

import Cookies from '@/components/sections/Cookies'

export default function CookiesView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <Cookies />
      </Layout>
    </>
  )
}
