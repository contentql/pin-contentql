import Image from 'next/image'

import { Media } from '@/payload-types'

export default function Ct02_38({
  caption,
  title,
  sub_title,
  heading,
  points,
  background_image,
}: {
  caption?: string
  title?: string
  sub_title?: string
  heading?: string
  points?: {
    point?: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section className='pt-100 ct-02 content-section division'>
        <div className='container'>
          {/* SECTION CONTENT (ROW) */}
          <div className='row d-flex align-items-center'>
            {/* IMAGE BLOCK */}
            <div className='col-md-6'>
              <div className='img-block left-column wow fadeInRight'>
                <Image
                  className='img-fluid'
                  src={(background_image as Media)?.url || ''}
                  alt={(background_image as Media)?.alt || ''}
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className='col-md-6'>
              <div className='txt-block right-column wow fadeInLeft'>
                {/* Section ID */}
                <span className='section-id'>{caption}</span>
                {/* Title */}
                <h2 className='s-46 w-700'>{title}</h2>
                {/* Text */}
                <p>{sub_title}</p>
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
          </div>{' '}
          {/* END SECTION CONTENT (ROW) */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
