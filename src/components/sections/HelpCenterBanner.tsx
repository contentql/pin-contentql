import help from '/public/images/help.png'
import Image from 'next/image'
import Link from 'next/link'

const HelpCenterBanner = () => {
  return (
    <section id='banner-9' className='bg--02 py-70 x-border banner-section'>
      <div className='container'>
        {/* BANNER-9 WRAPPER */}
        <div className='banner-7-wrapper'>
          <div className='row justify-content-center d-flex align-items-center'>
            {/* BANNER-9 TEXT */}
            <div className='col-md-7 col-xl-5'>
              <div className='banner-9-txt'>
                {/* Title */}
                <h3 className='s-40 w-700'>Still need help?</h3>
                {/* Text */}
                <p className='p-lg'>
                  Don&apos;t hesitate to contact us about any question you might
                  be interested in
                </p>
                {/* Button */}
                <Link
                  href='/contacts'
                  className='btn r-04 btn--theme hover--theme'>
                  Ask your question here
                </Link>
              </div>
            </div>
            {/* BANNER-9 IMAGE */}
            <div className='col-md-5 col-xl-5'>
              <div className='banner-9-img text-end'>
                <Image className='img-fluid' src={help} alt='banner-image' />
              </div>
            </div>
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* END BANNER-9 WRAPPER */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default HelpCenterBanner
