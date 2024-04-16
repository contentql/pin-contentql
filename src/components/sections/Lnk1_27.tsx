import img06 from '/public/images/img-06.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Lnk1_27() {
  return (
    <>
      <section id='lnk-1' className='pt-80 ws-wrapper content-section'>
        <div className='container'>
          <div className='bc-1-wrapper bg--02 bg--fixed r-16'>
            <div className='section-overlay'>
              <div className='row d-flex align-items-center'>
                {/* TEXT BLOCK */}
                <div className='col-md-6 order-last order-md-2'>
                  <div className='txt-block left-column wow fadeInRight'>
                    {/* Title */}
                    <h2 className='s-46 w-700'>
                      Open up your business to new possibilities
                    </h2>
                    {/* List */}
                    <ul className='simple-list'>
                      <li className='list-item'>
                        <p>
                          Cursus purus suscipit vitae cubilia magnis volute
                          egestas vitae sapien turpis sodales magna
                        </p>
                      </li>
                      <li className='list-item'>
                        <p className='mb-0'>
                          Tempor sapien quaerat an ipsum laoreet purus and
                          sapien dolor an ultrice ipsum aliquam congue
                        </p>
                      </li>
                    </ul>
                    {/* Link */}
                    <div className='txt-block-tra-link mt-25'>
                      <Link
                        href='#features-2'
                        className='tra-link ico-20 color--theme'
                      >
                        The smarter way to work{' '}
                        <span className='flaticon-next' />
                      </Link>
                    </div>
                  </div>
                </div>{' '}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className='col-md-6 order-first order-md-2'>
                  <div className='img-block right-column wow fadeInLeft'>
                    <Image
                      className='img-fluid'
                      src={img06}
                      alt='content-image'
                    />
                  </div>
                </div>
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* End section overlay */}
          </div>{' '}
          {/* End content wrapper */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
