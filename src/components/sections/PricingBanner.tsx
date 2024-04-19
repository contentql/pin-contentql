import Link from 'next/link'

const PricingBanner = () => {
  return (
    <section id='banner-1' className='pt-100 banner-section'>
      <div className='container'>
        {/* BANNER-1 WRAPPER */}
        <div className='banner-1-wrapper r-16'>
          <div className='banner-overlay bg--05 bg--fixed'>
            <div className='row'>
              {/* BANNER-1 TEXT */}
              <div className='col'>
                <div className='banner-1-txt color--white'>
                  {/* Title */}
                  <h2 className='s-45 w-700'>Give it a try, it&apos;s free!</h2>
                  {/* Text */}
                  <p className='p-xl'>
                    It only takes a few clicks to get started
                  </p>
                  {/* Button */}
                  <Link
                    href='/signup-1'
                    className='btn r-04 btn--theme hover--tra-white'>
                    Get srarted - it&apos;s free
                  </Link>
                  {/* Button Text */}
                  <p className='p-sm btn-txt ico-15 o-85'>
                    <span className='flaticon-check' /> Free for 14 days, no
                    credit card required.
                  </p>
                </div>
              </div>{' '}
              {/* END BANNER-1 TEXT */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* End banner overlay */}
        </div>{' '}
        {/* END BANNER-1 WRAPPER */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default PricingBanner
