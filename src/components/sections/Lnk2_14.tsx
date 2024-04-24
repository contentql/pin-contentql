import VideoPopup from '../elements/VidepPopup'
import Image from 'next/image'

import { Media } from '@/payload-types'

export default function Lnk2_14({
  title,
  subtitle,
  background_image,
}: {
  title?: string
  subtitle?: string
  background_image?: Media
}) {
  return (
    <>
      <section
        id='lnk-2'
        className='gr--whitesmoke pt-100 ct-08 content-section division'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-50 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21'>{subtitle}</p>
              </div>
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className='row'>
            <div className='col'>
              <div className='img-block video-preview wow fadeInUp'>
                {/* Play Icon */}
                <VideoPopup style={1} />
                {/* Preview Image */}
                <Image
                  className='img-fluid'
                  src={background_image?.url || ''}
                  alt={background_image?.alt || ''}
                  height={1500}
                  width={1500}
                />
              </div>
            </div>
          </div>
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
