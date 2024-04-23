import post1Img from '/public/images/blog/post-1-img.jpg'
import post2Img from '/public/images/blog/post-2-img.jpg'
import post3Img from '/public/images/blog/post-3-img.jpg'
import Image from 'next/image'
import Link from 'next/link'

const PostsWrapper_1 = () => {
  return (
    <div className='container'>
      <div className='posts-wrapper'>
        <div className='row'>
          {/* BLOG POST #1 */}
          <div className='col-md-6 col-lg-4'>
            <div className='blog-post mb-40 wow fadeInUp clearfix'>
              {/* BLOG POST IMAGE */}
              <div className='blog-post-img mb-35'>
                <Image
                  className='img-fluid r-16'
                  src={post1Img}
                  alt='blog-post-image'
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className='blog-post-txt'>
                {/* Post Tag */}
                <span className='post-tag color--red-400'>Product News</span>
                {/* Post Link */}
                <h6 className='s-20 w-700'>
                  <Link href='/single-post'>
                    Aliqum mullam porta blandit: lacus and sapien gravida
                  </Link>
                </h6>
                {/* Text */}
                <p>
                  Egestas luctus vitae augue and ipsum ultrice quisque in cursus
                  lacus feugiat congue diam ultrice laoreet sagittis
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
                      <p className='p-sm'>Apr 23, 2023</p>
                    </li>
                  </ul>
                </div>
              </div>{' '}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{' '}
          {/* END BLOG POST #1 */}
          {/* BLOG POST #2 */}
          <div className='col-md-6 col-lg-4'>
            <div className='blog-post mb-40 wow fadeInUp clearfix'>
              {/* BLOG POST IMAGE */}
              <div className='blog-post-img mb-35'>
                <Image
                  className='img-fluid r-16'
                  src={post2Img}
                  alt='blog-post-image'
                />
              </div>
              {/* BLOG POST TEXT */}
              <div className='blog-post-txt'>
                {/* Post Tag */}
                <span className='post-tag color--green-400'>Community</span>
                {/* Post Link */}
                <h6 className='s-20 w-700'>
                  <Link href='/single-post'>
                    Porttitor cursus fusce neque CEO egestas cursus magna sapien
                    and suscipit ipsum
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
                      <p className='p-sm'>Apr 09, 2023</p>
                    </li>
                  </ul>
                </div>
              </div>{' '}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{' '}
          {/* END BLOG POST #2 */}
          {/* BLOG POST #3 */}
          <div className='col-md-12 col-lg-4'>
            <div className='blog-post mb-40 wow fadeInUp clearfix'>
              {/* BLOG POST IMAGE */}
              <div className='blog-post-img mb-35'>
                <Image
                  className='img-fluid r-16'
                  src={post3Img}
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
                    Cubilia laoreet ipsum augue eget egestas ContentQL magna
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
                      <p className='p-sm w-500'>By Helen J.</p>
                    </li>
                    <li className='meta-list-divider'>
                      <p>
                        <span className='flaticon-minus' />
                      </p>
                    </li>
                    <li>
                      <p className='p-sm'>Apr 01, 2023</p>
                    </li>
                  </ul>
                </div>
              </div>{' '}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{' '}
          {/* END BLOG POST #3 */}
        </div>
      </div>
    </div>
  )
}

export default PostsWrapper_1
