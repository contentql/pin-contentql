import VideoPopup from '../elements/VidepPopup'
import img17 from '/public/images/img-17.jpg'
import Image from 'next/image'

const TextContent_1 = () => {
  return (
    <section className='bg--04 bg--fixed py-100 ct-01 content-section division'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          {/* TEXT BLOCK */}
          <div className='col-md-6 order-last order-md-2'>
            <div className='txt-block left-column wow fadeInRight'>
              {/* Section ID */}
              <span className='section-id'>Co-founder at ContentQL</span>
              {/* Title */}
              <h2 className='s-50 w-700'>Henry Adams</h2>
              {/* Text */}
              <p className='p-lg'>
                &ldquo;Sodales tempor sapien diam purus ipsum quaerat and volute
                fusce a congue laoreet turpis neque diam auctor turpis vitae
                dolor magna luctus placerat neque ipsum fusce cursus ligula
                cursus purus vitae purus and ipsum suscipit. Nemo ipsam cubilia
                donec turpis undo egestas ipsum a purus sapien ultrice aliquam
                lacus and quaerat an ipsum augue turpis sapien cursus congue
                augue&rdquo;
              </p>
            </div>
          </div>{' '}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className='col-md-6 order-first order-md-2'>
            <div className='img-block j-img video-preview right-column wow fadeInLeft'>
              {/* Play Icon */}
              <VideoPopup style={2} />
              {/* Preview Image */}
              <Image
                className='img-fluid r-20'
                src={img17}
                alt='video-preview'
              />
            </div>
          </div>
        </div>{' '}
        {/* End row */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default TextContent_1
