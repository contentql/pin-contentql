import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'

export default function Banner13_9({
  title,
  sub_title,
  background_image,
}: {
  title?: string
  sub_title?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='banner-13' className='pt-100 banner-section'>
        <div className='container'>
          {/* BANNER-13 WRAPPER */}
          <div className='banner-13-wrapper bg--05 bg--scroll r-16 block-shadow'>
            <div className='banner-overlay'>
              <div className='row d-flex align-items-center'>
                {/* BANNER-13 TEXT */}
                <div className='col-md-7'>
                  <div className='banner-13-txt color--white'>
                    {/* Title */}
                    <h2 className='s-46 w-700'>{title}</h2>
                    {/* Text */}
                    <p className='p-lg'>{sub_title}</p>
                    {/* Button */}
                    <Link
                      href='/download'
                      className='btn r-04 btn--theme hover--tra-white'
                    >
                      Get srarted - it&apos;s free
                    </Link>
                  </div>
                </div>{' '}
                {/* END BANNER-13 TEXT */}
                {/* BANNER-13 IMAGE */}
                <div className='col-md-5'>
                  <div className='banner-13-img text-center'>
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
            {/* End banner overlay */}
          </div>{' '}
          {/* END BANNER-13 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
