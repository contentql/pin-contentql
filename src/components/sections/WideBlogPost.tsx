import post11Img from '/public/images/blog/post-11-img.jpg'
import Image from 'next/image'
import Link from 'next/link'

const WideBlogPost = () => {
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
                  src={post11Img}
                  alt='blog-post-image'
                />
              </div>
            </div>
            {/* BLOG POST TEXT */}
            <div className='col-md-6'>
              <div className='blog-post-txt'>
                {/* Post Tag */}
                <span className='post-tag color--blue-400'>
                  Social Media Marketing
                </span>
                {/* Post Link */}
                <h3 className='s-38 w-700'>
                  <Link href='/single-post'>
                    Congue magna tempor and ipsum ContentQL sapien turpis
                    laoreet augue
                  </Link>
                </h3>
                {/* Text */}
                <p>
                  Aliqum mullam blandit vitae and tempor sapien and donec lipsum
                  gravida porta undo velna dolor libero a risus aliquet tempus
                  posuere a tempor velna tempus posuere dolor
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
                      <p>Apr 28, 2023</p>
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
