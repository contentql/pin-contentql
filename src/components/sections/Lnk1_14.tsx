import Image from 'next/image'

import { Media } from '@/payload-types'

export default function Lnk1_14({
  caption,
  title,
  paragraph,
  points,
  background_image,
}: {
  caption?: string
  title?: string
  paragraph?: string
  points?: {
    point: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section id='lnk-1' className='pt-100 ws-wrapper content-section'>
        <div className='container'>
          <div className='bc-1-wrapper bg--02 bg--fixed r-16'>
            <div className='section-overlay'>
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
                    {/* List */}
                    <ul className='simple-list'>
                      {points?.map((point, index) => (
                        <li key={point?.id} className='list-item'>
                          <p>{point?.point}</p>
                        </li>
                      ))}
                    </ul>
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
