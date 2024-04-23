import VideoPopup from '../elements/VidepPopup'
import post10Img from '/public/images/blog/post-10-img.jpg'
import Image from 'next/image'
import Link from 'next/link'

const SquareBlogPost = () => {
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
                    <span className='post-tag color--pink-400'>
                      Video Tutorials
                    </span>
                    {/* Post Link */}
                    <h4 className='s-34 w-700 mb-20'>
                      <Link href='/single-post'>
                        Lipsum sodales sapien ContentQL aliquet blandit augue
                        gravida posuere
                      </Link>
                    </h4>
                    {/* Text */}
                    <p>
                      Aliqum mullam blandit vitae and tempor sapien and donec
                      lipsum gravida porta undo velna dolor libero risus aliquet
                      tempus posuere vitae tempor
                    </p>
                    {/* Post Meta */}
                    <div className='blog-post-meta mt-30'>
                      <ul className='post-meta-list ico-10'>
                        <li>
                          <p className='w-500'>By ContentQL Team</p>
                        </li>
                        <li className='meta-list-divider'>
                          <p>
                            <span className='flaticon-minus' />
                          </p>
                        </li>
                        <li>
                          <p>Feb 12, 2023</p>
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
                      src={post10Img}
                      alt='video-preview'
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
