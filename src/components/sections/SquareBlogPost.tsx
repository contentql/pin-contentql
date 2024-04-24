import VideoPopup from '../elements/VidepPopup'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'

const SquareBlogPost = ({
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
    <div className='container'>
      <div className='blog-post square-post'>
        <div className='row'>
          <div className='col'>
            {/* SQUARE BLOG POST WRAPPER */}
            <div className='square-post-wrapper bg--black-400 block-shadow r-16 wow fadeInUp'>
              <div className='row d-flex align-items-center'>
                {/* BLOG POST TEXT */}
                <div className='col-md-6 order-last order-md-2'>
                  <div className='blog-post-txt color--white'>
                    {/* Post Tag */}
                    <span className='post-tag color--pink-400'>{caption}</span>
                    {/* Post Link */}
                    <h4 className='s-34 w-700 mb-20'>
                      <Link href='/single-post'>{title}</Link>
                    </h4>
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
                </div>
                {/* BLOG POST IMAGE */}
                <div className='col-md-6 order-first order-md-2'>
                  <div className='blog-post-img video-preview'>
                    {/* Play Icon */}
                    <VideoPopup style={1} />
                    {/* Preview Image */}
                    <Image
                      className='img-fluid'
                      src={background_image?.url || ''}
                      alt={background_image?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* END SQUARE BLOG POST WRAPPER */}
          </div>
        </div>{' '}
      </div>
      {/* End row */}
    </div>
  )
}

export default SquareBlogPost
