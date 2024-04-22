import Image from 'next/image'

import { Media } from '@/payload-types'

export default function Lnk2_17({
  title,
  sub_title,
  heading,
  paragraph,
  background_image,
}: {
  title?: string
  sub_title?: string
  heading?: string
  paragraph?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='lnk-2' className='pt-100 ws-wrapper content-section'>
        <div className='container'>
          <div className='bc-1-wrapper bg--white-400 bg--fixed r-16'>
            <div className='section-overlay'>
              <div className='row d-flex align-items-center'>
                {/* IMAGE BLOCK */}
                <div className='col-md-6'>
                  <div className='img-block left-column wow fadeInRight'>
                    <Image
                      className='img-fluid'
                      src={background_image?.url || ''}
                      alt={background_image?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className='col-md-6'>
                  <div className='txt-block right-column wow fadeInLeft'>
                    {/* Title */}
                    <h2 className='s-46 w-700'>{title}</h2>
                    {/* Text */}
                    <p>{sub_title}</p>
                    {/* Small Title */}
                    <h5 className='s-24 w-700 h5-title'>{heading}</h5>
                    {/* Text */}
                    <p className='mb-0'>{paragraph}</p>
                  </div>
                </div>{' '}
                {/* END TEXT BLOCK */}
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
