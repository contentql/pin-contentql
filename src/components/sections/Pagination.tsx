import Link from 'next/link'

const Pagination = () => {
  return (
    <>
      <div className='pb-100 pt-60 page-pagination theme-pagination'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <nav aria-label='Page navigation'>
                <ul className='pagination ico-20 justify-content-center'>
                  <li className='page-item disabled'>
                    <Link className='page-link' href='#' tabIndex={-1}>
                      <span className='flaticon-back' />
                    </Link>
                  </li>
                  <li className='page-item active' aria-current='page'>
                    <Link className='page-link' href='#'>
                      1
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' href='#'>
                      2
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' href='#'>
                      3
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link className='page-link' href='#' aria-label='Next'>
                      <span className='flaticon-next' />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </div>
      <hr className='divider' />
    </>
  )
}

export default Pagination
