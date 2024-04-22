import Link from 'next/link'

export default function Banner7_4({
  title,
  button_text,
  description,
}: {
  title?: string
  button_text?: string
  description?: string
}) {
  return (
    <>
      <section
        id='banner-7'
        className='mt-100 bg--05 bg--scroll banner-section'>
        <div className='banner-overlay py-100'>
          <div className='container'>
            {/* BANNER-7 WRAPPER */}
            <div className='banner-7-wrapper'>
              <div className='row justify-content-center'>
                {/* BANNER-7 TEXT */}
                <div className='col-md-8'>
                  <div className='banner-7-txt color--white text-center'>
                    {/* Title */}
                    <h2 className='s-50 w-700'>{title}</h2>
                    {/* Button */}
                    <Link
                      href='#hero-14'
                      className='btn r-04 btn--theme hover--tra-white'>
                      {button_text}
                    </Link>
                    {/* Button Text */}
                    <p className='p-sm btn-txt ico-15'>
                      <span className='flaticon-check' /> {description}
                    </p>
                  </div>
                </div>
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* END BANNER-7 WRAPPER */}
          </div>{' '}
          {/* End container */}
        </div>{' '}
        {/* End banner overlay */}
      </section>
    </>
  )
}
