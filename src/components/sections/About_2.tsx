import a2_1 from '/public/images/a2-1.jpg'
import a2_2 from '/public/images/a2-2.jpg'
import a2_3 from '/public/images/a2-3.jpg'
import a2_4 from '/public/images/a2-4.jpg'
import Image from 'next/image'

const About_2 = () => {
  return (
    <section
      id='about-2'
      className='rel inner-page-hero about-section division'>
      {/* ABOUT-2 TITLE */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-11 col-lg-10 col-xl-9'>
            <div className='about-2-title mb-60'>
              {/* Title */}
              <h2 className='s-52 w-700 mb-30'>
                We provide solutions for your creative ideas
              </h2>
              {/* Text */}
              <p className='mb-0'>
                An enim nullam tempor sapien gravida donec pretium ipsum porta
                justo integer and purus velna vitae auctor integer undo congue
                diam purus pretium and ligula tempor primis libero at tempus,
                blandit and cursus varius magnis at sapien egestas purus vitae
                purus an ipsum
              </p>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* END ABOUT-2 TITLE */}
      {/* ABOUT-2 IMAGES */}
      <div className='container-fluid'>
        <div className='row'>
          {/* IMAGES-1 */}
          <div className='col-md-5'>
            <div className='text-end'>
              {/* IMAGE-1 */}
              <div className='about-2-img a-2-1 r-12'>
                <Image className='img-fluid' src={a2_1} alt='about-image' />
              </div>
              {/* IMAGE-2 */}
              <div className='about-2-img a-2-2 r-12'>
                <Image className='img-fluid' src={a2_2} alt='about-image' />
              </div>
            </div>
          </div>{' '}
          {/* END IMAGES-1 */}
          {/* IMAGES-2 */}
          <div className='col-md-7'>
            {/* IMAGE-3 */}
            <div className='about-2-img a-2-3 r-12'>
              <Image className='img-fluid' src={a2_3} alt='about-image' />
            </div>
            <div className='row'>
              {/* TEXT */}
              <div className='col-md-7 col-lg-6'>
                <div className='a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12'>
                  {/* Icon */}
                  <div className='a2-txt-quote ico-40 o-20'>
                    <span className='flaticon-quote' />
                  </div>
                  {/* Text */}
                  <p>
                    Nullam tempor pretium a gravida donec congue ipsum porta
                    justo integer dolor odio auctor a neque suscipit an ipsum
                    integer congue purus at pretium turpis egestas and volute
                    laoreet quaerat
                  </p>
                  {/* Author */}
                  <p className='a2-txt-author'>
                    Charlie Cheever <span>CEO &amp; CO-FOUNDER</span>
                  </p>
                </div>
              </div>
              {/* IMAGE-4 */}
              <div className='col-md-5 col-lg-6'>
                <div className='about-2-img a-2-4 r-12'>
                  <Image className='img-fluid' src={a2_4} alt='about-image' />
                </div>
              </div>
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END IMAGES-2 */}
        </div>{' '}
        {/* End row */}
      </div>{' '}
      {/* END ABOUT-2 IMAGES */}
    </section>
  )
}

export default About_2
