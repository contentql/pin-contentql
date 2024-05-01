import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'
import { getAllBlogs } from '@/routers/blogs-router'

const page = async () => {
  const startIndex = 1
  const endIndex = 4
  const blogsData = await getAllBlogs()

  return (
    <div>
      <section
        id='blog-page'
        className='pb-60 inner-page-hero blog-page-section'>
        <div className='container'>
          {/* WIDE BLOG POST */}
          <div className='blog-post wide-post wow fadeInUp'>
            <div className='row d-flex align-items-center'>
              {/* BLOG POST IMAGE */}
              <div className='col-md-6'>
                <div className='blog-post-img'>
                  <Image
                    className='img-fluid r-16'
                    src={(blogsData.at(0)?.image as Media).url || ''}
                    alt={(blogsData.at(0)?.image as Media).alt || ''}
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className='col-md-6'>
                <div className='blog-post-txt'>
                  {/* Post Tag */}
                  <span className='post-tag color--blue-400'>
                    {blogsData.at(0)?.tag}
                  </span>
                  {/* Post Link */}
                  <h3 className='s-38 w-700'>
                    <Link href={`/blog/${blogsData.at(0)?.id}`}>
                      {blogsData.at(0)?.title}
                    </Link>
                  </h3>
                  {/* Text */}
                  <p className='line-clamp-4'>{blogsData.at(0)?.description}</p>
                  {/* Post Meta */}
                  <div className='blog-post-meta mt-30'>
                    <ul className='post-meta-list ico-10'>
                      <li>
                        <p className='w-500'>{blogsData.at(0)?.creator_name}</p>
                      </li>
                      <li className='meta-list-divider'>
                        <p>
                          <span className='flaticon-minus' />
                        </p>
                      </li>
                      <li>
                        <p>{blogsData.at(0)?.created_date}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{' '}
              {/* END BLOG POST TEXT */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END WIDE BLOG POST */}
          {/* POSTS WRAPPER */}
          <div className='posts-wrapper'>
            <div className='row'>
              {/* BLOG POST #1 */}
              {blogsData.slice(endIndex, endIndex + 6).map((blog, index) => (
                <div key={index} className='col-md-6 col-lg-4'>
                  <div className='blog-post mb-40 wow fadeInUp clearfix'>
                    {/* BLOG POST IMAGE */}
                    <div className='blog-post-img mb-35'>
                      <Image
                        className='img-fluid r-16'
                        src={(blog?.image as Media)?.url || ''}
                        alt={(blog?.image as Media)?.alt || ''}
                        height={500}
                        width={500}
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className='blog-post-txt'>
                      {/* Post Tag */}
                      <span className='post-tag color--red-400'>
                        {blog?.tag}
                      </span>
                      {/* Post Link */}
                      <h6 className='s-20 w-700'>
                        <Link href={`/blog/${blog?.id}`}>{blog?.title}</Link>
                      </h6>
                      {/* Text */}
                      <p className='line-clamp-4'>{blog?.description}</p>
                      {/* Post Meta */}
                      <div className='blog-post-meta mt-20'>
                        <ul className='post-meta-list ico-10'>
                          <li>
                            <p className='p-sm w-500'>{blog?.creator_name}</p>
                          </li>
                          <li className='meta-list-divider'>
                            <p>
                              <span className='flaticon-minus' />
                            </p>
                          </li>
                          <li>
                            <p className='p-sm'>{blog?.created_date}</p>
                          </li>
                        </ul>
                      </div>
                    </div>{' '}
                    {/* END BLOG POST TEXT */}
                  </div>
                </div>
              ))}
              {/* END BLOG POST #3 */}
            </div>
          </div>{' '}
          {/* END POSTS WRAPPER */}
          {/* BLOG POSTS CATEGORY */}
          <div className='row'>
            <div className='col'>
              <div className='posts-category ico-20 wow fadeInUp'>
                <h4 className='s-34 w-700'>
                  Latest News <span className='flaticon-next' />
                </h4>
              </div>
            </div>
          </div>
          {/* POSTS WRAPPER */}
          <div className='posts-wrapper'>
            <div className='row'>
              {/* BLOG POST #4 */}
              {blogsData.slice(startIndex, endIndex).map((blog, index) => (
                <div key={index} className='col-md-6 col-lg-4'>
                  <div className='blog-post mb-40 wow fadeInUp clearfix'>
                    {/* BLOG POST IMAGE */}
                    <div className='blog-post-img mb-35'>
                      <Image
                        className='img-fluid r-16'
                        src={(blog?.image as Media)?.url || ''}
                        alt={(blog?.image as Media)?.alt || ''}
                        height={500}
                        width={500}
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className='blog-post-txt'>
                      {/* Post Tag */}
                      <span className='post-tag color--pink-400'>
                        {blog?.tag}
                      </span>
                      {/* Post Link */}
                      <h6 className='s-20 w-700'>
                        <Link href={`/blog/${blog?.id}`}>{blog?.title}</Link>
                      </h6>
                      {/* Text */}
                      <p className='line-clamp-4'>{blog?.description}</p>
                      {/* Post Meta */}
                      <div className='blog-post-meta mt-20'>
                        <ul className='post-meta-list ico-10'>
                          <li>
                            <p className='p-sm w-500'>{blog?.creator_name}</p>
                          </li>
                          <li className='meta-list-divider'>
                            <p>
                              <span className='flaticon-minus' />
                            </p>
                          </li>
                          <li>
                            <p className='p-sm'>{blog?.created_date}</p>
                          </li>
                        </ul>
                      </div>
                    </div>{' '}
                    {/* END BLOG POST TEXT */}
                  </div>
                </div>
              ))}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END POSTS WRAPPER */}
          {/* BLOG POSTS CATEGORY */}
          {/* POSTS WRAPPER */}
          {/* END POSTS WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>{' '}
      {/* END BLOG POSTS LISTING */}
      {/* PAGE PAGINATION
			============================================= */}
      <div className='pb-100 page-pagination theme-pagination'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <nav aria-label='Page navigation'>
                <ul className='pagination ico-20 justify-content-center'>
                  <li className='page-item disabled'>
                    <Link className='page-link' href='#' tabIndex={-1}>
                      <span className='flaticon-back' />
                    </Link>
                  </li>
                  <li className='page-item active' aria-current='page'>
                    <Link className='page-link' href='#'>
                      1
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' href='#'>
                      2
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' href='#'>
                      3
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' href='#' aria-label='Next'>
                      <span className='flaticon-next' />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </div>{' '}
      {/* END PAGE PAGINATION */}
      {/* DIVIDER LINE */}
      {/* <hr className='divider' /> */}
      {/* NEWSLETTER-1
			============================================= */}
      {/* END NEWSLETTER-1 */}
      {/* DIVIDER LINE */}
      <hr className='divider' />
    </div>
  )
}

export default page
