import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'

export default function Projects1_3({
  title,
  sub_title,
  card,
}: {
  title?: string
  sub_title?: string
  card?: {
    heading: string
    background_image: string | Media
    id?: string | null
  }[]
}) {
  return (
    <>
      <section id='projects-1' className='pt-100 projects-section'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-80'>
                {/* Title */}
                <h2 className='s-52 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{sub_title}</p>
              </div>
            </div>
          </div>
          {/* PROJECTS WRAPPER */}
          <div className='projects-wrapper rel'>
            <div className='row align-items-center row-cols-1 row-cols-md-2'>
              {/* PROJECT #1 */}
              {card?.map((cardData, index) => (
                <div key={cardData?.id} className='col'>
                  <div id={`pt-1-${index + 1}`} className='project-details'>
                    {/* Title */}
                    <h5 className='s-22 w-700'>{cardData?.heading}</h5>
                    {/* Image */}
                    <div className='project-preview r-10'>
                      {/* Project Preview */}
                      <div className=''>
                        <Image
                          className='img-fluid'
                          src={(cardData?.background_image as Media)?.url || ''}
                          alt={(cardData?.background_image as Media)?.alt || ''}
                          height={1000}
                          width={1000}
                        />
                        <div className='item-overlay' />
                      </div>
                      {/* Project Link */}
                      <div className='project-link ico-35 color--white'>
                        <Link href='/project-details'>
                          <span className='flaticon-visibility' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* END PROJECT #1 */}
            </div>
          </div>{' '}
          {/* END PROJECTS WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
