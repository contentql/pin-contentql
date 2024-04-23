import post4Img from '/public/images/blog/post-4-img.jpg'
import post5Img from '/public/images/blog/post-5-img.jpg'
import post6Img from '/public/images/blog/post-6-img.jpg'
import Image from 'next/image'
import Link from 'next/link'

const PostsWrapper_2 = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='posts-category ico-20 wow fadeInUp'>
            <h4 className='s-34 w-700'>
              Latest News <span className='flaticon-next' />
            </h4>
          </div>
        </div>
      </div>
      <div className='posts-wrapper'>
        <div className='row'>
          {/* BLOG POST #4 */}
          <div className='col-md-6 col-lg-4'>
            <div className='blog-post mb-40 wow fadeInUp clearfix'>
              {/* BLOG POST IMAGE */}
              <div className='blog-post-img mb-35'>
                <Image
                  className='img-fluid r-16'
                  src={post4Img}
                  alt='blog-post-image'
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className='blog-post-txt'>
                {/* Post Tag */}
                <span className='post-tag color--pink-400'>Tutorials</span>
                {/* Post Link */}
                <h6 className='s-20 w-700'>
                  <Link href='/single-post'>
                    Phasellus blandit justo undo aliquam vitae molestie nunc
                    sapien augue justo aliquet
                  </Link>
                </h6>
                {/* Text */}
                <p>
                  Aliqum mullam ipsum vitae and blandit vitae tempor sapien and
                  donec lipsum
                </p>
                {/* Post Meta */}
                <div className='blog-post-meta mt-20'>
                  <ul className='post-meta-list ico-10'>
                    <li>
                      <p className='p-sm w-500'>By Miranda Green</p>
                    </li>
                    <li className='meta-list-divider'>
                      <p>
                        <span className='flaticon-minus' />
                      </p>
                    </li>
                    <li>
                      <p className='p-sm'>Mar 20, 2023</p>
                    </li>
                  </ul>
                </div>
              </div>{' '}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{' '}
          {/* END BLOG POST #4 */}
          {/* BLOG POST #5 */}
          <div className='col-md-6 col-lg-4'>
            <div className='blog-post mb-40 wow fadeInUp clearfix'>
              {/* BLOG POST IMAGE */}
              <div className='blog-post-img mb-35'>
                <Image
                  className='img-fluid r-16'
                  src={post5Img}
                  alt='blog-post-image'
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className='blog-post-txt'>
                {/* Post Tag */}
                <span className='post-tag color--violet-400'>
                  Freelancer Tips
                </span>
                {/* Post Link */}
                <h6 className='s-20 w-700'>
                  <Link href='/single-post'>
                    Blandit justo phasellus undo aliquam diam molestie vitae
                  </Link>
                </h6>
                {/* Text */}
                <p>
                  Luctus vitae egestas augue and ipsum ultrice quisque in cursus
                  lacus feugiat egets congue ultrice sagittis laoreet
                </p>
                {/* Post Meta */}
                <div className='blog-post-meta mt-20'>
                  <ul className='post-meta-list ico-10'>
                    <li>
                      <p className='p-sm w-500'>By ContentQL Team</p>
                    </li>
                    <li className='meta-list-divider'>
                      <p>
                        <span className='flaticon-minus' />
                      </p>
                    </li>
                    <li>
                      <p className='p-sm'>Mar 13, 2023</p>
                    </li>
                  </ul>
                </div>
              </div>{' '}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{' '}
          {/* END BLOG POST #5 */}
          {/* BLOG POST #6 */}
          <div className='col-md-12 col-lg-4'>
            <div className='blog-post mb-40 wow fadeInUp clearfix'>
              {/* BLOG POST IMAGE */}
              <div className='blog-post-img mb-35'>
                <Image
                  className='img-fluid r-16'
                  src={post6Img}
                  alt='blog-post-image'
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className='blog-post-txt'>
                {/* Post Tag */}
                <span className='post-tag color--blue-400'>Extensions</span>
                {/* Post Link */}
                <h6 className='s-20 w-700'>
                  <Link href='/single-post'>
                    Cursus porttitor fusce neque CEO egestas cursus magna sapien
                    and ipsum suscipit
                  </Link>
                </h6>
                {/* Text */}
                <p>
                  Mullam ipsum aliqum vitae and blandit vitae tempor sapien and
                  lipsum donec
                </p>
                {/* Post Meta */}
                <div className='blog-post-meta mt-20'>
                  <ul className='post-meta-list ico-10'>
                    <li>
                      <p className='p-sm w-500'>By ContentQL Team</p>
                    </li>
                    <li className='meta-list-divider'>
                      <p>
                        <span className='flaticon-minus' />
                      </p>
                    </li>
                    <li>
                      <p className='p-sm'>Feb 23, 2023</p>
                    </li>
                  </ul>
                </div>
              </div>{' '}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{' '}
          {/* END BLOG POST #6 */}
        </div>{' '}
        {/* End row */}
      </div>
    </div>
  )
}

export default PostsWrapper_2
