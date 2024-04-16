import Image from 'next/image'

import { Media } from '@/payload-types'

export default function Ct02_39({
  title,
  sub_title,
  heading,
  paragraph,
  points,
  background_image,
}: {
  title?: string
  sub_title?: string
  heading?: string
  paragraph?: string
  points?: {
    point: string
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
                {/* TEXT BOX */}
                <div className='txt-box'>
                  {/* Title */}
                  <h5 className='s-24 w-700'>{title}</h5>
                  {/* Text */}
                  <p>{sub_title}</p>
                </div>{' '}
                {/* END TEXT BOX */}
                {/* TEXT BOX */}
                <div className='txt-box mb-0'>
                  {/* Title */}
                  <h5 className='s-24 w-700'>{heading}</h5>
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
                </div>{' '}
                {/* END TEXT BOX */}
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
