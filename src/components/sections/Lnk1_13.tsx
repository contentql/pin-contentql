import Image from 'next/image'

import { Media } from '@/payload-types'

export default function Lnk1_13({
  caption,
  title,
  paragraph,
  heading,
  points,
  background_image,
}: {
  caption?: string
  title?: string
  paragraph?: string
  heading?: string
  points?: {
    point: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section id='lnk-1' className='pt-100 ct-01 content-section division'>
        <div className='container'>
          {/* SECTION CONTENT (ROW) */}
          <div className='row d-flex align-items-center'>
            {/* TEXT BLOCK */}
            <div className='col-md-6 order-last order-md-2'>
              <div className='txt-block left-column wow fadeInRight'>
                {/* Section ID */}
                <span className='section-id'>{caption}</span>
                {/* Title */}
                <h2 className='s-46 w-700'>{title}</h2>
                {/* Text */}
                <p>{paragraph}</p>
                {/* Small Title */}
                <h5 className='s-24 w-700'>{heading}</h5>
                {/* CONTENT BOX #1 */}
                {points?.map((point, index) => (
                  <div key={point?.id} className='cbox-1 ico-15'>
                    <div className='ico-wrap color--theme'>
                      <div className='cbox-1-ico'>
                        <span className='flaticon-check' />
                      </div>
                    </div>
                    <div className='cbox-1-txt'>
                      <p>{point?.point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>{' '}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className='col-md-6 order-first order-md-2'>
              <div className='img-block right-column wow fadeInLeft'>
                <Image
                  className='img-fluid'
                  src={background_image?.url || ''}
                  alt={background_image?.alt || ''}
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>{' '}
          {/* END SECTION CONTENT (ROW) */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
