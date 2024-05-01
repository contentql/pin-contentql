import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'
import { getAllBlogs, getBlogBySlug } from '@/routers/blogs-router'

const page = async ({ params }: { params: { slug: string } }) => {
  const startIndex = 0
  const endIndex = 3
  const blogsData = await getAllBlogs()
  const { slug } = params
  const blogData = await getBlogBySlug(slug)

  return (
    <div>
      <section
        id='single-post'
        className='pb-90 inner-page-hero blog-page-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            {/* SINGLE POST CONTENT */}
            <div className='col-xl-10'>
              <div className='post-content'>
                {/*  SINGLE POST TITLE */}
                <div className='single-post-title text-center'>
                  {/* Post Tag */}
                  <span className='post-tag color--green-400'>
                    {blogData?.tag}
                  </span>
                  {/* Title */}
                  <h2 className='s-46 w-700'>{blogData?.title}</h2>
                  {/* Post Meta */}
                  <div className='blog-post-meta mt-35'>
                    <ul className='post-meta-list ico-10'>
                      <li>
                        <p className='p-md w-500'>{blogData?.creator_name}</p>
                      </li>
                      <li className='meta-list-divider'>
                        <p>
                          <span className='flaticon-minus' />
                        </p>
                      </li>
                      <li>
                        <p className='p-md'>{blogData?.created_date}</p>
                      </li>
                    </ul>
                  </div>
                </div>{' '}
                {/* END SINGLE POST TITLE */}
                {/* SINGLE POST IMAGE */}
                <div className='blog-post-img py-50'>
                  <Image
                    className='img-fluid r-16'
                    src={(blogData?.image as Media)?.url || ''}
                    alt={(blogData?.image as Media)?.alt || ''}
                    height={900}
                    width={900}
                  />
                </div>
                {/* SINGLE POST TEXT */}
                <div className='single-post-txt'>
                  {/* Text */}
                  {blogData?.description}
                  {/* Title */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogData?.content_html!,
                    }}></div>
                </div>{' '}
                {/* END SINGLE POST TEXT */}
                {/* SINGLE POST SHARE LINKS */}
                <div className='row'>
                  <div className='col post-share-list'>
                    <ul className='share-social-icons ico-20 text-center clearfix'>
                      <li>
                        <Link href='#' className='share-ico'>
                          <span className='flaticon-twitter' />
                        </Link>
                      </li>
                      <li>
                        <Link href='#' className='share-ico'>
                          <span className='flaticon-facebook' />
                        </Link>
                      </li>
                      <li>
                        <Link href='#' className='share-ico'>
                          <span className='flaticon-bookmark' />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>{' '}
                {/* END SINGLE POST SHARE */}
                {/* POST AUTHOR */}
                <div className='post-author py-100 x-border'>
                  {/* Avatar */}
                  <div className='post-author-avatar'>
                    <Image
                      src='/images/post-author.jpg'
                      alt='author-avatar'
                      height={500}
                      width={500}
                    />
                  </div>
                  {/* Text */}
                  <div className='post-author-txt'>
                    {/* Title */}
                    <h5 className='s-24 w-700'>Melissa McClone</h5>
                    {/* Text */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit eiusmod
                      tempor sapien dolore and incidide labore dolore labore
                      incididunt turpis vitae raesent a varius dolor sagittis
                      luctus placerat a magna cursus congue magna nihil mpedit.
                    </p>
                    {/* Follow Button */}
                    <div className='author-follow-btn r-04'>
                      <Link href='#'>Follow</Link>
                    </div>
                  </div>
                </div>{' '}
                {/* END ABOUT POST AUTHOR */}
                {/* POST COMMENTS */}
                <div className='post-comments'>
                  <div className='comments-wrapper'>
                    {/* Title */}
                    <h5 className='s-24 w-700'>4 Comments</h5>
                    {/* COMMENT #1 */}
                    <div className='comment d-flex'>
                      {/* Comment-1 Avatar */}
                      <Image
                        src='/images/comment-author-1.jpg'
                        alt='comment-avatar'
                        height={500}
                        width={500}
                      />
                      {/* Comment-Body */}
                      <div className='comment-body'>
                        {/* Comment-1 Meta */}
                        <div className='comment-meta'>
                          <h6 className='s-17 w-700'>Jack H.</h6>
                          <span className='comment-date'>2 days ago - </span>
                          <span className='btn-reply ico-20'>
                            <Link href='#leave-comment'>
                              <span className='flaticon-reply-arrow' /> Reply
                            </Link>
                          </span>
                        </div>
                        {/* Comment-1 Text */}
                        <p className='mb-40'>
                          Ratione mollis undo risus aenean arcu lectus rutrum
                          porta primis and puruss augue luctus neque purus and
                          ipsum neque dolor primis libero tempus eget tempor
                          ligula posuere varius impedit enim tempor vitae
                          pulvinar at congue egestas vitae augue
                        </p>
                        <hr />
                        {/* Nested Comment */}
                        <div className='comment d-flex'>
                          {/* Nested Avatar */}
                          <Link href='#' className='pr-3'>
                            <Image
                              src='/images/comment-author-2.jpg'
                              alt='comment-avatar'
                              height={500}
                              width={500}
                            />
                          </Link>
                          <div className='comment-body'>
                            {/* Comment-2 Meta */}
                            <div className='comment-meta'>
                              <h6 className='s-17 w-700'>S. Parker</h6>
                              <span className='comment-date'>
                                4 days ago -{' '}
                              </span>
                              <span className='btn-reply ico-20'>
                                <Link href='#leave-comment'>
                                  <span className='flaticon-reply-arrow' />{' '}
                                  Reply
                                </Link>
                              </span>
                            </div>
                            {/* Comment-2 Text */}
                            <p>
                              Etiam sapien magna at vitae pulvinar congue
                              egestas and undo pretium neque viverra porta
                              suscipit ratione, mollis risus a lectus aliquet
                            </p>
                          </div>
                        </div>{' '}
                        {/* End Nested Comment */}
                      </div>
                    </div>{' '}
                    {/* END COMMENT #1 */}
                    <hr />
                    {/* COMMENT #3 */}
                    <div className='comment d-flex'>
                      {/* Comment Avatar */}
                      <Image
                        src='/images/comment-author-3.jpg'
                        alt='comment-avatar'
                        height={500}
                        width={500}
                      />
                      {/* Comment Body */}
                      <div className='comment-body'>
                        {/* Comment Meta */}
                        <div className='comment-meta'>
                          <h6 className='s-17 w-700'>Sarah Griffi</h6>
                          <span className='comment-date'>16 days ago - </span>
                          <span className='btn-reply ico-20'>
                            <Link href='#leave-comment'>
                              <span className='flaticon-reply-arrow' /> Reply
                            </Link>
                          </span>
                        </div>
                        {/* Comment Text */}
                        <p>
                          Porta ratione mollis risus aenean arcu lectus rutrum
                          porta primis and puruss augue luctus neque purus and
                          ipsum neque dolor primis libero tempus eget tempor
                          ligula posuere varius impedit enim tempor vitae
                          pulvinar at congue an augue egestas vitae
                        </p>
                      </div>{' '}
                      {/* End Comment Body */}
                    </div>{' '}
                    {/* END COMMENT #3 */}
                    <hr />
                    {/* COMMENT #4 */}
                    <div className='comment d-flex'>
                      {/* Comment Avatar */}
                      <Image
                        src='/images/comment-author-4.jpg'
                        alt='comment-avatar'
                        height={500}
                        width={500}
                      />
                      {/* Comment Body */}
                      <div className='comment-body'>
                        {/* Comment Meta */}
                        <div className='comment-meta'>
                          <h6 className='s-17 w-700'>Joshua A.</h6>
                          <span className='comment-date'>30 days ago - </span>
                          <span className='btn-reply ico-20'>
                            <Link href='#leave-comment'>
                              <span className='flaticon-reply-arrow' /> Reply
                            </Link>
                          </span>
                        </div>
                        {/* Comment Text */}
                        <p>
                          Congue augue egestas integer velna purus undo purus
                          magna nec suscipit egestas magna and neque egestas a
                          porta ratione mollis risus lectus porta quisque lacus
                        </p>
                      </div>{' '}
                      {/* End Comment Body */}
                    </div>{' '}
                    {/* END COMMENT #4 */}
                    <hr />
                    {/* COMMENT FORM */}
                    <div id='leave-comment'>
                      {/* Title */}
                      <h5 className='s-24 w-700'>Leave a Comment</h5>
                      {/* Text */}
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <form name='commentform' className='row comment-form'>
                        <div className='col-md-12 input-message'>
                          <p className='black--color'>
                            Add Comment <span>*</span>
                          </p>
                          <textarea
                            className='form-control message'
                            name='message'
                            rows={6}
                            placeholder='Enter Your Comment Here* ...'
                            required
                          />
                        </div>
                        <div className='col-md-12'>
                          <p className='black--color'>
                            Name <span>*</span>
                          </p>
                          <input
                            type='text'
                            name='name'
                            className='form-control name'
                            placeholder='Enter Your Name*'
                            required
                          />
                        </div>
                        <div className='col-md-12'>
                          <p className='black--color'>
                            Email <span>*</span>
                          </p>
                          <input
                            type='email'
                            name='email'
                            className='form-control email'
                            placeholder='Enter Your Email*'
                            required
                          />
                        </div>
                        {/* Contact Form Button */}
                        <div className='col-lg-12 form-btn'>
                          <button
                            type='submit'
                            className='btn btn--theme hover--theme submit'>
                            Post Comment
                          </button>
                        </div>
                        {/* Contact Form Message */}
                        <div className='col-md-12 comment-form-msg text-center'>
                          <div className='sending-msg'>
                            <span className='loading' />
                          </div>
                        </div>
                      </form>
                    </div>{' '}
                    {/* END COMMENT FORM */}
                  </div>
                </div>{' '}
                {/* END POST COMMENTS */}
              </div>
            </div>{' '}
            {/* END  SINGLE POST CONTENT */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </section>{' '}
      {/* END SINGLE POST */}
      {/* BLOG-1
			============================================= */}
      <section
        id='blog-1'
        className='bg--white-300 py-100 blog-section division'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-50 w-700'>Keep Reading...</h2>
                {/* Text */}
                <p className='s-21 color--grey'>
                  Ligula risus auctor tempus magna feugiat lacinia.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* BLOG POST #1 */}
            {blogsData.slice(startIndex, endIndex).map((blog, index) => (
              <div key={index} className='col-md-6 col-lg-4'>
                <div
                  id={`bp-1-${index + 1}`}
                  className='blog-post wow fadeInUp'>
                  {/* BLOG POST IMAGE */}
                  <div className='blog-post-img mb-35'>
                    <Image
                      className='img-fluid r-16'
                      src={(blog?.image as Media).url || ''}
                      alt={(blog?.image as Media).alt || ''}
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
                      <Link href='/single-post'>{blog?.title}</Link>
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
        {/* End container */}
      </section>
    </div>
  )
}

export default page
