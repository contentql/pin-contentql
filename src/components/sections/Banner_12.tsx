import img16 from '/public/images/img-16.png'
import Image from 'next/image'
import Link from 'next/link'

const Banner_12 = () => {
  return (
    <section id='banner-12' className='banner-section'>
      <div className='container'>
        {/* BANNER-12 WRAPPER */}
        <div className='banner-12-wrapper bg--05 bg--fixed r-16'>
          <div className='banner-overlay'>
            <div className='row d-flex align-items-center'>
              {/* BANNER-12 TEXT */}
              <div className='col-md-7'>
                <div className='banner-12-txt color--white'>
                  {/* Title */}
                  <h2 className='s-45 w-700'>
                    We are looking for talented individuals
                  </h2>
                  {/* Text */}
                  <p className='p-lg'>
                    We&apos;re constantly looking for talented people to join
                    our team. Don&apos;t hesitate to get in touch with us
                  </p>
                  {/* Button */}
                  <Link
                    href='#careers-1'
                    className='btn r-04 btn--theme hover--tra-white'>
                    See open roles
                  </Link>
                </div>
              </div>{' '}
              {/* END BANNER-12 TEXT */}
              {/* BANNER-12 IMAGE */}
              <div className='col-md-5'>
                <div className='banner-12-img text-center'>
                  <Image className='img-fluid' src={img16} alt='banner-image' />
                </div>
              </div>
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* End banner overlay */}
        </div>{' '}
        {/* END BANNER-12 WRAPPER */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Banner_12
