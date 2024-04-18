import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { LiaPlusCircleSolid } from 'react-icons/lia'

import { websiteTemplates } from '@/mockdata/websiteTemplates'

const Templates = ({
  template_title,
  link1_text,
  link2_text,
}: {
  template_title?: string
  link1_text?: string
  link2_text?: string
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const templatesPerPage = 14

  const indexOfLastTemplate = currentPage * templatesPerPage
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage
  const currentTemplates = websiteTemplates.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate,
  )

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  return (
    <div id='page' className='page-wrapper page-header'>
      <section id='select' className='bg-fixed select-section template-select'>
        <div className='container'>
          <div className='row'>
            {/* LAYOUT-1 */}
            <div
              id='l-0'
              className='col-md-6 col-lg-4 select_link wow fadeInUp'
              data-wow-delay='0.6s'>
              <div className='hover-overlay card-view'>
                <span className='react-icon'>
                  <LiaPlusCircleSolid size={40} />
                </span>
                <div className='text-container'>
                  <div className='text-wow'>
                    <Link
                      href='https://cloud.contentql.io/projects/create'
                      target='_blank'>
                      {link1_text}
                    </Link>{' '}
                  </div>
                </div>
              </div>
              <h4> {template_title}</h4>
            </div>
            {currentTemplates.map(template => (
              <div
                key={template.id}
                id='l-1'
                className='col-md-6 col-lg-4 select_link wow fadeInUp'
                data-wow-delay='0.5s'>
                <div className='hover-overlay card-view'>
                  <Image
                    className='img-fluid'
                    src={template.backgroundImage}
                    alt='layout-preview'
                    height={1000}
                    width={1000}
                  />
                  <div className='text-container'>
                    <div className='text-wow'>
                      <Link href={template.design} target='_blank'>
                        {link1_text}
                      </Link>{' '}
                    </div>
                    <div className='text-wow'>
                      <Link href={template.preview} target='_blank'>
                        {link2_text}
                      </Link>
                    </div>
                  </div>
                  <p className='payment-type'>{template.type}</p>
                </div>
                <h4> {template.name}</h4>
              </div>
            ))}
          </div>
          <div className='row'>
            <ul className='pagination'>
              {Array.from(
                {
                  length: Math.ceil(websiteTemplates.length / templatesPerPage),
                },
                (_, i) => (
                  <li key={i} className='page-item'>
                    <a
                      onClick={() => paginate(i + 1)}
                      href='#'
                      className='page-link'>
                      {i + 1}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>{' '}
      </section>{' '}
    </div>
  )
}

export default Templates
