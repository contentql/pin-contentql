'use client'

import Layout from '../components/layout/Layout'

import Newsletter1_6 from '@/components/sections/Newsletter1_6'
import Pagination from '@/components/sections/Pagination'
import PostsWrapper_1 from '@/components/sections/PostsWrapper_1'
import PostsWrapper_2 from '@/components/sections/PostsWrapper_2'
import SquareBlogPost from '@/components/sections/SquareBlogPost'
import WideBlogPost from '@/components/sections/WideBlogPost'

export default function BlogsView() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls='navbar-dark inner-page-header'>
        <div>
          {/* WIDE BLOG POST */}
          <WideBlogPost /> {/* END WIDE BLOG POST */}
          {/* POSTS WRAPPER */}
          <PostsWrapper_1 />
          {/* END POSTS WRAPPER */}
          {/* POSTS WRAPPER */}
          <PostsWrapper_2 />
          {/* END POSTS WRAPPER */}
          {/* SQUARE BLOG POST */}
          <SquareBlogPost /> {/* END SQUARE BLOG POST */}
          {/* BLOG POSTS CATEGORY */}
          <PostsWrapper_2 />
          {/* END POSTS WRAPPER */}
          {/* END BLOG POSTS LISTING */}
          {/* PAGE PAGINATION
			============================================= */}
          <Pagination />
          {/* END PAGE PAGINATION */}
          {/* DIVIDER LINE */}
          {/* NEWSLETTER-1
			============================================= */}
          <Newsletter1_6 /> {/* END NEWSLETTER-1 */} {/* END NEWSLETTER-1 */}
          {/* DIVIDER LINE */}
        </div>
      </Layout>
    </>
  )
}
