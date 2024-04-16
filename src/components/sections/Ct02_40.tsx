import Image from 'next/image'
import Link from 'next/link'

import { Media } from '@/payload-types'

export default function Ct02_40({
  caption,
  title,
  sub_title,
  points,
  background_image,
}: {
  caption?: string
  title?: string
  sub_title?: string
  points?: {
    point: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section className='py-100 ct-02 content-section division'>
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
                {/* Section ID */}
                <span className='section-id'>{caption}</span>
                {/* Title */}
                <h2 className='s-46 w-700'>{title}</h2>
                {/* Text */}
                <p>{sub_title}</p>
                {/* List */}
                <ul className='simple-list'>
                  {points?.map((point, index) => (
                    <li key={point?.id} className='list-item'>
                      <p>
                        Sapien quaerat tempor an ipsum laoreet purus and sapien
                        dolor an ultrice ipsum aliquam undo congue cursus dolor
                      </p>
                    </li>
                  ))}
                </ul>
                {/* Link */}
                <div className='txt-block-tra-link mt-25'>
                  <Link
                    href='#integrations-1'
                    className='tra-link ico-20 color--theme'
                  >
                    All-in-one platform <span className='flaticon-next' />
                  </Link>
                </div>
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
