import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'

const PostsWrapper_2 = ({
  title,
  blogs,
}: {
  title?: string
  blogs?: {
    blog_image: string | Media
    caption: string
    title: string
    description: string
    bloger_name: string
    date: string
    id?: string | null
  }[]
}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='posts-category ico-20 wow fadeInUp'>
            <h4 className='s-34 w-700'>
              {title} <span className='flaticon-next' />
            </h4>
          </div>
        </div>
      </div>
      <div className='posts-wrapper'>
        <div className='row'>
          {/* BLOG POST #4 */}
          {blogs?.map((blog, index) => (
            <div key={blog?.id} className='col-md-6 col-lg-4'>
              <div className='blog-post mb-40 wow fadeInUp clearfix'>
                {/* BLOG POST IMAGE */}
                <div className='blog-post-img mb-35'>
                  <Image
                    className='img-fluid r-16'
                    src={(blog?.blog_image as Media)?.url || ''}
                    alt={(blog?.blog_image as Media)?.alt || ''}
                    height={1000}
                    width={1000}
                  />
                </div>
                {/* BLOG POST TEXT */}
                <div className='blog-post-txt'>
                  {/* Post Tag */}
                  <span className='post-tag color--pink-400'>
                    {blog?.caption}
                  </span>
                  {/* Post Link */}
                  <h6 className='s-20 w-700'>
                    <Link href='/single-post'>{blog?.title}</Link>
                  </h6>
                  {/* Text */}
                  <p>{blog?.description}</p>
                  {/* Post Meta */}
                  <div className='blog-post-meta mt-20'>
                    <ul className='post-meta-list ico-10'>
                      <li>
                        <p className='p-sm w-500'>By {blog?.bloger_name}</p>
                      </li>
                      <li className='meta-list-divider'>
                        <p>
                          <span className='flaticon-minus' />
                        </p>
                      </li>
                      <li>
                        <p className='p-sm'>{blog?.date}</p>
                      </li>
                    </ul>
                  </div>
                </div>{' '}
                {/* END BLOG POST TEXT */}
              </div>
            </div>
          ))}
          {/* END BLOG POST #4 */}
        </div>{' '}
        {/* End row */}
      </div>
    </div>
  )
}

export default PostsWrapper_2
