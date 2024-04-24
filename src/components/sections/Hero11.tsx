import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'

export default function Hero11({
  title,
  sub_title,
  button_text,
  description,
  background_image,
}: {
  title?: string
  sub_title?: string
  button_text?: string
  description?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='hero-11' className='bg--scroll hero-section'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            {/* HERO TEXT */}
            <div className='col-md-6'>
              <div className='hero-11-txt wow fadeInRight'>
                {/* Title */}
                <h2 className='s-60 w-700'>{title}</h2>
                {/* Text */}
                <p className='p-lg'>{sub_title}</p>
                {/* Button */}
                <Link
                  href='#banner-3'
                  className='btn r-04 btn--theme hover--tra-black'>
                  {button_text}
                </Link>
                <p className='p-sm btn-txt ico-15'>
                  <span className='flaticon-check' /> {description}
                </p>
              </div>
            </div>{' '}
            {/* END HERO TEXT */}
            {/* HERO IMAGE */}
            <div className='col-md-6'>
              <div className='hero-11-img text-center wow fadeInLeft'>
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
        {/* End container */}
      </section>
    </>
  )
}
