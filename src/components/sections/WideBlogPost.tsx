import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'

const WideBlogPost = ({
  caption,
  title,
  sub_title,
  name,
  date,
  background_image,
}: {
  caption?: string
  title?: string
  sub_title?: string
  name?: string
  date?: string
  background_image?: Media
}) => {
  return (
    <section id='blog-page' className='inner-page-hero blog-page-section'>
      <div className='container'>
        <div className='blog-post wide-post wow fadeInUp'>
          <div className='row d-flex align-items-center'>
            {/* BLOG POST IMAGE */}
            <div className='col-md-6'>
              <div className='blog-post-img'>
                <Image
                  className='img-fluid r-16'
                  src={background_image?.url || ''}
                  alt={background_image?.alt || ''}
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
            {/* BLOG POST TEXT */}
            <div className='col-md-6'>
              <div className='blog-post-txt'>
                {/* Post Tag */}
                <span className='post-tag color--blue-400'>{caption}</span>
                {/* Post Link */}
                <h3 className='s-38 w-700'>
                  <Link href='/single-post'>{title}</Link>
                </h3>
                {/* Text */}
                <p>{sub_title}</p>
                {/* Post Meta */}
                <div className='blog-post-meta mt-30'>
                  <ul className='post-meta-list ico-10'>
                    <li>
                      <p className='w-500'>By {name}</p>
                    </li>
                    <li className='meta-list-divider'>
                      <p>
                        <span className='flaticon-minus' />
                      </p>
                    </li>
                    <li>
                      <p>{date}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* END BLOG POST TEXT */}
          </div>{' '}
          {/* End row */}
        </div>
      </div>
    </section>
  )
}

export default WideBlogPost
