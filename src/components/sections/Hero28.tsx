import VideoPopup from '../elements/VidepPopup'
import dashboard06 from '/public/images/dashboard-06.png'
import Image from 'next/image'

const Hero28 = () => {
  return (
    <section className='gr--whitesmoke ct-08 inner-page-hero content-section division'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-70'>
              {/* Title */}
              <h2 className='s-52 w-700'>
                Integrate with your essential tools in few clicks
              </h2>
              {/* Text */}
              <p className='s-21'>
                Ligula risus auctor tempus magna feugiat lacinia.
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className='row'>
          <div className='col'>
            <div className='img-block video-preview wow fadeInUp'>
              {/* Play Icon */}
              <VideoPopup style={2} />
              {/* Preview Image */}
              <Image
                className='img-fluid'
                src={dashboard06}
                alt='video-preview'
              />
            </div>
          </div>
        </div>
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Hero28
