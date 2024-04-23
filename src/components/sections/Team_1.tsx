import team1 from '/public/images/team-1.jpg'
import team2 from '/public/images/team-2.jpg'
import team3 from '/public/images/team-3.jpg'
import team4 from '/public/images/team-4.jpg'
import team5 from '/public/images/team-5.jpg'
import team6 from '/public/images/team-6.jpg'
import team7 from '/public/images/team-7.jpg'
import team13 from '/public/images/team-13.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Team_1 = () => {
  return (
    <section id='team-1' className='pt-100 team-section'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-80'>
              {/* Title */}
              <h2 className='s-50 w-700'>
                All we do is dream and craft amazing products
              </h2>
              {/* Text */}
              <p className='s-21 color--grey'>
                Ligula risus auctor tempus magna feugiat lacinia.
              </p>
            </div>
          </div>
        </div>
        {/* TEAM MEMBERS WRAPPER */}
        <div className='team-members-wrapper'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
            {/* TEAM MEMBER #1 */}
            <div className='col'>
              <div className='team-member mb-50 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team1}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  <h6 className='s-20 w-700 color--black'>Jonathan Barnes</h6>
                  <p className='color--grey'>Founder and CEO</p>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #1 */}
            {/* TEAM MEMBER #2 */}
            <div className='col'>
              <div className='team-member mb-50 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team2}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  <h6 className='s-20 w-700 color--black'>Jaime Fletcher</h6>
                  <p className='color--grey'>Software Engineer</p>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #2 */}
            {/* TEAM MEMBER #3 */}
            <div className='col'>
              <div className='team-member mb-50 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team3}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  <h6 className='s-20 w-700 color--black'>Les Bakker</h6>
                  <p className='color--grey'>Software Engineer</p>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #3 */}
            {/* TEAM MEMBER #4 */}
            <div className='col'>
              <div className='team-member mb-50 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team4}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  <h6 className='s-20 w-700 color--black'>Alyssa Garrison</h6>
                  <p className='color--grey'>Web Development</p>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #4 */}
            {/* TEAM MEMBER #5 */}
            <div className='col'>
              <div className='team-member mb-50 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team5}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  <h6 className='s-20 w-700 color--black'>Charlotte Johnson</h6>
                  <p className='color--grey'>Content Manager</p>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #5 */}
            {/* TEAM MEMBER #6 */}
            <div className='col'>
              <div className='team-member mb-50 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team6}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  <h6 className='s-20 w-700 color--black'>Olivia Steiner</h6>
                  <p className='color--grey'>Head of Marketing</p>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #6 */}
            {/* TEAM MEMBER #7 */}
            <div className='col'>
              <div className='team-member mb-50 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team7}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  <h6 className='s-20 w-700 color--black'>Charles Fairless</h6>
                  <p className='color--grey'>Operations Manager</p>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #7 */}
            {/* TEAM MEMBER #8 */}
            <div className='col'>
              <div className='team-member mb-50 wow fadeInUp'>
                {/* Team Member Photo */}
                <div className='team-member-photo r-14'>
                  <div className='hover-overlay'>
                    <Image
                      className='img-fluid'
                      src={team13}
                      alt='team-member-foto'
                    />
                    <div className='item-overlay' />
                  </div>
                </div>
                {/* Team Member Data */}
                <div className='team-member-data'>
                  <h6 className='s-20 w-700 color--black'>Grow with Us!</h6>
                  <p className='color--grey'>
                    <Link href='mailto:youremail@mail.com'>
                      hireme@domain.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>{' '}
            {/* END TEAM MEMBER #8 */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* TEAM MEMBERS WRAPPER */}
        {/* MORES BUTTON */}
        <div className='row'>
          <div className='col'>
            <div className='more-btn text-center mt-20 wow fadeInUp'>
              <Link href='/careers' className='btn btn--tra-black hover--theme'>
                Join our team
              </Link>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Team_1
