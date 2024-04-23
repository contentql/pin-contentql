import Link from 'next/link'

const Careers_1 = () => {
  return (
    <section id='careers-1' className='pt-100 pb-60 careers-section'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-70'>
              {/* Title */}
              <h2 className='s-52 w-700'>Open Roles at ContentQL</h2>
              {/* Text */}
              <p className='p-lg'>
                We’re building a better way to work, fueled by transparency,
                trust, and technology that is a force for positive change for
                the hourly workforce
              </p>
            </div>
          </div>
        </div>
        {/* OPEN ROLES */}
        <div className='row row-cols-1 row-cols-md-2'>
          {/* OPEN ROLE #1 */}
          <div className='col'>
            <div className='role-box bg--white-300 r-10'>
              <Link href='/career-role'>
                <span>Sales</span>
                <h6 className='s-20 w-700'>Senior Account Executive</h6>
                <p>New York, NY / Full time</p>
              </Link>
            </div>
          </div>{' '}
          {/* END OPEN ROLE #1 */}
          {/* OPEN ROLE #2 */}
          <div className='col'>
            <div className='role-box bg--white-300 r-10'>
              <Link href='/career-role'>
                <span>Engineering</span>
                <h6 className='s-20 w-700'>Software Engineer, Security</h6>
                <p>Vancouver, British Columbia, Canada / Remote</p>
              </Link>
            </div>
          </div>{' '}
          {/* END OPEN ROLE #2 */}
          {/* OPEN ROLE #3 */}
          <div className='col'>
            <div className='role-box bg--white-300 r-10'>
              <Link href='/career-role'>
                <span>Engineering</span>
                <h6 className='s-20 w-700'>Senior Backend Engineer</h6>
                <p>New York, NY / Full time</p>
              </Link>
            </div>
          </div>{' '}
          {/* END OPEN ROLE #3 */}
          {/* OPEN ROLE #4 */}
          <div className='col'>
            <div className='role-box bg--white-300 r-10'>
              <Link href='/career-role'>
                <span>Engineering</span>
                <h6 className='s-20 w-700'>Engineering Tech Lead</h6>
                <p>Vancouver, British Columbia, Canada / Remote</p>
              </Link>
            </div>
          </div>{' '}
          {/* END OPEN ROLE #4 */}
          {/* OPEN ROLE #5 */}
          <div className='col'>
            <div className='role-box bg--white-300 r-10'>
              <Link href='/career-role'>
                <span>Sales</span>
                <h6 className='s-20 w-700'>Mid-Market Account Executive</h6>
                <p>New York, NY / Full time</p>
              </Link>
            </div>
          </div>{' '}
          {/* END OPEN ROLE #5 */}
          {/* OPEN ROLE #6 */}
          <div className='col'>
            <div className='role-box bg--white-300 r-10'>
              <Link href='/career-role'>
                <span>Marketing</span>
                <h6 className='s-20 w-700'>Product Marketing Manager</h6>
                <p>Vancouver, British Columbia, Canada / Remote</p>
              </Link>
            </div>
          </div>{' '}
          {/* END OPEN ROLE #6 */}
        </div>{' '}
        {/* END OPEN ROLES */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Careers_1
